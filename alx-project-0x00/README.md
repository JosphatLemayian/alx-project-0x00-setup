
# alx-project-0x00-setup

Project Description
This is a Next.js-based project designed to teach the fundamentals of building modern web applications using React, TypeScript, and Next.js. The application mimics core features of Airbnb’s UI, including property listings with images, ratings, and interactive components, while emphasizing best practices in front-end development.

Learning Objectives
By completing this project, you will:

Understand how to scaffold a Next.js project with TypeScript
Learn Next.js folder structure and organization best practices
Implement basic routing in Next.js (Pages Router)
Create reusable React components with TypeScript
Work with TypeScript interfaces for component props
Manage assets and static files in Next.js
Develop an understanding of component composition
Implement responsive design with Tailwind CSS
Set up and configure ESLint for code quality
Requirements
Node.js (v16 or later)
npm or yarn
Visual Studio Code (or any preferred IDE)
Next.js v13+
TypeScript
Tailwind CSS
ESLint
Best Practices
Project Structure:

Components are organized in a dedicated components directory
TypeScript interfaces are centralized in an interfaces directory
Pages follow Next.js convention in the pages directory
Component Design:

Components are typed with TypeScript interfaces
Reusable components accept props for customization
Components are modular and focused on single responsibilities
Code Quality:

ESLint is configured for code consistency
TypeScript provides type safety
Arrow function syntax is used consistently
Styling:

Tailwind CSS is used for utility-first styling
Responsive design principles are applied
Consistent spacing and typography scales
Performance:

Next.js Image component is used for optimized images
Code splitting is handled automatically by Next.js
Only necessary dependencies are included
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

