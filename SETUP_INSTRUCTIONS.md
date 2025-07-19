# Portfolio Website Setup Instructions

## Quick Start Guide

### 1. Prerequisites
Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or later)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`

- **npm** (comes with Node.js) or **yarn**
  - Verify npm: `npm --version`
  - Or install yarn: `npm install -g yarn`

### 2. Installation Steps

1. **Extract the project files** to your desired location

2. **Open terminal/command prompt** and navigate to the project folder:
   \`\`\`bash
   cd path/to/your/portfolio-project
   \`\`\`

3. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`
   
   Or if you prefer yarn:
   \`\`\`bash
   yarn install
   \`\`\`

4. **Start the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`
   
   Or with yarn:
   \`\`\`bash
   yarn dev
   \`\`\`

5. **Open your browser** and go to:
   \`\`\`
   http://localhost:3000
   \`\`\`

### 3. Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### 4. Customization

#### Update Personal Information:

1. **Contact Details** (in `app/page.tsx`):
   - Change email, phone, LinkedIn, GitHub links
   - Update the click handlers for social media

2. **Resume File**:
   - Replace `public/resume-preview.png` with your resume
   - Update the download link in the code

3. **Projects**:
   - Edit `components/real-projects-section.tsx`
   - Add your own projects, GitHub links, and live demos

4. **Education**:
   - Modify `components/education-section.tsx`
   - Update your educational background

5. **Skills**:
   - Edit the `skillsData` object in `app/page.tsx`
   - Add or remove your technical skills

#### Styling Customization:

1. **Colors**: Edit `tailwind.config.js` and `app/globals.css`
2. **Fonts**: Modify `app/layout.tsx`
3. **Animations**: Adjust Framer Motion settings in components

### 5. Deployment

#### Deploy to Vercel (Free & Easy):

1. Push your code to GitHub
2. Go to https://vercel.com
3. Sign up with GitHub
4. Import your repository
5. Deploy automatically

#### Deploy to Netlify:

1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Or connect your GitHub repository

### 6. Troubleshooting

#### Common Issues:

1. **Node.js version error**:
   - Update to Node.js 18+ from nodejs.org

2. **Port 3000 already in use**:
   - Kill the process or use: `npm run dev -- -p 3001`

3. **Dependencies not installing**:
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

4. **Build errors**:
   - Check for TypeScript errors
   - Ensure all imports are correct

#### Getting Help:

- Check the console for error messages
- Ensure all files are in the correct directories
- Verify Node.js and npm versions

### 7. File Structure Overview

\`\`\`
portfolio-website/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Main page component
├── components/            # React components
│   ├── ui/               # UI components
│   └── *.tsx            # Feature components
├── lib/                  # Utility functions
├── public/              # Static assets
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── next.config.js      # Next.js configuration
\`\`\`

### 8. Next Steps

1. Customize the content with your information
2. Test on different devices and browsers
3. Deploy to your preferred platform
4. Share your portfolio with the world!

---

**Need help?** Contact: pranavsingh9471@gmail.com
