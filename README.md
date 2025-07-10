# LCN Elegance Portal

A modern, responsive web portal for LCN Beauty Center by Lambert - a premium beauty salon located in Düsseldorf, Germany. This project showcases a professional business website with elegant design, comprehensive service listings, and integrated booking functionality.

## 🖼️ Screenshots

_Desktop View_
![Desktop Screenshot](./screenshots/desktop_view.png)

## 🌐 Live Demo

🚀 **[View Live Demo](https://lcn-elegance-portal.vercel.app/)**

> **Note**: This is a real business website. All content, services, and contact information are authentic.

## 🌟 Features

- **Modern Design**: Elegant UI with custom beauty-focused color palette and typography
- **Responsive Layout**: Fully responsive design optimized for all devices
- **Multi-page Navigation**: Smooth scrolling navigation with dedicated services page
- **Service Showcase**: Comprehensive listing of beauty services with pricing
- **Interactive Gallery**: Image gallery showcasing salon interior and work samples
- **Customer Reviews**: Integrated review system with pagination
- **Location Integration**: Google Maps integration with contact information
- **Booking System**: Direct integration with SalonKee booking platform
- **Performance Optimized**: Fast loading with lazy loading and optimized images

## 🎯 Business Context

This is a **real business website** for LCN Beauty Center by Lambert, a family-owned beauty salon established in 1996. The salon specializes in:

- Professional facial treatments and skincare
- Lash extensions and brow services
- Manicure and pedicure services
- Hair removal and waxing
- Makeup application and consultation

### 💼 Real-World Application

This project demonstrates:

- **Client Requirements Analysis**: Understanding beauty industry needs and user expectations
- **Business Integration**: SalonKee booking system, Google Maps, social media integration
- **Content Management**: 100+ services with detailed descriptions and pricing
- **User Experience Design**: Intuitive navigation for non-technical users
- **Brand Consistency**: Professional design reflecting the salon's premium positioning

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn-ui component library
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Query for API state
- **Animations**: Custom CSS animations with Intersection Observer

## 🔧 Technical Highlights

- **Custom Design System**: Built from scratch with consistent color palette, typography, and component patterns
- **Performance Optimized**:
  - Bundle size: 353KB JavaScript, 72KB CSS (gzipped: 111KB JS, 12KB CSS)
  - Lazy loading for images and components
  - Intersection Observer for smooth reveal animations
- **Responsive Architecture**: Mobile-first design with breakpoint-specific optimizations
- **Type Safety**: Full TypeScript implementation with strict mode enabled
- **Modern React Patterns**: Functional components, custom hooks, and Context API
- **SEO Optimized**: Semantic HTML, meta tags, and proper heading hierarchy
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Internationalization Ready**: German primary language with infrastructure for multi-language support

## 🏗️ Project Structure

```
src/
├── components/
│   ├── home/              # Home page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicePreviewSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── ReviewsSection.tsx
│   │   └── MapSection.tsx
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── services/          # Service-related components
│   │   └── ServiceCategory.tsx
│   └── ui/               # Reusable UI components
├── pages/                # Page components
├── hooks/                # Custom React hooks
└── lib/                  # Utility functions
```

## 🎨 Design System

The project uses a custom beauty-focused design system:

- **Colors**: Rose, cream, nude, and gold tones
- **Typography**: Cormorant Garamond (headings), Inter (body text)
- **Components**: Glassmorphism effects, elegant cards, smooth animations
- **Spacing**: Consistent utility-first approach with Tailwind CSS

## 📱 Key Components

- **HeroSection**: Full-screen landing with call-to-action
- **AboutSection**: Business story and service overview
- **ServicePreviewSection**: Featured services with pricing
- **GallerySection**: Scrollable image gallery
- **ReviewsSection**: Customer testimonials with ratings
- **MapSection**: Location and contact information

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/DennisMainhardt/lcn-elegance-portal.git
cd lcn-elegance-portal
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

This project is optimized for deployment on:

- **Vercel**: Zero-config deployment with automatic previews
- **Netlify**: Drag-and-drop deployment with form handling
- **GitHub Pages**: Static site deployment via GitHub Actions

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🌐 External Integrations

- **SalonKee**: Online booking system integration
- **Google Maps**: Location services and directions
- **Unsplash**: High-quality stock imagery
- **Social Media**: Links to Instagram and Facebook

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚀 Future Enhancements

Potential improvements to showcase scalability thinking:

- **Backend Integration**: User authentication, appointment management system
- **Content Management**: Admin dashboard for service/pricing updates
- **Analytics**: Customer behavior tracking and business insights
- **Multi-language**: Full i18n implementation for international expansion
- **Mobile App**: React Native version for enhanced mobile experience
- **Payment Integration**: Stripe/PayPal for online service payments

## 🙏 Acknowledgments

- **LCN Beauty Center by Lambert** - For the business opportunity
- **shadcn-ui** - For the excellent component library
- **Unsplash** - For high-quality stock photography
- **Tailwind CSS** - For the utility-first CSS framework

---

_This project represents a real business application built with modern web technologies and professional development practices. It demonstrates both technical expertise and business acumen._
