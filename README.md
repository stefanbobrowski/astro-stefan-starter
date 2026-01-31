# 🚀 Astro Starter Kit

A production-ready Astro starter template with TypeScript, SCSS design tokens, common UI components, and SEO best practices. Perfect for landing pages, marketing sites, blogs, and any SEO-focused web project.

## ✨ Features

- ⚡ **Astro 5** - Lightning-fast performance with zero JS by default
- 🎨 **SCSS Design Tokens** - Comprehensive token system for consistent design
- 🧩 **UI Components** - Pre-built Header, Footer, Button, Card, Badge, and more
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, robots.txt, sitemap
- 📱 **Responsive** - Mobile-first design with responsive utilities
- 🎯 **TypeScript** - Fully typed with path aliases configured
- 🎭 **Dark Theme** - Beautiful dark theme out of the box
- 🛠️ **Developer Experience** - Clean code structure, reusable components

## 🏗️ Project Structure

```
/
├── public/
│   └── robots.txt          # SEO: Search engine crawler instructions
├── src/
│   ├── components/         # Reusable Astro components
│   │   ├── Badge.astro
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Divider.astro
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── data/               # Data files and constants
│   │   └── navigation.ts
│   ├── layouts/            # Layout templates
│   │   ├── BaseLayout.astro
│   │   └── SEOLayout.astro
│   ├── lib/                # Utilities and helpers
│   │   ├── types.ts
│   │   └── utils.ts
│   ├── pages/              # File-based routing
│   │   ├── index.astro
│   │   └── components.astro
│   └── styles/             # SCSS architecture
│       ├── main.scss       # Main entry point
│       ├── _tokens/        # Design tokens
│       │   ├── _colors.scss
│       │   ├── _spacing.scss
│       │   ├── _typography.scss
│       │   ├── _radius.scss
│       │   └── _zindex.scss
│       ├── _base/          # Base styles
│       │   ├── _reset.scss
│       │   ├── _globals.scss
│       │   └── _typography.scss
│       ├── _layout/        # Layout utilities
│       │   ├── _container.scss
│       │   ├── _stack.scss
│       │   └── _grid.scss
│       ├── _components/    # Component styles
│       │   ├── _button.scss
│       │   ├── _card.scss
│       │   ├── _badge.scss
│       │   ├── _divider.scss
│       │   ├── _header.scss
│       │   └── _footer.scss
│       └── _utilities/     # Utility classes
│           ├── _spacing.scss
│           ├── _text.scss
│           └── _visibility.scss
├── astro.config.mjs        # Astro configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone or download this starter:
```bash
# Or simply copy this folder to start a new project
cd astro-stefan-starter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 📝 Scripts

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Install dependencies                              |
| `npm run dev`          | Start dev server at `localhost:4321`             |
| `npm run build`        | Build production site to `./dist/`               |
| `npm run preview`      | Preview built site before deploying              |

## 🎨 Design System

### Design Tokens

All design tokens are defined in `src/styles/_tokens/`:

#### Colors
```scss
--bg, --bg-muted, --bg-elevated
--text, --text-muted, --text-subtle
--border, --border-hover
--accent, --accent-hover
--success, --warning, --error, --info
```

#### Spacing
```scss
--space-0 through --space-12
```

#### Typography
```scss
--text-xs through --text-5xl
--font-normal, --font-medium, --font-semibold, --font-bold
--leading-none, --leading-tight, --leading-normal, --leading-relaxed
```

#### Border Radius
```scss
--radius-none through --radius-full
```

### Components

All components are fully typed and accept props for customization:

#### Button
```astro
<Button variant="primary">Click me</Button>
<Button variant="ghost">Ghost Button</Button>
```

#### Card
```astro
<Card variant="elevated" padding="lg">
  <h3>Card Title</h3>
  <p>Card content...</p>
</Card>
```

#### Badge
```astro
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
```

See `/components` page for a full showcase.

## 🔍 SEO Features

### Built-in SEO
- Meta tags (title, description)
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- robots.txt
- Sitemap support (configure in astro.config.mjs)

### Usage

Use `BaseLayout` for automatic SEO:

```astro
---
import BaseLayout from '@layouts/BaseLayout.astro';
---

<BaseLayout
  title="Page Title"
  description="Page description for SEO"
  image="/og-image.jpg"
>
  <!-- Your content -->
</BaseLayout>
```

For more control, use `SEOLayout` which includes additional article metadata.

## ⚙️ Configuration

### Update Site Information

1. **astro.config.mjs** - Update the `site` URL:
```js
export default defineConfig({
  site: 'https://yoursite.com',
});
```

2. **src/lib/utils.ts** - Update the `siteConfig`:
```ts
export const siteConfig: SiteConfig = {
  siteName: 'Your Site Name',
  siteUrl: 'https://yoursite.com',
  description: 'Your site description',
  author: 'Your Name',
  // ... social links
};
```

3. **public/robots.txt** - Update sitemap URL

### Customize Design Tokens

Edit files in `src/styles/_tokens/` to match your brand:
- `_colors.scss` - Brand colors
- `_spacing.scss` - Spacing scale
- `_typography.scss` - Font sizes, weights
- `_radius.scss` - Border radius values

## 📦 Path Aliases

TypeScript path aliases are configured for cleaner imports:

```ts
import Button from '@components/Button.astro';
import { siteConfig } from '@lib/utils';
import type { SEOMetadata } from '@lib/types';
import { navLinks } from '@data/navigation';
```

## 🌐 Deployment

This starter works with all Astro deployment options:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [GitHub Pages](https://pages.github.com/)
- Any static hosting

Build command: `npm run build`
Output directory: `dist`

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [SCSS Documentation](https://sass-lang.com/documentation/)

## 📄 License

This starter is free to use for any project, personal or commercial.

---

**Ready to build something amazing? Start customizing!** 🎉
