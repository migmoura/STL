# @contitech/components

UI component library for ContiTech Edge Delivery Services. This package builds modern web components using Preact, React 19, and Tailwind CSS v4, compiling them into Edge Delivery blocks with optimized bundles.

## Overview

This package serves as the component development environment for the ContiTech website. Components are authored in TypeScript/JSX with Tailwind utility classes, then compiled by Vite with a custom EDS plugin that generates:

- **Block shims** in [../../blocks/](../../blocks/) – Import statements for hashed bundles
- **Hashed bundles** in [../../scripts/](../../scripts/) – Compiled, minified component code
- **Shared chunks** – React/Preact and Tailwind split into separate cached bundles

## Technology Stack

- **Vite** – Build tool and development server
- **Preact** – Lightweight React alternative (10KB) with React compatibility
- **React 19** – Latest React for advanced features (via Preact compat)
- **Tailwind CSS v4** – Utility-first CSS framework with JIT compilation
- **TypeScript** – Type safety and improved developer experience
- **Playwright** – End-to-end testing framework
- **Storybook** – Component documentation and isolated development

### Key Dependencies

| Package                     | Purpose                      |
| --------------------------- | ---------------------------- |
| `@preact/preset-vite`       | Preact integration with Vite |
| `@tailwindcss/vite`         | Tailwind v4 Vite plugin      |
| `@radix-ui/*`               | Accessible UI primitives     |
| `@orama/orama`              | Client-side search engine    |
| `@vis.gl/react-google-maps` | Google Maps integration      |
| `jotai`                     | State management             |
| `nuqs`                      | URL state synchronization    |
| `react-hook-form`           | Form state management        |
| `zod`                       | Schema validation            |
| `swr`                       | Data fetching with caching   |

## Development

### Prerequisites

- Node.js 18.3.x or newer
- pnpm (installed at workspace root)

### Installation

From repository root:

```sh
pnpm install
```

### Development Workflow

#### Watch Mode

Start development server with hot module replacement:

```sh
pnpm --filter @contitech/components run dev
```

This watches for file changes and automatically:

- Rebuilds modified components
- Generates block shims
- Updates hashed bundles in [../../scripts/](../../scripts/)

#### Production Build

```sh
pnpm --filter @contitech/components run build
```

Performs:

1. TypeScript compilation (`tsc -b`)
2. Vite production build
3. Custom EDS plugin processing
4. Output to repository root [blocks/](../../blocks/) and [scripts/](../../scripts/)

#### Storybook

Preview and document components in isolation:

```sh
# Development server
pnpm --filter @contitech/components run storybook

# Build static site
pnpm --filter @contitech/components run build-storybook
```

Storybook runs on `http://localhost:6006`

### Testing

```sh
# Run all tests
pnpm --filter @contitech/components run test

# Run tests in headed mode (with browser UI)
pnpm --filter @contitech/components run test:headed

# Install Playwright browsers (first time only)
pnpm --filter @contitech/components run test:install
```

Tests use Playwright for end-to-end component testing.

## Project Structure

```
src/
├── blocks/              # Block implementations
│   ├── header/
│   ├── footer/
│   ├── form/
│   └── ...
├── components/          # Shared UI components
│   ├── ui/             # Base UI primitives
│   └── ...
├── lib/                # Utility functions
└── styles/             # Global styles (if any)

.storybook/             # Storybook configuration
```

## Creating a New Block

1. **Create block directory**:

   ```
   src/blocks/my-block/
   ├── index.tsx
   └── my-block.stories.tsx  (optional)
   ```

2. **Implement block**:

   ```typescript
   // src/blocks/my-block/index.tsx
   export default function decorate(block: HTMLElement) {
     // Initialize your block
     // Add event listeners, render components, etc.
   }
   ```

3. **Build**:

   ```sh
   pnpm --filter @contitech/components run build
   ```

4. **Output**:

   - [../../blocks/my-block/my-block.js](../../blocks/my-block) – Block shim
   - [../../scripts/my-block-AbC123.js](../../scripts/) – Hashed bundle

5. **Author content**:
   In AEM, create a section with:
   ```html
   <div class="my-block">
     <!-- Block content -->
   </div>
   ```

