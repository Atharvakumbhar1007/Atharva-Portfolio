const https = require('https');

function escapeHtml(text) {
  if (typeof text !== 'string') return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const receiverEmail = process.env.RECEIVER_EMAIL || 'atharvakumbhar631@gmail.com';

  if (!resendApiKey) {
    console.error('Server Configuration Error: Missing RESEND_API_KEY environment variable');
    return res.status(500).json({
      message: 'Server Configuration Error: Contact form service is currently not configured.'
    });
  }

  try {
    const { name, email, message } = req.body || {};

    // Validate inputs
    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100) {
      return res.status(400).json({ message: 'Invalid name. Must be between 2 and 100 characters.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim()) || email.length > 254) {
      return res.status(400).json({ message: 'Invalid email address.' });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 5000) {
      return res.status(400).json({ message: 'Message must be between 10 and 5000 characters.' });
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br/>');

    const payload = JSON.stringify({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: receiverEmail,
      reply_to: safeEmail,
      subject: `New Portfolio Message from ${safeName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #6b21a8; margin-top: 0;">New Portfolio Contact Submission</h2>
          <p style="margin: 10px 0;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <div style="margin-top: 15px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #9333ea; border-radius: 4px;">
            <strong>Message:</strong><br/>
            <p style="margin-top: 8px; line-height: 1.6;">${safeMessage}</p>
          </div>
        </div>
      `
    });

    const options = {
      hostname: 'api.resend.com',
      path: '/emails',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const data = await new Promise((resolve, reject) => {
      const request = https.request(options, (response) => {
        let body = '';
        response.on('data', (chunk) => body += chunk);
        response.on('end', () => {
          try {
            resolve({ status: response.statusCode, data: JSON.parse(body) });
          } catch (e) {
            reject(new Error('Failed to parse response from email service'));
          }
        });
      });

      request.on('error', (e) => reject(e));
      request.write(payload);
      request.end();
    });

    if (data.status === 200 || data.status === 201) {
      return res.status(200).json({ success: true, message: 'Message delivered successfully!' });
    } else {
      return res.status(data.status || 500).json({
        message: 'Email service returned an error. Please try again or reach out directly.'
      });
    }
  } catch (error) {
    console.error('Error submitting form via Resend:', error.message);
    return res.status(500).json({
      message: 'Internal Server Error. Please contact atharvakumbhar631@gmail.com directly.'
    });
  }
};
