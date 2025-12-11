# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Commands

```bash
npm run dev      # Start development server on http://localhost:3000
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint checks
npm install      # Install dependencies
```

## Project Overview

**Gabaritei Pedagogia** is a performance-optimized, institutional marketing website for an online teaching certification course platform. Built with Next.js 15 and React 18, the site uses a component-based architecture with TypeScript and Tailwind CSS.

This is a **static marketing site** with no backend or database. External integrations include Hotmart (course payment), WhatsApp (contact), and social media links.

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 18 with TypeScript 5
- **Styling**: Tailwind CSS 3.4.1 with custom design tokens
- **Components**: Carousel (Swiper 12), Icons (Lucide React), Form Masking (react-imask)
- **Language**: Portuguese (Brazilian) - pt-BR metadata

## Architecture

### Directory Structure

```
app/                    # Next.js App Router
├── globals.css         # Global styles, CSS variables for theming
├── layout.tsx          # Root layout (Header, BackgroundDecorations, Footer)
└── page.tsx            # Home page (composes all sections)

components/             # React components (mostly Client Components with 'use client')
├── Header.tsx          # Responsive navigation with mobile menu
├── HeroSection.tsx     # Hero with CTA buttons
├── DiferenciaisSection.tsx    # Benefits (currently empty placeholder)
├── CursosSection.tsx   # Courses carousel with modal popup
├── CarlaSection.tsx    # Instructor showcase
├── DepoimentosSection.tsx     # Testimonials carousel (20 images)
├── ContatoSection.tsx  # Contact/WhatsApp inquiry form
├── Footer.tsx          # Footer with social links
├── SectionHeader.tsx   # Reusable section title component
├── BackgroundDecorations.tsx  # Decorative animated background
└── Dynamic*.tsx        # Lazy-loaded wrappers for performance

public/
├── fotos/              # Static images (logo, instructor, course thumbnails)
└── Depoimentos tratados reduzidos/  # Testimonial images
```

### Data Flow

1. **Root Layout** (`app/layout.tsx`): Wraps all pages with Header, Footer, and global styles
2. **Home Page** (`app/page.tsx`): Orchestrates section components with CSS variable overrides for visual variety
3. **Section Components**: Self-contained, mostly client-side interactive
   - **CursosSection**: Hard-coded course array, Swiper carousel, modal dialog for links
   - **DepoimentosSection**: Hard-coded 20 testimonial images, Swiper carousel, lightbox modal
   - **Header**: Toggle state for mobile menu
4. **Dynamic Imports**: `DynamicCursosSection` and `DynamicDepoimentosSection` use Next.js `dynamic()` for code splitting

### Component Pattern

- **Client Components** (`'use client'`): Header, CursosSection, DepoimentosSection, ContatoSection
- **Server Components** (default): Layout, SectionHeader, Footer
- **State Management**: Local React hooks only (`useState`, `useRef`) - no global state library
- **Image Optimization**: All images use Next.js `Image` component; external `img.youtube.com` whitelisted in `next.config.js`

## Styling & Design

### Color System

Colors are defined in `tailwind.config.ts` with CSS variable overrides in `app/globals.css`:

- **Primary Orange**: `#FF914D` (light), `#e8772d` (dark)
- **Secondary Green/Blue**: `#007854` (light), `#005a3f` (dark)
- **CSS Variables**: `--primary`, `--secondary`, `--accent`, `--b1`, `--b2`, `--b3`

Sections override CSS variables for visual variety (e.g., alternating primary colors).

### Animations

Custom Tailwind animations in `tailwind.config.ts`:
- `fade-in-down`, `fade-in-left`, `fade-in-right`, `fade-in-up` (0.5s transitions)
- `glow-green` (3s infinite in `globals.css`)

### Typography

- **Font**: Montserrat (weights: 400, 700, 900) from Google Fonts
- **Responsive**: Mobile-first approach with Tailwind breakpoints (`md: 768px`, `lg: 1024px`)

## Key Dependencies & Purpose

| Package | Purpose |
|---------|---------|
| `swiper` | Carousel/slider for courses and testimonials |
| `lucide-react`, `@heroicons/react` | Icon libraries |
| `react-imask` | Phone number masking in contact form |
| `tailwindcss` | CSS utility framework |
| `typescript` | Type safety |
| `eslint-config-next` | Linting (no custom `.eslintrc`) |

## Content Editing

### Adding/Modifying Courses

Courses are hard-coded in `CursosSection.tsx`. Edit the `cursos` array to add/remove courses. Each course has:
- `id`, `title`, `description`, `image` path
- `links` array with platform URLs (Hotmart, etc.)

### Adding/Modifying Testimonials

Testimonial images are in `public/Depoimentos tratados reduzidos/`. Update the `depoimentos` array in `DepoimentosSection.tsx` with image filenames.

### Contact Form

The contact form in `ContatoSection.tsx` uses phone masking (react-imask) and links to WhatsApp via query parameters.

## Known Limitations & Future Improvements

- **No Tests**: Zero test coverage (no Jest, Vitest, or E2E tests)
- **No Backend**: Static site only (consider adding form handling if needed)
- **No CMS**: Content is hard-coded in components
- **No Analytics**: No tracking code integrated
- **DiferenciaisSection**: Currently empty placeholder
- **No Environment Variables**: Hard-coded values (WhatsApp number, etc.) - consider `.env.local` for production

## Deployment

The site is optimized for **Vercel** (standard Next.js deployment). Deploy with:

```bash
npm run build
npm start
# Or push to GitHub and connect to Vercel
```

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1919px
- **Desktop**: 1920px+

All sections are mobile-first responsive using Tailwind breakpoints.