## Build System

### Custom EDS Plugin

Located at [eds-plugin.ts](eds-plugin.ts), this Vite plugin:

- Discovers blocks in `src/blocks/`
- Generates block shims that import hashed bundles
- Emits files to repository root [blocks/](../../blocks/) and [scripts/](../../scripts/)
- Handles CSS bundling

### Manual Chunks

Build configuration splits code into optimized chunks:

- **react** – React/Preact and related UI libraries
- **tailwind** – Tailwind CSS runtime
- **Per-block bundles** – Individual block code

This strategy maximizes cache efficiency for returning visitors.

### Externalization

Runtime scripts in [../../scripts/](../../scripts/) are marked as external to prevent bundling. Block shims import these at runtime.

## Styling

### Tailwind CSS v4

Components use Tailwind utility classes:

```tsx
export default function MyComponent() {
  return (
    <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900">Title</h2>
    </div>
  );
}
```

### Class Variance Authority (CVA)

For component variants:

```typescript
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        outline: "border border-input bg-background",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

## State Management

### Local State

Use React hooks or Preact hooks:

```typescript
import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

### Global State (Jotai)

For shared state across blocks:

```typescript
import { atom, useAtom } from "jotai";

const userAtom = atom({ name: "", loggedIn: false });

export default function UserProfile() {
  const [user, setUser] = useAtom(userAtom);

  return <div>Welcome, {user.name}</div>;
}
```

### URL State (nuqs)

For state synchronized with URL parameters:

```typescript
import { useQueryState } from "nuqs";

export default function FilteredList() {
  const [search, setSearch] = useQueryState("search");

  return (
    <input value={search || ""} onChange={(e) => setSearch(e.target.value)} />
  );
}
```

## Data Fetching (SWR)

```typescript
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
}
```

## Forms (React Hook Form + Zod)

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}

      <input type="password" {...register("password")} />
      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">Login</button>
    </form>
  );
}
```

## Best Practices

### Performance

- Use Preact for smaller bundle sizes
- Leverage code splitting (components are automatically split)
- Lazy load heavy components
- Use `React.memo()` for expensive renders
- Minimize dependencies per block

### Code Style

- Use TypeScript for type safety
- Follow existing naming conventions
- Prefer functional components over class components
- Use Tailwind utilities instead of custom CSS
- Document complex logic with comments
- Write unit tests for business logic

### Block Guidelines

- Keep blocks focused on single responsibilities
- Export only default `decorate` function
- Handle all initialization in `decorate`
- Clean up event listeners and subscriptions
- Test in isolation via Storybook

## Linting

Linting is integrated via `vite-plugin-oxlint` and runs automatically during development and builds.

Manual linting not currently configured as separate script (relies on Vite plugin).

## Troubleshooting

### Common Issues

| Issue                         | Solution                                                               |
| ----------------------------- | ---------------------------------------------------------------------- |
| TypeScript errors             | Run `pnpm --filter @contitech/components run build` to see full errors |
| Module not found              | Ensure all dependencies are installed: `pnpm install` at repo root     |
| Tailwind classes not applying | Check Tailwind configuration; rebuild: `rm -rf dist && pnpm run build` |
| Storybook not starting        | Clear cache: `rm -rf node_modules/.cache`                              |
| Tests failing                 | Ensure Playwright browsers installed: `pnpm run test:install`          |

### Debug Mode

- Check browser console for errors
- Use React DevTools for component inspection
- Enable verbose logging in [../../scripts/aem.js](../../scripts/aem.js) with `?rum=on&hlx.log=debug`

## Related Documentation

- [Main README](../../README.md) – Project overview
- [Copilot Instructions](../../.github/copilot-instructions.md) – AI assistant guidelines
- [Vite Documentation](https://vitejs.dev/)
- [Preact Documentation](https://preactjs.com/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Storybook Documentation](https://storybook.js.org/)

## Contributing

1. Create feature branch
2. Develop component with Storybook
3. Write tests
4. Build and verify output
5. Submit pull request

## License

Copyright 2024 Adobe. Licensed under the Apache License, Version 2.0.
