# D7 TechNode - World-Class Technology Website

A modern, scalable, and fully-featured website for D7 TechNode built with Next.js 14, TypeScript, Tailwind CSS, and Sanity CMS.

## 🚀 Features

- ✨ **Modern Design**: Beautiful, responsive UI with smooth animations
- 🔒 **Secure & Scalable**: Built with enterprise-grade technologies
- 📱 **Fully Responsive**: Perfect experience on all devices
- 🎨 **Easy Content Management**: Sanity CMS for non-technical users
- 📚 **Resource Library**: Advanced search, filtering, and categorization
- ⚡ **Performance Optimized**: Server-side rendering and image optimization
- 🎯 **SEO Ready**: Meta tags and structured data
- 🔄 **Integrable**: RESTful API ready for third-party integrations

## 📋 Pages

1. **Home** - Hero section, features, services overview, and CTA
2. **About** - Company mission, vision, values, and why choose us
3. **Services** - Comprehensive service catalog with dynamic content
4. **Products** - Product showcase with pricing and features
5. **Resources** - Searchable library of manuals and documentation
6. **Contact** - Contact form and business information

## 🛠️ Technology Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

### Backend/CMS

- **Sanity CMS** - Headless CMS for content management
- **Next Sanity** - Official Sanity integration

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn
- A Sanity account (free at [sanity.io](https://sanity.io))

### Step 1: Install Dependencies

\`\`\`bash

# Install frontend dependencies

npm install

# Install Sanity Studio dependencies

cd sanity
npm install
cd ..
\`\`\`

### Step 2: Set Up Sanity CMS

1. Create a Sanity project:
   \`\`\`bash
   cd sanity
   npm create sanity@latest -- --project d7-technode --dataset production
   \`\`\`

2. Copy your Sanity Project ID

3. Update \`sanity/sanity.config.ts\` with your project ID

### Step 3: Configure Environment Variables

1. Copy the example environment file:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

2. Update \`.env.local\` with your Sanity credentials:
   \`\`\`
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token_here
   \`\`\`

### Step 4: Deploy Sanity Studio

\`\`\`bash
cd sanity
npm run deploy
\`\`\`

## 🚀 Running the Website

### Development Mode

\`\`\`bash

# Run Next.js development server

npm run dev
\`\`\`

Visit [http://localhost:3000](http://localhost:3000)

### Sanity Studio

Access the Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio) or your deployed studio URL.

### Production Build

\`\`\`bash
npm run build
npm start
\`\`\`

## 📝 Content Management Guide

### For Non-Programmers

The website includes an easy-to-use Content Management System (CMS) that allows you to:

1. **Add Resources/Manuals**
   - Go to `/studio` or your Sanity Studio URL
   - Click "Resources & Manuals"
   - Click "Create" button
   - Fill in the form:
     - Title: Name of the resource
     - Category: Type of resource
     - Description: Brief description
     - Upload File: Attach PDF, DOC, or other files
     - Cover Image: Optional thumbnail
     - Tags: Add searchable keywords
   - Click "Publish"

2. **Manage Services**
   - Navigate to "Services" in Sanity Studio
   - Add/Edit service details
   - Customize features and descriptions

3. **Update Products**
   - Go to "Products" section
   - Add new products with pricing
   - Upload product images

4. **Edit Pages**
   - Select "Pages" in the studio
   - Edit content using the rich text editor
   - Changes appear immediately on the site

### Quick Tips

- ✅ Always add descriptive titles
- ✅ Use high-quality images (recommended: 1200x800px)
- ✅ Add relevant tags for better searchability
- ✅ Mark important items as "Featured"
- ✅ Click "Publish" to make changes live

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy automatically

### Netlify

1. Connect your Git repository
2. Build command: \`npm run build\`
3. Publish directory: \`.next\`
4. Add environment variables

### Other Platforms

Compatible with any Node.js hosting:

- AWS Amplify
- Cloudflare Pages
- Digital Ocean App Platform
- Railway
- Render

## 🔧 Customization

### Colors & Branding

Edit [tailwind.config.js](tailwind.config.js) to customize colors:

\`\`\`javascript
colors: {
primary: {
// Your brand colors
}
}
\`\`\`

### Logo

Replace [public/logo.png](public/logo.png) with your logo.

### Content

All content is managed through Sanity Studio - no code changes needed!

## 📊 Features Breakdown

### Resource Management System

- **Upload multiple file types**: PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, ZIP
- **Categorization**: 7 pre-defined categories
- **Search functionality**: Full-text search across titles, descriptions, and tags
- **Filtering**: Filter by category
- **Featured resources**: Highlight important resources
- **Auto-generated previews**: Cover images and metadata

### Scalability Features

- Server-side rendering (SSR) for fast initial loads
- Image optimization with Next.js Image
- API routes ready for integrations
- Incremental Static Regeneration (ISR)
- Edge-ready architecture

### Integrations Ready

- RESTful API endpoints
- Webhook support via Sanity
- Third-party service integration
- Analytics ready (Google Analytics, etc.)
- Email service integration points

## 🔒 Security

- Environment variables for sensitive data
- Sanity Studio authentication
- CORS configuration
- Input sanitization
- Secure file uploads

## 📱 Mobile Optimization

- Fully responsive design
- Touch-friendly interfaces
- Optimized images for mobile
- Fast loading on 3G/4G networks

## 🤝 Support

For technical support:

- Email: info@d7technode.com
- Phone: +263 77 102 0108

## 📄 License

Copyright © 2025 D7 TechNode. All rights reserved.

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Set up Sanity project
3. ✅ Configure environment variables
4. ✅ Add initial content via Sanity Studio
5. ✅ Customize colors and branding
6. ✅ Deploy to production
7. ✅ Train content managers on CMS usage

---

Built with ❤️ using Next.js, TypeScript, and Sanity CMS
