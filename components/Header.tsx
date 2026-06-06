"use client";

import Link from "next/link";
import { ShoppingCart, Search, User } from "lucide-react";
import { useCartStore } from "@/context/cartStore";

type HeaderProps = {
  search?: string;
  onSearchChange?: (val: string) => void;
};

export default function Header({ search = "", onSearchChange }: HeaderProps) {
  const totalItems = useCartStore((s) => s.totalItems());

  return (
    <header className="bg-[#1e3a6e] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight flex-shrink-0 mr-4"
        >
          Logo
        </Link>

        {/* Search */}
        <div className="flex-1 relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-md text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Cart */}
          <Link
            href="/cart"
            className="relative flex items-center gap-2 bg-[#152c55] hover:bg-[#2d5090] px-4 py-2 rounded-md transition-colors"
          >
            <ShoppingCart size={18} />
            <span className="text-sm font-medium">Cart</span>

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Profile Avatar */}
          <button className="w-10 h-10 rounded-full bg-white text-[#1e3a6e] flex items-center justify-center shadow-md hover:scale-105 transition-transform">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}