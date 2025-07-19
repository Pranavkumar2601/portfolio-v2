# Pranav Kumar - Portfolio Website

A modern, animated portfolio website built with Next.js, TypeScript, Framer Motion, and Tailwind CSS.

## Features

- 🚀 Modern design with smooth animations
- 📱 Fully responsive across all devices
- 🎯 Interactive train navigation system
- 🎨 Beautiful glassmorphism effects
- ⚡ Fast performance with Next.js 14
- 🎭 Framer Motion animations
- 📊 Real project showcases
- 📝 Research publications section
- 🎓 Educational background
- 📞 Functional contact information

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine:
- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Extract the project files
2. Navigate to the project directory
3. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### Development

Run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

\`\`\`bash
npm run build
npm run start
# or
yarn build
yarn start
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── animated-background.tsx
│   ├── education-section.tsx
│   ├── real-projects-section.tsx
│   ├── research-section.tsx
│   └── smooth-dual-track-navigation.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── resume-preview.png
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
\`\`\`

## Customization

### Personal Information

Update the following files with your information:

1. **Contact Details** (`app/page.tsx`):
   - Email address
   - Phone number
   - LinkedIn profile
   - GitHub profile

2. **Resume** (`public/`):
   - Replace `resume-preview.png` with your resume

3. **Projects** (`components/real-projects-section.tsx`):
   - Update project details
   - Add your GitHub repositories
   - Update live demo links

4. **Education** (`components/education-section.tsx`):
   - Update educational background
   - Modify GPAs and dates

5. **Research** (`components/research-section.tsx`):
   - Update research publications
   - Modify certificates and awards

### Styling

- Colors can be modified in `tailwind.config.js`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind classes

### Animations

- Framer Motion animations are configured in individual components
- Modify animation properties in component files

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Performance

- Optimized images with Next.js Image component
- Lazy loading for sections
- Efficient animations with Framer Motion
- Minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

This project is open source and available under the MIT License.

## Contact

- **Email**: pranavsingh9471@gmail.com
- **Phone**: +91 9955388960
- **LinkedIn**: [Connect with me](https://linkedin.com/in/pranav-kumar-singh)
- **GitHub**: [View my code](https://github.com/pranavkumar9471)

---

Built with ❤️ by Pranav Kumar
