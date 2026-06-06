"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { useCartStore } from "@/context/cartStore";
import StarRating from "./StarRating";

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square bg-gray-50 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-3 flex flex-col flex-1">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-800 text-sm mb-1 hover:text-[#1e3a6e] transition-colors">
            {product.title}
          </h3>
        </Link>
        <StarRating rating={product.rating} />
        <p className="text-gray-800 font-bold mt-1 mb-3">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-auto w-full bg-[#1e3a6e] hover:bg-[#2d5090] text-white text-sm py-2 rounded-md transition-colors flex items-center justify-center gap-1.5"
        >
          <ShoppingCart size={14} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
