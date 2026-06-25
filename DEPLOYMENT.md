# Deployment Guide

## D7 TechNode Website

This guide covers deployment options for the D7 TechNode website.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is the easiest deployment option with automatic deployments from Git.

#### Steps:

1. **Prepare Your Repository**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   \`\`\`

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: .next

3. **Add Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add:
     \`\`\`
     NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
     NEXT_PUBLIC_SANITY_DATASET=production
     SANITY_API_TOKEN=your_token
     \`\`\`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in 2-3 minutes at `your-project.vercel.app`

5. **Custom Domain** (Optional)
   - Go to Settings → Domains
   - Add your custom domain
   - Update DNS settings as instructed

**Auto-Deploy**: Every push to main branch automatically deploys!

---

### Option 2: Netlify

Another excellent option with similar ease of use.

#### Steps:

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Install command: `npm install`

3. **Environment Variables**
   - Go to Site settings → Build & deploy → Environment
   - Add the same variables as Vercel

4. **Deploy**
   - Click "Deploy site"
   - Site live at `your-site.netlify.app`

---

### Option 3: AWS Amplify

For enterprise deployments with AWS infrastructure.

#### Steps:

1. **Install Amplify CLI**
   \`\`\`bash
   npm install -g @aws-amplify/cli
   amplify configure
   \`\`\`

2. **Initialize Amplify**
   \`\`\`bash
   amplify init
   \`\`\`

3. **Add Hosting**
   \`\`\`bash
   amplify add hosting
   \`\`\`
   - Choose: Amazon CloudFront and S3

4. **Configure Environment Variables**
   - In AWS Amplify Console
   - Go to App settings → Environment variables

5. **Publish**
   \`\`\`bash
   amplify publish
   \`\`\`

---

### Option 4: Docker Deployment

For containerized deployments on any platform.

#### Create Dockerfile:

\`\`\`dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package\*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
\`\`\`

#### Build and Run:

\`\`\`bash
docker build -t d7-technode .
docker run -p 3000:3000 -e NEXT_PUBLIC_SANITY_PROJECT_ID=xxx d7-technode
\`\`\`

---

### Option 5: Traditional VPS (DigitalOcean, Linode, etc.)

For full control over infrastructure.

#### Steps:

1.  **Set Up Server**
    \`\`\`bash

    # SSH into your server

    ssh user@your-server-ip

    # Install Node.js

    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs

    # Install PM2

    sudo npm install -g pm2
    \`\`\`

2.  **Clone Repository**
    \`\`\`bash
    git clone YOUR_REPO_URL
    cd d7-technode
    \`\`\`

3.  **Install Dependencies**
    \`\`\`bash
    npm install
    \`\`\`

4.  **Create .env.local**
    \`\`\`bash
    nano .env.local

    # Add your environment variables

    \`\`\`

5.  **Build**
    \`\`\`bash
    npm run build
    \`\`\`

6.  **Run with PM2**
    \`\`\`bash
    pm2 start npm --name "d7-technode" -- start
    pm2 save
    pm2 startup
    \`\`\`

7.  **Set Up Nginx**
    \`\`\`nginx
    server {
    listen 80;
    server_name your-domain.com;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

    }
    \`\`\`

8.  **SSL with Let's Encrypt**
    \`\`\`bash
    sudo apt install certbot python3-certbot-nginx
    sudo certbot --nginx -d your-domain.com
    \`\`\`

---

## 🔧 Sanity Studio Deployment

### Deploy Sanity Studio Separately

1. **Navigate to Sanity Folder**
   \`\`\`bash
   cd sanity
   \`\`\`

2. **Deploy to Sanity Cloud** (Free)
   \`\`\`bash
   npm run deploy
   \`\`\`

3. **Access Studio**
   - URL: `https://your-project.sanity.studio`
   - Or embed at `/studio` on your main site

---

## 🌐 Domain Configuration

### DNS Settings

For most deployment platforms, you'll need to configure DNS:

**A Record:**
\`\`\`
Type: A
Name: @
Value: YOUR_SERVER_IP
TTL: 3600
\`\`\`

**CNAME Record (for www):**
\`\`\`
Type: CNAME
Name: www
Value: your-domain.com
TTL: 3600
\`\`\`

### Platform-Specific DNS

**Vercel:**

- A Record: 76.76.21.21
- CNAME: cname.vercel-dns.com

**Netlify:**

- Use Netlify DNS or follow their custom domain guide

---

## ⚡ Performance Optimization

### Enable Caching

In `next.config.js`:
\`\`\`javascript
module.exports = {
// ... existing config
async headers() {
return [
{
source: '/:all\*(svg|jpg|png|webp|woff|woff2)',
headers: [
{
key: 'Cache-Control',
value: 'public, max-age=31536000, immutable',
},
],
},
]
},
}
\`\`\`

### Image Optimization

Already configured with Next.js Image component!

### CDN Configuration

Vercel and Netlify automatically use CDN. For others:

- Cloudflare (free)
- AWS CloudFront
- Fastly

---

## 📊 Monitoring & Analytics

### Add Google Analytics

1. **Get Tracking ID** from Google Analytics

2. **Create \`lib/gtag.ts\`:**
   \`\`\`typescript
   export const GA_TRACKING_ID = 'UA-XXXXXXXXX-X'

   export const pageview = (url: string) => {
   window.gtag('config', GA_TRACKING_ID, {
   page_path: url,
   })
   }
   \`\`\`

3. **Add to \`app/layout.tsx\`:**
   \`\`\`typescript
   <Script
     src={\`https://www.googletagmanager.com/gtag/js?id=\${GA_TRACKING_ID}\`}
     strategy="afterInteractive"
   />
   \`\`\`

---

## 🔒 Security Checklist

Before going live:

- [ ] All environment variables set
- [ ] HTTPS enabled (SSL certificate)
- [ ] Security headers configured
- [ ] CORS properly configured
- [ ] API keys secured
- [ ] Sanity Studio access restricted
- [ ] Rate limiting enabled
- [ ] Regular backups configured
- [ ] Error tracking (Sentry, etc.)
- [ ] Monitoring alerts set up

---

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

\`\`\`yaml
name: Deploy

on:
push:
branches: [ main ]

jobs:
deploy:
runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build
      env:
        NEXT_PUBLIC_SANITY_PROJECT_ID: ${{ secrets.SANITY_PROJECT_ID }}

    - name: Deploy to Vercel
      run: vercel --prod
      env:
        VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}

\`\`\`

---

## 📞 Support

If you encounter deployment issues:

- Email: support@d7technode.com
- Platform Support:
  - Vercel: vercel.com/support
  - Netlify: netlify.com/support
  - Sanity: sanity.io/help

---

**Ready to Deploy?** Choose your platform and follow the steps above!

Last Updated: December 2025
