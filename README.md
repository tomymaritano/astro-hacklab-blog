# HackLab Blog 🚀

A modern, high-performance blog built with Astro 5, React, and TypeScript. Features interactive components, comprehensive testing, and production-ready optimization.

## ✨ Features

### 🎨 **Modern Tech Stack**

- **Astro 5** - Static site generation with islands architecture
- **React 19** - Interactive components with latest features
- **TypeScript** - Strict type safety and enhanced DX
- **Tailwind CSS** - Utility-first styling with dark mode
- **MDX** - Markdown with embedded React components

### 🔧 **Developer Experience**

- **Vitest** - Fast unit testing with React Testing Library
- **ESLint + Prettier** - Code quality and formatting
- **Husky + lint-staged** - Pre-commit hooks for quality gates
- **Path aliases** - Clean imports with `@/` prefix
- **Hot module replacement** - Instant development feedback

### ⚡ **Performance & SEO**

- **Image optimization** - Automatic WebP/AVIF conversion with Sharp
- **Web Vitals monitoring** - Real-time performance tracking
- **SEO components** - Structured data and meta tags
- **Error boundaries** - Graceful error handling
- **Loading states** - Skeleton screens and spinners

### 🎯 **Interactive Components**

- **Theme toggle** - Animated dark/light mode switch
- **Search spotlight** - Cmd+K keyboard navigation
- **Chart visualization** - Business data with Nivo
- **Collapsible sections** - Framer Motion animations
- **Mobile responsive** - Touch-friendly navigation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd astro-hacklab-blog

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your blog in action!

## 📁 Project Structure

```
/
├── public/                    # Static assets
│   ├── images/               # Blog images and media
│   └── favicon.svg           # Site favicon
├── src/
│   ├── components/           # React and Astro components
│   │   ├── __tests__/       # Component tests
│   │   ├── ErrorBoundary.tsx # Error handling
│   │   ├── LoadingSpinner.tsx # Loading states
│   │   ├── SEOHead.astro    # SEO metadata
│   │   └── ...              # Other components
│   ├── content/             # Content collections
│   │   ├── config.ts        # Content schema
│   │   └── posts/           # Blog posts (MDX)
│   ├── hooks/               # Custom React hooks
│   │   └── useTheme.ts      # Theme management
│   ├── layouts/             # Page layouts
│   ├── pages/               # Route pages
│   ├── styles/              # Global CSS
│   ├── test/                # Test configuration
│   └── types/               # TypeScript definitions
├── vitest.config.ts         # Test configuration
├── eslint.config.js         # Linting rules
├── tailwind.config.cjs      # Styling configuration
└── tsconfig.json            # TypeScript configuration
```

## 🧞 Commands

| Command                 | Action                                       |
| ----------------------- | -------------------------------------------- |
| `npm run dev`           | Start development server at `localhost:4321` |
| `npm run build`         | Build production site to `./dist/`           |
| `npm run preview`       | Preview build locally                        |
| `npm run test`          | Run unit tests with Vitest                   |
| `npm run test:watch`    | Run tests in watch mode                      |
| `npm run test:coverage` | Generate test coverage report                |
| `npm run lint`          | Check code with ESLint                       |
| `npm run lint:fix`      | Fix linting issues automatically             |
| `npm run format`        | Format code with Prettier                    |
| `npm run type-check`    | Run TypeScript type checking                 |

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
npm run test

# Watch mode for development
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run specific test file
npm run test SearchSpotlight.test.tsx
```

### Testing Philosophy

- **Unit tests** for components and utilities
- **Integration tests** for user interactions
- **Error boundary tests** for error scenarios
- **Accessibility tests** for inclusive design

## 🎨 Styling & Theming

### Dark Mode

Automatic dark mode detection with manual toggle:

```tsx
import { useTheme } from '@/hooks/useTheme';

function MyComponent() {
  const { theme, toggleTheme, isDark } = useTheme();
  // ...
}
```

### Design System

- **Colors**: Consistent palette with CSS custom properties
- **Typography**: Responsive text scales
- **Spacing**: Tailwind spacing system
- **Components**: Reusable UI primitives

## 📈 Performance

### Web Vitals Monitoring

```tsx
import PerformanceMonitor from '@/components/PerformanceMonitor';

// Add to your layout
<PerformanceMonitor debug={isDevelopment} />;
```

### Image Optimization

```astro
---
import OptimizedImage from '@/components/OptimizedImage.astro';
---

<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero image"
  width={800}
  height={400}
  loading="lazy"
  format="webp"
/>
```

## 🔍 SEO

### Metadata

```astro
---
import SEOHead from '@/components/SEOHead.astro';
---

<SEOHead
  title="Page Title"
  description="Page description"
  openGraph={{
    title: 'OG Title',
    description: 'OG Description',
    image: '/images/og-image.jpg',
  }}
  twitter={{
    card: 'summary_large_image',
    title: 'Twitter Title',
    description: 'Twitter Description',
  }}
/>
```

### Structured Data

Automatic JSON-LD generation for better search engine understanding.

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Build for production
npm run build

# Deploy with Vercel CLI
vercel --prod
```

### Other Platforms

The build output in `./dist/` can be deployed to any static hosting service:

- Netlify
- GitHub Pages
- AWS S3
- Cloudflare Pages

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Run tests (`npm run test`)
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Code Quality

- All commits trigger lint and test checks
- Pre-commit hooks ensure code quality
- TypeScript strict mode enforced
- 100% test coverage goal for utilities

## 📋 Roadmap

- [ ] **Content Management**: Headless CMS integration
- [ ] **Analytics**: Advanced user behavior tracking
- [ ] **Comments**: Interactive discussion system
- [ ] **Newsletter**: Email subscription system
- [ ] **Search**: Full-text search with Algolia
- [ ] **PWA**: Progressive Web App features
- [ ] **i18n**: Multi-language support

## 🐛 Known Issues

- ESLint Astro parsing: Astro files temporarily excluded from linting
- Image optimization: Requires Sharp for production builds

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build) - Amazing static site generator
- [Vercel](https://vercel.com) - Seamless deployment platform
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Framer Motion](https://framer.com/motion) - Beautiful animations

---

Built with ❤️ by the HackLab team
