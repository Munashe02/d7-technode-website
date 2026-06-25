# 📁 Project Structure

\`\`\`
D7 Technode/
├── 📂 app/ # Next.js 14 App Router
│ ├── 📂 about/ # About page
│ │ └── page.tsx # Company info, mission, vision
│ ├── 📂 contact/ # Contact page
│ │ └── page.tsx # Contact form & information
│ ├── 📂 products/ # Products catalog
│ │ └── page.tsx # Dynamic product listing
│ ├── 📂 resources/ # Resources & Manuals library
│ │ └── page.tsx # Searchable resource center
│ ├── 📂 services/ # Services page
│ │ └── page.tsx # Service catalog
│ ├── 📂 studio/ # Embedded CMS
│ │ ├── layout.tsx
│ │ └── page.tsx
│ ├── globals.css # Global styles & Tailwind
│ ├── layout.tsx # Root layout with header/footer
│ └── page.tsx # Homepage
│
├── 📂 components/ # Reusable React components
│ ├── CTA.tsx # Call-to-action section
│ ├── Features.tsx # Features grid
│ ├── Footer.tsx # Site footer
│ ├── Header.tsx # Navigation header
│ ├── Hero.tsx # Homepage hero section
│ └── Services.tsx # Services showcase
│
├── 📂 lib/ # Utility libraries
│ └── sanity.ts # Sanity client & data fetching
│
├── 📂 public/ # Static assets
│ ├── 📂 studio/ # Sanity Studio assets
│ │ └── index.html
│ └── logo.png # Company logo
│
├── 📂 resources/ # Original company resources
│ ├── D7 TechNode Brand.pdf
│ ├── D7 TechNode logo.png
│ ├── D7 TechNode logo2.png
│ └── ... # Other brand assets
│
├── 📂 sanity/ # Sanity CMS configuration
│ ├── 📂 schemas/ # Content schemas
│ │ ├── index.ts # Schema exports
│ │ ├── page.ts # Page content type
│ │ ├── product.ts # Product content type
│ │ ├── resource.ts # Resource/Manual content type
│ │ └── service.ts # Service content type
│ ├── package.json # Sanity dependencies
│ └── sanity.config.ts # Sanity configuration
│
├── 📂 types/ # TypeScript type definitions
│ └── global.d.ts
│
├── 📂 .vscode/ # VS Code workspace settings
│ ├── extensions.json # Recommended extensions
│ └── settings.json # Editor configuration
│
├── 📄 .env.example # Environment variables template
├── 📄 .env.local # Your local environment (create this)
├── 📄 .eslintrc.js # ESLint configuration
├── 📄 .gitignore # Git ignore rules
├── 📄 .prettierrc.js # Code formatting rules
├── 📄 next.config.js # Next.js configuration
├── 📄 package.json # Project dependencies
├── 📄 postcss.config.js # PostCSS configuration
├── 📄 tailwind.config.js # Tailwind CSS configuration
├── 📄 tsconfig.json # TypeScript configuration
│
└── 📚 Documentation/
├── README.md # Main documentation
├── QUICK_START.md # 10-minute setup guide
├── CONTENT_MANAGEMENT_GUIDE.md # CMS user guide
└── DEPLOYMENT.md # Deployment instructions
\`\`\`

## 📖 File Descriptions

### Core Configuration Files

| File                 | Purpose                                          |
| -------------------- | ------------------------------------------------ |
| `package.json`       | Project dependencies and scripts                 |
| `next.config.js`     | Next.js framework configuration                  |
| `tailwind.config.js` | Design system & theme colors                     |
| `tsconfig.json`      | TypeScript compiler settings                     |
| `.env.local`         | Environment variables (create from .env.example) |

### App Directory (Pages)

| Directory        | Route        | Purpose                                |
| ---------------- | ------------ | -------------------------------------- |
| `app/`           | `/`          | Homepage with hero, features, services |
| `app/about/`     | `/about`     | Company information                    |
| `app/services/`  | `/services`  | Service catalog from CMS               |
| `app/products/`  | `/products`  | Product showcase from CMS              |
| `app/resources/` | `/resources` | Searchable resource library            |
| `app/contact/`   | `/contact`   | Contact form & info                    |
| `app/studio/`    | `/studio`    | Content management system              |

### Components

All components are reusable and follow modern React patterns:

- **Header.tsx**: Responsive navigation with mobile menu
- **Footer.tsx**: Site footer with links and contact info
- **Hero.tsx**: Homepage hero with animations
- **Features.tsx**: Feature grid with icons
- **Services.tsx**: Service cards
- **CTA.tsx**: Call-to-action sections

### Sanity CMS Structure

| Schema        | Purpose             | Fields                           |
| ------------- | ------------------- | -------------------------------- |
| `page.ts`     | Static pages        | Title, content, slug             |
| `resource.ts` | Resources & manuals | Title, file, category, tags      |
| `service.ts`  | Services            | Title, description, features     |
| `product.ts`  | Products            | Title, pricing, images, features |

## 🎨 Styling Architecture

### Tailwind CSS Classes

Utility classes are defined in `app/globals.css`:

- `.container-custom` - Responsive container
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style

### Color Scheme

Defined in `tailwind.config.js`:

- **Primary**: Blue shades (brand color)
- **Secondary**: Purple shades (accent)
- **Gray**: Text and backgrounds

## 🔧 Key Technologies

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **Lucide React** - Icon library

### Backend/CMS

- **Sanity CMS** - Headless content management
- **Next Sanity** - Sanity integration for Next.js

## 🚀 Scripts

Run these commands from the project root:

| Command         | Purpose                  |
| --------------- | ------------------------ |
| `npm install`   | Install dependencies     |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm start`     | Run production build     |
| `npm run lint`  | Run code linter          |

