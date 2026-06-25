# D7 TechNode Website - Automated Setup Script
# This script helps you set up the website quickly

Write-Host "
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║         D7 TechNode Website - Setup Wizard                ║
║         World-Class Technology Website                     ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
" -ForegroundColor Cyan

Write-Host "`n🚀 Starting automated setup...`n" -ForegroundColor Green

# Step 1: Check Node.js
Write-Host "Step 1/5: Checking Node.js installation..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js not found! Please install Node.js 18+ from https://nodejs.org" -ForegroundColor Red
    exit 1
}

# Step 2: Install Dependencies
Write-Host "`nStep 2/5: Installing project dependencies..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Gray

npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Main dependencies installed" -ForegroundColor Green

# Install Sanity dependencies
Write-Host "`nInstalling Sanity CMS dependencies..." -ForegroundColor Gray
Set-Location sanity
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Failed to install Sanity dependencies" -ForegroundColor Red
    Set-Location ..
    exit 1
}
Set-Location ..
Write-Host "✓ Sanity dependencies installed" -ForegroundColor Green

# Step 3: Environment Setup
Write-Host "`nStep 3/5: Setting up environment variables..." -ForegroundColor Yellow

if (Test-Path .env.local) {
    Write-Host "! .env.local already exists, skipping..." -ForegroundColor Yellow
} else {
    Copy-Item .env.example .env.local
    Write-Host "✓ Created .env.local from template" -ForegroundColor Green
    Write-Host "⚠ IMPORTANT: You need to add your Sanity Project ID to .env.local" -ForegroundColor Cyan
}

# Step 4: Sanity Setup Instructions
Write-Host "`nStep 4/5: Sanity CMS Setup" -ForegroundColor Yellow
Write-Host "
To complete setup, you need to:
1. Create a free account at https://sanity.io
2. Create a new project (or use existing)
3. Copy your Project ID
4. Update these files:
   - .env.local (add your Project ID)
   - sanity/sanity.config.ts (add your Project ID)

Then run: cd sanity && npx sanity deploy
" -ForegroundColor Gray

# Step 5: Instructions
Write-Host "`nStep 5/5: Setup Complete! 🎉" -ForegroundColor Green
Write-Host "
╔════════════════════════════════════════════════════════════╗
║                   NEXT STEPS                               ║
╚════════════════════════════════════════════════════════════╝

1. Set up Sanity CMS:
   → Go to https://sanity.io and create account
   → Create project and get Project ID
   → Update .env.local with your Project ID
   → Update sanity/sanity.config.ts with Project ID

2. Deploy Sanity Studio:
   cd sanity
   npx sanity deploy

3. Start development server:
   npm run dev

4. Open in browser:
   → Website: http://localhost:3000
   → CMS Studio: http://localhost:3000/studio

5. Read documentation:
   → Quick Start: QUICK_START.md
   → Full Guide: README.md
   → CMS Guide: CONTENT_MANAGEMENT_GUIDE.md

╔════════════════════════════════════════════════════════════╗
║  Need help? Check the documentation or contact support    ║
║  Email: info@d7technode.com                               ║
╚════════════════════════════════════════════════════════════╝
" -ForegroundColor Cyan

Write-Host "`n✨ Setup wizard completed successfully!`n" -ForegroundColor Green
