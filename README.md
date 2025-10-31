# Docs - Collaborative Document Editor

A modern, real-time collaborative document editor built with Next.js, featuring rich text editing, live collaboration, and comprehensive document management capabilities.

## 🎯 Description

This is a full-featured collaborative document editor that enables multiple users to work together in real-time. The application provides a rich text editing experience similar to Google Docs, with features like live cursors, comments, mentions, and document templates. Built with modern web technologies, it offers a seamless collaborative editing experience with proper authentication and real-time synchronization.

## ✨ Features

- **Real-time Collaborative Editing**: Multiple users can edit documents simultaneously with live cursors
- **Rich Text Editor**: Powered by TipTap with extensive formatting options:
  - Headings, paragraphs, lists (bulleted, numbered, task lists)
  - Text formatting (bold, italic, underline, strikethrough)
  - Text alignment (left, center, right, justify)
  - Font family, font size, line height
  - Text colors and highlight colors
  - Links and images
  - Tables with resizable columns
- **Comments & Threads**: Comment on specific parts of documents with threaded discussions
- **User Mentions**: Mention other users in comments
- **Document Templates**: Pre-built templates for resumes, cover letters, business letters, etc.
- **Document Management**: Create, rename, delete, and search documents
- **Live User Presence**: See who's currently viewing/editing documents
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Mode**: Full theme support with system preference detection
- **Customizable Margins**: Adjustable left and right margins with visual ruler

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **TipTap** - Rich text editor framework
- **shadcn/ui** - Component library (built on Radix UI)
- **Zustand** - State management

### Backend & Services

- **Convex** - Backend-as-a-Service for database and serverless functions
- **Clerk** - Authentication and user management
- **Liveblocks** - Real-time collaboration infrastructure

### Key Libraries

- `@liveblocks/react-tiptap` - TipTap integration for Liveblocks
- `@liveblocks/react-ui` - Pre-built UI components for comments
- `next-themes` - Theme management
- `sonner` - Toast notifications

## 📁 Project Structure

```
docs/
├── convex/                    # Convex backend functions
│   ├── schema.ts             # Database schema
│   ├── documents.ts          # Document CRUD operations
│   └── auth.config.ts        # Authentication configuration
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── (home)/          # Home page route group
│   │   │   ├── page.tsx     # Documents list page
│   │   │   ├── navbar.tsx   # Navigation bar
│   │   │   └── documents-table.tsx  # Documents table component
│   │   └── documents/
│   │       └── [documentId]/ # Dynamic document route
│   │           ├── page.tsx # Document editor page
│   │           ├── editor.tsx # TipTap editor component
│   │           ├── toolbar.tsx # Formatting toolbar
│   │           ├── ruler.tsx # Margin ruler component
│   │           ├── threads.tsx # Comments component
│   │           └── room.tsx # Liveblocks room provider
│   ├── components/           # Reusable React components
│   │   ├── ui/              # shadcn/ui components (built on Radix UI)
│   │   └── theme-provider.tsx
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   └── store/               # Zustand stores
│       └── use-editor-store.ts
├── public/                  # Static assets
└── package.json            # Dependencies
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18+ (or Bun)
- **npm**, **yarn**, **pnpm**, or **bun** package manager
- **Convex account** - Sign up at [convex.dev](https://www.convex.dev)
- **Clerk account** - Sign up at [clerk.com](https://www.clerk.com)
- **Liveblocks account** - Sign up at [liveblocks.io](https://www.liveblocks.io)

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Convex Configuration
CONVEX_DEPLOYMENT=your-convex-deployment-name
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Liveblocks Real-time Collaboration
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=pk_...
LIVEBLOCKS_SECRET_KEY=sk_...
```

### Getting Your API Keys

1. **Convex**:
   - Create a new project at [dashboard.convex.dev](https://dashboard.convex.dev)
   - Copy your deployment URL and name from the dashboard

2. **Clerk**:
   - Create an application at [dashboard.clerk.com](https://dashboard.clerk.com)
   - Copy your publishable key and secret key from the API Keys section

3. **Liveblocks**:
   - Create a project at [liveblocks.io/dashboard](https://liveblocks.io/dashboard)
   - Copy your public key and secret key from the API Keys section

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:vasile-draguta/docs-clone.git
cd docs
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set up environment variables

Copy `.env.example` to `.env.local` (if available) or create `.env.local` and add all required environment variables as described above.

### 4. Set up Convex

```bash
npx convex dev
```

This will:

- Initialize Convex in your project
- Push your schema to Convex
- Set up the development environment

### 5. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📚 What I Learned

Building this project provided hands-on experience with:

- **Real-time Collaboration**: Implementing live cursors, presence, and synchronized editing using Liveblocks
- **Rich Text Editing**: Working with TipTap editor framework and ProseMirror
- **State Management**: Using Zustand for client-side state and Convex for server state
- **Authentication**: Integrating Clerk for user authentication and authorization
- **Modern React Patterns**: Server Components, Client Components, and React Server Actions
- **TypeScript**: Type-safe development with proper type definitions
- **CSS Architecture**: Tailwind CSS with custom theme variables and dark mode support
- **Component Design**: Building reusable UI components with shadcn/ui (built on Radix UI primitives)
- **Real-time Features**: Handling WebSocket connections, presence updates, and conflict resolution
- **Database Design**: Schema design with Convex and query optimization

## 🎨 Key Features Implementation

### Real-time Collaboration

- Uses Liveblocks for WebSocket connections and presence management
- TipTap extension integrates with Liveblocks for synchronized editing
- Each user's cursor and selection are tracked independently

### Document Editor

- Customizable margins with draggable ruler
- Comprehensive formatting toolbar
- Comment threads anchored to specific text selections
- Image upload and resizing capabilities

### Document Management

- Server-side document CRUD operations with Convex
- Real-time search and filtering
- Template-based document creation

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Database Schema

The Convex schema includes:

- `documents` - Document metadata (name, content, organization, etc.)
- Storage for document margins and collaboration data

---

Built with ❤️ using Next.js, Convex, Clerk, and Liveblocks
