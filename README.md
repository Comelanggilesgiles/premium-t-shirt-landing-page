# Aether - Premium T-Shirt Landing Page

A single-page storefront for a premium Pima cotton t-shirt brand, with a working shopping bag.

## Description

Aether is a responsive landing page for a fictional premium t-shirt label. It walks a visitor from the hero section through product features, a color and size selector, a lookbook, testimonials, pricing plans and an FAQ, and ends with a call to action. Visitors can pick a color, size and quantity, add items to a slide-out shopping bag, and see the shipping total update automatically. It is a front-end demo: there is no backend or real checkout.

## Key Features

- Hero section with a clear value proposition and call to action
- Product showcase with color swatches, size selection and quantity controls
- Slide-out shopping bag with line items, subtotal, and free shipping once the subtotal reaches $100
- Sticky buy bar that keeps the purchase action in reach while scrolling
- Features, process steps, benefits, lookbook, testimonials, pricing and FAQ sections
- Scroll-triggered reveal animations
- Fully responsive layout with a mobile menu
- Accessibility basics: skip link, ARIA labels on controls, keyboard-friendly buttons
- Content kept in a single data file (`src/data.ts`) so products, prices and copy are easy to edit

## Screenshot

![Aether landing page screenshot](/public/images/Screenshot_14-10-2026_2390_localhost.jpeg)



## Tech Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Lucide React (icons)
- clsx and tailwind-merge (class name utilities)
- vite-plugin-singlefile (bundles the build output into one HTML file)

## Install and Usage

### Requirements

- Node.js 20.19 or newer (includes npm). Check with `node -v`.
- Git (only if you clone from GitHub).

### Steps

1. Get the code.

   ```bash
   git clone https://github.com/Comelanggilesgiles/premium-t-shirt-landing-page.git
   cd premium-t-shirt-landing-page
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Start the development server.

   ```bash
   npm run dev
   ```

4. Open the address printed in the terminal (usually `http://localhost:5173`).

### Other commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local development server with hot reload |
| `npm run build` | Creates a production build in the `dist` folder |
| `npm run preview` | Serves the production build locally for testing |

## Project Structure

```
premium-t-shirt-landing-page/
  index.html
  package.json
  vite.config.ts
  public/images/        Product and lifestyle photos
  src/
    App.tsx             Page layout and section order
    data.ts             Products, features, plans, FAQs, testimonials
    context/            Shopping bag state
    components/         One file per page section
```

## Customization

- Change products, prices, sizes and copy in `src/data.ts`.
- Replace the photos in `public/images/` using the same file names.
- Edit colors and fonts in `src/index.css` and `index.html`.

## License

Add a license of your choice before sharing publicly (for example MIT).
