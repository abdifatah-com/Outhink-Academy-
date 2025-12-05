# Outhink ACD

> A modern, full-featured web application built with React, TypeScript, and cutting-edge UI libraries.

## 🚀 Project Overview

This is a production-ready React application scaffolded with Vite and enhanced with a comprehensive UI component library. Built with modern development practices and optimized for performance.

**Live Project**: [Lovable Project Dashboard](https://lovable.dev/projects/eb257579-e5a4-466c-b278-eb6f216bf918)

## ✨ Features

- ⚡ **Lightning Fast** - Powered by Vite for instant HMR and optimized builds
- 🎨 **Beautiful UI** - Premium components from shadcn-ui and Radix UI
- 🎯 **Type Safe** - Full TypeScript support for robust code
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🌙 **Theme Support** - Built-in dark mode with next-themes
- 🔄 **Data Management** - TanStack Query for efficient server state
- 📊 **Data Visualization** - Interactive charts with Recharts
- 🔐 **Backend Ready** - Supabase integration for authentication and database

## 🛠️ Tech Stack

### Core
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
- **[Vite 5](https://vitejs.dev/)** - Build tool & dev server

### UI & Styling
- **[Tailwind CSS 3](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn-ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### State & Data
- **[TanStack Query](https://tanstack.com/query)** - Server state management
- **[React Hook Form](https://react-hook-form.com/)** - Form handling
- **[Zod](https://zod.dev/)** - Schema validation

### Backend
- **[Supabase](https://supabase.com/)** - Backend as a Service (BaaS)

### Additional Libraries
- **[React Router DOM](https://reactrouter.com/)** - Client-side routing
- **[date-fns](https://date-fns.org/)** - Date utility library
- **[Recharts](https://recharts.org/)** - Charting library
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications

## 📦 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdifatah-com/Outhink-Academy-.git
   cd Outhink-Academy-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your-supabase-url-here
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key-here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:5173`

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🏗️ Project Structure

```
outhink-acd/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and configs
│   ├── pages/          # Application pages/routes
│   ├── app.tsx         # Main App component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── .env                # Environment variables
├── components.json     # shadcn-ui configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🔧 Development Workflow

### Using Lovable (Recommended)

1. Visit the [Lovable Project Dashboard](https://lovable.dev/projects/eb257579-e5a4-466c-b278-eb6f216bf918)
2. Use natural language prompts to make changes
3. Changes are automatically committed to your repository

### Using Your IDE

1. Make changes locally in your preferred editor
2. Test using `npm run dev`
3. Commit and push changes
4. Changes will sync with Lovable automatically

### Using GitHub Codespaces

1. Navigate to your repository on GitHub
2. Click the "Code" button → "Codespaces" tab
3. Create a new Codespace
4. Edit and commit directly in the cloud IDE

### Direct GitHub Edits

1. Navigate to any file in your repository
2. Click the pencil icon (Edit)
3. Make changes and commit directly

## 🚀 Deployment

### Quick Deploy with Lovable

1. Open your [Lovable Project](https://lovable.dev/projects/eb257579-e5a4-466c-b278-eb6f216bf918)
2. Click **Share** → **Publish**
3. Your app will be deployed instantly

### Custom Domain

1. Navigate to **Project** → **Settings** → **Domains**
2. Click **Connect Domain**
3. Follow the setup instructions

For detailed instructions, see: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

### Manual Deployment

You can also deploy to platforms like:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop the `dist` folder
- **GitHub Pages**: Push the `dist` folder to `gh-pages` branch

## 🔐 Supabase Integration

This project comes pre-configured with Supabase for backend functionality.

### Setup Steps

1. **Create a Supabase project**
   - Visit [Supabase](https://supabase.com/)
   - Create a new project

2. **Get your credentials**
   - Navigate to Project Settings → API
   - Copy the Project URL and anon/public key

3. **Configure environment variables**
   ```env
   VITE_SUPABASE_URL=your-project-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Use the client**
   
   The Supabase client is initialized in `src/lib/supabaseClient.ts`:
   ```typescript
   import { supabase } from '@/lib/supabaseClient'
   
   // Example: Fetch data
   const { data, error } = await supabase
     .from('your_table')
     .select('*')
   ```

For more information, visit the [Supabase Documentation](https://supabase.com/docs)

## 📚 Component Library

This project uses **shadcn-ui**, a collection of re-usable components built with Radix UI and Tailwind CSS.

### Adding New Components

```bash
npx shadcn-ui@latest add [component-name]
```

Example:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dialog
```

Browse available components at [ui.shadcn.com](https://ui.shadcn.com/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn-ui Documentation](https://ui.shadcn.com/)
- [Lovable Documentation](https://docs.lovable.dev/)
- [Supabase Documentation](https://supabase.com/docs)

---

Built with ❤️ By Abdifatah Faisal
