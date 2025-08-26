# Next.js Dashboard

This is a simple financial dashboard built with Next.js and Tailwind CSS, developed as part of the Next.js App Router Course. The application allows users to manage invoices, customers, and revenue data.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FIgorAugust0%2Fnextjs-dashboard)

<div>
  <p align="center">
    <img src="https://github.com/user-attachments/assets/7a612a79-4b10-4ab0-8e7c-6d361191bc5c" alt="Readme" width="725">
  </p>
</div>

## Features

- A public home page with a hero section and a call to action.
- A login page with a form to authenticate users.
- Dashboard pages that are protected by authentication.
- The ability for users to add, edit, and delete invoices.
- An accompanying database to store user, customers, invoices and revenue data.

## Technology stack

- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Back-end:** [Next.js](https://nextjs.org/)
- **Front-end:** [React](https://react.dev/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Tools:** [Zod](https://zod.dev/) | [bcrypt](https://github.com/kelektiv/node.bcrypt.js) | [use-debounce](https://github.com/xnimorz/use-debounce)

## Running locally

1. Clone this repo:

```sh
git clone https://github.com/IgorAugust0/nextjs-dashboard.git
```

2. Then go to the project's folder:

```sh
cd nextjs-dashboard
```

3. Install all dependencies:

```sh
pnpm i
```

4. Configure your environment variables and follow the instructions:

```sh
cp .env.example .env.local
```

5. Run locally:

```sh
pnpm dev
```

## Overview

Here's a brief overview of what I've learned while building this project:

- **Styling**: The different ways to style a Next.js application using Tailwind CSS.
- **Optimizations**: How to optimize images, links, and fonts.
- **Routing**: How to create nested layouts and pages using file-system routing.
- **Data Fetching**: How to set up a database on Vercel, and best practices for fetching and streaming.
- **Search and Pagination**: How to implement search and pagination using URL Search Params.
- **Mutating Data**: How to mutate data using React Server Actions, and revalidate the Next.js cache.
- **Error Handling**: How to handle general and 404 not found errors.
- **Form Validation and Accessibility**: How to do server-side form validation and tips for improving accessibility.
- **Authentication**: How to add authentication to a application using NextAuth.js and Middleware.
- **Metadata**: How to add metadata and prepare a application for social sharing.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## What's next?

- [ ] Add the customer page
- [ ] Sign-up page.
- [ ] Add dark mode support.
- [ ] Internationalization support.

## License

[MIT License](./LICENSE) © Igor Augusto
