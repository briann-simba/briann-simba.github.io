# Portfolio Web Application

## Overview

This is a modern full-stack portfolio web application built to showcase a developer's skills, experience, and projects. The application features a responsive React frontend with a sleek, professional design and an Express.js backend with database integration capabilities. The portfolio includes sections for personal information, skills, work experience, education, projects, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design system including defined color variables and responsive design
- **Animations**: Framer Motion for smooth animations and transitions throughout the portfolio
- **State Management**: TanStack React Query for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the full stack
- **Development**: Hot module replacement and development middleware integration with Vite
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development, designed to easily switch to database backends
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

### Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL database operations
- **Database**: PostgreSQL with Neon Database serverless integration
- **Schema**: Type-safe database schema definitions with Zod validation
- **Migrations**: Drizzle Kit for database migrations and schema management
- **Session Storage**: PostgreSQL session store for user session management

### Design System
- **Component Library**: Comprehensive UI component system with consistent styling
- **Typography**: Inter font family for modern, clean text rendering
- **Color Scheme**: Custom color palette with CSS variables for theming support
- **Responsive Design**: Mobile-first approach with breakpoint-based responsive layouts
- **Dark Mode**: CSS variable-based theming system ready for dark mode implementation

### Development Experience
- **Type Safety**: End-to-end TypeScript implementation across client, server, and shared modules
- **Code Organization**: Monorepo structure with shared types and utilities between frontend and backend
- **Hot Reloading**: Vite development server with HMR for rapid development iteration
- **Error Overlay**: Development error modal for better debugging experience
- **Path Aliases**: Configured import aliases for clean, maintainable code organization

## External Dependencies

### Core Libraries
- **React Ecosystem**: React, React DOM, React Hook Form with resolvers for form management
- **UI Framework**: Radix UI primitives for accessible component foundations
- **Animation**: Framer Motion for declarative animations and micro-interactions
- **Routing**: Wouter for minimal client-side routing
- **State Management**: TanStack React Query for server state and caching

### Database & Backend
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for runtime type validation and schema generation

### Development Tools
- **Build System**: Vite with React plugin and TypeScript support
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Code Quality**: TypeScript compiler for type checking
- **Development**: tsx for TypeScript execution in development

### Utility Libraries
- **Styling Utilities**: clsx and tailwind-merge for conditional styling
- **Date Handling**: date-fns for date manipulation and formatting
- **Component Variants**: class-variance-authority for component variant management
- **UUID Generation**: crypto module for unique identifier generation