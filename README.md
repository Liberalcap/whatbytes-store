# WhatBytes Store — Frontend Assignment

A fully functional e-commerce product listing app built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Zustand**.

## 🔗 Live Demo

> **https://whatbytes-store-ashen.vercel.app/**  

---

## Features

- **Product Listing** (`/`) — Responsive 3-column grid with search, category, price, and brand filters
- **URL-based filters** — `?category=Electronics&maxPrice=500` — filters persist on refresh
- **Product Detail** (`/product/[id]`) — Image, description, quantity selector, reviews
- **Cart** (`/cart`) — Add/remove/update items, price summary
- **Persistent cart** — Saved in `localStorage` via Zustand persist middleware
- **Responsive** — 3 cols desktop, 2 cols tablet, 1 col mobile

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Zustand** (cart state + localStorage persistence)
- **lucide-react** (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Click Deploy (no extra config needed)
4. Copy the live URL and update the README above

## Commit Strategy

- `feat: setup Next.js project with Tailwind and Zustand`
- `feat: add product data and types`
- `feat: implement header with search`
- `feat: add sidebar with category/price/brand filters`
- `feat: implement product listing grid with ProductCard`
- `feat: add URL-based filter sync`
- `feat: implement product detail page`
- `feat: add cart store with localStorage persistence`
- `feat: implement cart page with quantity controls`
- `feat: add footer with social links`
