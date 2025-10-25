# AI Development Rules

This document outlines the tech stack and best practices for AI-driven development of this application.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router) - A React framework for building server-rendered and static web applications.
-   **Language**: [TypeScript](https://www.typescriptlang.org/) - For static typing, improving code quality and maintainability.
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - A collection of re-usable UI components built on top of Radix UI and Tailwind CSS.
-   **Backend & Database**: [Supabase](https://supabase.com/) - An open-source Firebase alternative for database, authentication, and storage.
-   **State Management**: React Context API - Used for managing global state like authentication (`useAuth`), shopping cart (`useCart`), and orders (`useOrders`).
-   **Forms**: [React Hook Form](https://react-hook-form.com/) - For building performant and flexible forms, often paired with [Zod](https://zod.dev/) for validation.
-   **Icons**: [Lucide React](https://lucide.dev/) - A simple and beautiful icon library.

## Library Usage Rules

### UI & Styling

-   **Primary Component Library**: Always use **shadcn/ui** for common UI elements like Buttons, Cards, Inputs, Dialogs, etc. Do not install new component libraries without a strong reason.
-   **Styling**: All styling must be done using **Tailwind CSS** utility classes. Avoid writing custom CSS files. Use the `cn` utility from `lib/utils.ts` to merge classes.
-   **Icons**: Use icons exclusively from the **Lucide React** library.

### State Management

-   **Global State**: Use the existing React Context providers (`AuthProvider`, `CartProvider`, `OrdersProvider`) for managing application-wide state.
-   **Local State**: Use React's built-in `useState` and `useReducer` hooks for component-level state. Avoid introducing complex state management libraries like Redux or Zustand unless absolutely necessary.

### Backend & Data

-   **Authentication**: All authentication logic must use the **Supabase Auth** client. Utilize the existing `useAuth` hook for client-side auth state.
-   **Database**: All database interactions (CRUD operations) must go through the **Supabase** client.
-   **Server-side Logic**: For server-side data fetching and mutations in Next.js Server Components, use Server Actions and the Supabase server client from `@/lib/supabase/server`.

### Forms

-   **Form Handling**: Use **React Hook Form** for managing form state, validation, and submission.
-   **Schema Validation**: Use **Zod** to define validation schemas for forms.

By following these rules, we ensure consistency, maintainability, and a high-quality codebase.