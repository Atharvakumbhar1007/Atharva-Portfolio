# Atharva Vinayak Kumbhar — Portfolio

🌐 **Live Website**: [https://atharvakumbhar1007.github.io/Atharva-Portfolio/](https://atharvakumbhar1007.github.io/Atharva-Portfolio/)

![Atharva Vinayak Kumbhar Portfolio Preview](portfolio_assets/og-preview.jpg)

## About

Atharva Vinayak Kumbhar is a Full Stack Developer focused on building modern web applications, REST APIs, database systems, and AI-powered/Agentic AI solutions.

---

## Portfolio Features

- **Modern Responsive Portfolio**: Sleek dark-mode aesthetic with custom glassmorphism design and fluid layouts across desktop, tablet, and mobile devices.
- **Animated Hero Section**: Dynamic headline with rotating typing titles and quick access to social connections and resume viewer.
- **Three.js Interactive Background**: Dynamic 3D starfield particle canvas with real-time mouse parallax interactivity, optimized for mobile battery and DPR.
- **GSAP & ScrollTrigger Animations**: Entrance animations, section heading reveals, card stagger effects, and timeline reveals.
- **Projects Showcase**: Highlights key projects (*AI Website Generator*, *Bookstore API*, and *E-Commerce Database Management System*) with tech tags and direct GitHub links.
- **Technical Skills Matrix**: Interactive category filtering across Languages, Frontend, Backend, Databases, Tools, AI & Agentic AI, and CS Fundamentals.
- **Education Journey**: Interactive academic timeline covering B.E. in Computer Engineering at Vishwaniketan's IMEET, 12th (HSC), and 10th (SSC).
- **Certifications Showcase**: Verified credentials and project competition achievements including certificate lightbox modals for *Tech-Expo 3.0: Project Competition* (PHCET Rasayani), *IoT: Monitoring & Optimization Challenges* (Vishwaniketan), and Udemy credential verification.
- **Developer Profiles**: Direct access to GitHub, LinkedIn, and HackerRank networks.
- **Interactive Resume Modal**: Embedded in-browser PDF viewer with direct download button, Escape key, and backdrop click dismiss handlers.
- **Contact Form**: Serverless dispatch endpoint via Resend with client and server-side input sanitization.
- **Accessibility Features**: Keyboard navigation, ARIA dialog and modal roles, contrast compliance, and `prefers-reduced-motion` support.

---

## Tech Stack

The portfolio website itself is built with:

- **HTML5**: Semantic document structure
- **CSS3**: Custom design system, CSS variables, glassmorphism, responsive media queries
- **JavaScript (ES6+)**: Core UI logic, modal controllers, and interactive filtering
- **Three.js**: WebGL particle starfield background
- **GSAP & ScrollTrigger**: Smooth motion design and scroll-driven reveals
- **Vercel Serverless Functions**: Node.js API backend (`/api/submit`)
- **Resend**: Transactional email service integration

---

## Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Atharvakumbhar1007/Atharva-Portfolio.git
   cd Atharva-Portfolio
   ```

2. **Run locally**:
   ```bash
   npm start
   ```
   *or:*
   ```bash
   python -m http.server 3000
   ```
   Open `http://localhost:3000` in your browser.

---

## Deployment

### GitHub Pages (Static Hosting)
This portfolio is configured for automated continuous deployment via **GitHub Actions** (`.github/workflows/deploy.yml`). On every push to the `main` branch, the workflow packages the static website and publishes it directly to:
👉 **[https://atharvakumbhar1007.github.io/Atharva-Portfolio/](https://atharvakumbhar1007.github.io/Atharva-Portfolio/)**

### Vercel (Optional Full-Stack with Serverless Email)
If deploying to Vercel with active `/api/submit` form delivery via Resend:

| Variable | Description |
| :--- | :--- |
| `RESEND_API_KEY` | Your Resend API key |
| `RECEIVER_EMAIL` | Target email for submissions (Defaults to `atharvakumbhar631@gmail.com`) |

---

## Developer

- **Name**: Atharva Vinayak Kumbhar
- **GitHub**: [Atharvakumbhar1007](https://github.com/Atharvakumbhar1007)
- **LinkedIn**: [Atharva Kumbhar](https://www.linkedin.com/in/atharva-kumbhar-749724264/)
- **HackerRank**: [atharvakumbhar62](https://www.hackerrank.com/profile/atharvakumbhar62)
- **Email**: [atharvakumbhar631@gmail.com](mailto:atharvakumbhar631@gmail.com)

---

## Attribution & Acknowledgements

The visual UI structure and motion inspiration for this portfolio originate from an open design base, customized and engineered by Atharva Vinayak Kumbhar for his personal developer portfolio.