## 📝 Content Management Flow

1. **Content Creator** → Logs into `/studio`
2. **Creates/Edits** → Resources, Services, Products
3. **Publishes** → Content goes live
4. **Website** → Automatically fetches and displays content

## 🔐 Environment Variables

Required in `.env.local`:

\`\`\`
NEXT_PUBLIC_SANITY_PROJECT_ID= # Your Sanity project ID
NEXT_PUBLIC_SANITY_DATASET= # Usually "production"
SANITY_API_TOKEN= # For write operations (optional)
\`\`\`

## 📱 Responsive Breakpoints

Following Tailwind's default breakpoints:

- **sm**: 640px (mobile landscape)
- **md**: 768px (tablet)
- **lg**: 1024px (desktop)
- **xl**: 1280px (large desktop)

## 🎯 Development Workflow

1. **Edit Code** → Make changes in `app/` or `components/`
2. **Hot Reload** → Changes appear instantly
3. **Add Content** → Use `/studio` for CMS content
4. **Test** → Check responsive design
5. **Commit** → Git commit changes
6. **Deploy** → Push to production

## 🔍 Important Paths

- **CMS Studio**: `http://localhost:3000/studio`
- **Homepage**: `http://localhost:3000`
- **Resources**: `http://localhost:3000/resources`
- **API Routes**: Can be added in `app/api/`

## 💡 Customization Points

### Easy to Change

- Colors: `tailwind.config.js`
- Logo: `public/logo.png`
- Contact Info: `components/Footer.tsx`
- Content: Via Sanity Studio

### Moderate

- Layout: `app/layout.tsx`
- Components: `components/` directory
- Styles: `app/globals.css`

### Advanced

- Data Fetching: `lib/sanity.ts`
- CMS Schemas: `sanity/schemas/`
- Build Config: `next.config.js`

## 📊 File Sizes (Approximate)

- Total Project: ~50MB (with node_modules)
- Production Build: ~3-5MB
- Average Page Load: ~200KB

## 🔄 Update Strategy

1. Pull latest changes
2. Run `npm install` if dependencies changed
3. Restart dev server
4. Clear browser cache if needed

---

**Questions?** Check [README.md](README.md) or [QUICK_START.md](QUICK_START.md)
