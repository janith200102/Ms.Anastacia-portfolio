# Ms. Anastacia Portfolio Website

## Overview

A professional portfolio website for a voice-over artist and event host. The application is a full-stack TypeScript project featuring a React frontend with a dark luxury theme and an Express backend with PostgreSQL database integration. The site includes six pages: Home, About, Services, Portfolio, Why Choose Me, and Contact, with smooth page transitions and modern animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side navigation
- **Styling**: Tailwind CSS with custom dark luxury theme using CSS variables
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for page transitions and micro-interactions
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with tsx for development
- **API Design**: RESTful endpoints defined in `shared/routes.ts` with Zod schemas for type-safe validation
- **Build Process**: esbuild for server bundling, Vite for client bundling

### Data Storage
- **Database**: PostgreSQL via `DATABASE_URL` environment variable
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` contains table definitions
- **Migrations**: Managed via `drizzle-kit push` command

### Project Structure
```
├── client/           # React frontend
│   └── src/
│       ├── components/   # UI components including shadcn/ui
│       ├── pages/        # Route pages
│       ├── hooks/        # Custom React hooks
│       └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route definitions with Zod schemas
└── migrations/       # Database migrations output
```

### Key Design Patterns
- **Shared Types**: Schema and route definitions in `/shared` ensure type safety across frontend and backend
- **Storage Abstraction**: `IStorage` interface in `storage.ts` allows swapping database implementations
- **API Contract**: Routes defined with method, path, input schema, and response schemas for full type coverage

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Database toolkit for queries and schema management

### UI Libraries
- **Radix UI**: Headless component primitives (dialog, dropdown, toast, etc.)
- **shadcn/ui**: Pre-styled component collection
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component
- **Vaul**: Drawer component
- **cmdk**: Command menu component

### Build Tools
- **Vite**: Frontend bundler with HMR
- **esbuild**: Server bundler for production
- **PostCSS/Autoprefixer**: CSS processing

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development banner