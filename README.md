# WhatBytes Store — Frontend Assignment

A fully functional e-commerce product listing app built with **Next.js **, **TypeScript**, **Tailwind CSS**, and **Zustand**.

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
