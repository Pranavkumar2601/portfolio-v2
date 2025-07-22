# Portfolio Website

A modern, animated portfolio website built with Next.js, TypeScript, Framer Motion, and Tailwind CSS.

## Features

- Responsive, animated personal portfolio
- Contact form (configurable via environment variables)
- Project showcase section
- Education and research highlights
- Easy customization for your own info

## Getting Started

### 1. Fork or Clone

- **Fork** this repository on GitHub to your own account.
- Or **clone** directly:
  ```bash
  git clone https://github.com/YOUR_USERNAME/portfolio-website.git
  cd portfolio-website
  ```

### 2. Install Dependencies

- Using npm:
  ```bash
  npm install
  ```
- Or with yarn:
  ```bash
  yarn install
  ```
- Or with pnpm:
  ```bash
  pnpm install
  ```

### 3. Configure Environment Variables

- Create a file named `.env.local` in the root directory:
  ```env
  NEXT_PUBLIC_EMAIL="your@email.com"
  NEXT_PUBLIC_PHONE="+1234567890"
  NEXT_PUBLIC_LINKEDIN="https://linkedin.com/in/your-profile"
  NEXT_PUBLIC_GITHUB="https://github.com/yourusername"
  NEXT_PUBLIC_SITE_NAME="Your Portfolio Name"
  NEXT_PUBLIC_OWNER_NAME="Your Name"
  ```
- **Never commit `.env.local` to your repository!**

### 4. Start the Development Server

```bash
npm run dev
```

- Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

- Update your personal info in `.env.local`.
- Add your projects in `components/real-projects-section.tsx`.
- Update education in `components/education-section.tsx`.
- Update research in `components/research-section.tsx`.
- Change colors in `tailwind.config.js`.
- Update global styles in `app/globals.css`.

## Deployment

- Deploy easily to Vercel, Netlify, or any platform supporting Next.js.

## Files to Add to `.gitignore`

- `.env.local` (contains sensitive info)
- `.next/` (build output)
- `node_modules/` (dependencies)
- `*.log` (log files)

## License

This project is open source and available under the MIT License.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
