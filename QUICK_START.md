# 🚀 Quick Start Guide

## Get Your D7 TechNode Website Running in 10 Minutes

Follow these simple steps to get your world-class website up and running!

## ⚡ Step 1: Install Dependencies (2 minutes)

Open PowerShell in the project folder and run:

\`\`\`powershell

# Install main project dependencies

npm install

# Install Sanity CMS dependencies

cd sanity
npm install
cd ..
\`\`\`

## 🔑 Step 2: Set Up Sanity CMS (3 minutes)

### Create a Free Sanity Account

1. Go to [sanity.io](https://sanity.io) and sign up (free)
2. Create a new project:
   - Project name: "D7 TechNode"
   - Dataset: "production"

### Get Your Project ID

In the Sanity dashboard, copy your **Project ID**

### Configure Sanity

1. Open `sanity/sanity.config.ts`
2. Replace `'YOUR_PROJECT_ID'` with your actual Project ID

### Deploy Sanity Studio

\`\`\`powershell
cd sanity
npx sanity deploy
cd ..
\`\`\`

Choose a studio hostname (e.g., `d7-technode`)

## 🔧 Step 3: Configure Environment Variables (1 minute)

1. Copy the example environment file:
   \`\`\`powershell
   Copy-Item .env.example .env.local
   \`\`\`

2. Open `.env.local` and update:
   \`\`\`
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   \`\`\`

## 🎨 Step 4: Run the Website (1 minute)

Start the development server:

\`\`\`powershell
npm run dev
\`\`\`

**Open your browser and visit:**

- Website: [http://localhost:3000](http://localhost:3000)
- CMS Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## 📝 Step 5: Add Your First Content (3 minutes)

1. **Go to the CMS**: [http://localhost:3000/studio](http://localhost:3000/studio)

2. **Add a Resource:**
   - Click "Resources & Manuals" → "Create"
   - Fill in:
     - Title: "Welcome Guide"
     - Category: "User Manual"
     - Description: "Getting started with D7 TechNode"
   - Click "Publish"

3. **View Your Resource:**
   - Go to [http://localhost:3000/resources](http://localhost:3000/resources)
   - See your published resource!

## ✅ You're Done!

Your website is now running with:

- ✨ Modern, responsive design
- 📱 Mobile-optimized pages
- 🎨 Beautiful animations
- 📚 Dynamic resource library
- ⚙️ Easy-to-use CMS

## 🎯 Next Steps

### Customize Your Site

1. **Update Company Info:**
   - Edit `components/Footer.tsx` for contact details
   - Update social media links

2. **Add Your Logo:**
   - Replace `public/logo.png` with your logo

3. **Customize Colors:**
   - Edit `tailwind.config.js` to match your brand

4. **Add Content:**
   - Use `/studio` to add services, products, and resources

### Deploy to Production

Choose your deployment platform:

**Easiest (Recommended):**
\`\`\`powershell

# Install Vercel CLI

npm i -g vercel

# Deploy

vercel
\`\`\`

**Or use:**

- Vercel (automatic GitHub deployments)
- Netlify
- AWS Amplify

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 📚 Documentation

- [README.md](README.md) - Full documentation
- [CONTENT_MANAGEMENT_GUIDE.md](CONTENT_MANAGEMENT_GUIDE.md) - CMS user guide
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment options

## 🆘 Need Help?

### Common Issues

**"Module not found"**
\`\`\`powershell

# Clear node_modules and reinstall

Remove-Item -Recurse -Force node_modules
npm install
\`\`\`

**"Can't access Sanity Studio"**

- Make sure you've added your Project ID to `sanity/sanity.config.ts`
- Check that `.env.local` has the correct values

**"Images not loading"**

- Verify your Sanity Project ID is correct
- Check that images are published in Sanity Studio

### Get Support

- Email: info@d7technode.com
- Documentation: Check the guides in this folder

## 🎉 Congratulations!

You now have a world-class, production-ready website with:

- Professional design
- Content management system
- Mobile optimization
- SEO ready
- Scalable architecture
- Easy for non-programmers to manage

**Start adding your content and make it yours!**

---

Built with ❤️ using Next.js 14, TypeScript, Tailwind CSS, and Sanity CMS
