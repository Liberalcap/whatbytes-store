"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ShoppingCart, ArrowLeft, Minus, Plus } from "lucide-react";
import { products } from "@/data/products";
import { useCartStore } from "@/context/cartStore";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StarRating from "@/components/StarRating";

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);
  const addToCart = useCartStore((s) => s.addToCart);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return notFound();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-[#1e3a6e] hover:underline mb-6"
        >
          <ArrowLeft size={14} /> Back to Products
        </Link>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative aspect-square bg-gray-50">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div className="p-8 flex flex-col">
              <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded w-fit mb-2">
                {product.category}
              </span>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h1>

              <div className="flex items-center gap-2 mb-3">
                <StarRating rating={product.rating} />
                <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
              </div>

              <p className="text-3xl font-bold text-[#1e3a6e] mb-4">${product.price}</p>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-700">Category</span>
                <p className="text-sm text-gray-600 mt-0.5">{product.category}</p>
              </div>

              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-700">Brand</span>
                <p className="text-sm text-gray-600 mt-0.5">{product.brand}</p>
              </div>

              {/* Quantity selector */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-semibold text-gray-700">Quantity</span>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1.5 hover:bg-gray-100 transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-4 py-1.5 border-x border-gray-300 text-sm font-medium min-w-[2.5rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1.5 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all ${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-[#1e3a6e] hover:bg-[#2d5090] text-white"
                }`}
              >
                <ShoppingCart size={18} />
                {added ? "Added to Cart!" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>

        {/* Reviews section */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Customer Reviews</h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl font-bold text-[#1e3a6e]">{product.rating}.0</div>
            <div>
              <StarRating rating={product.rating} />
              <p className="text-sm text-gray-500 mt-1">Based on {product.reviews} reviews</p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { name: "Alex M.", comment: "Great product! Exactly as described. Fast shipping.", rating: 5 },
              { name: "Sarah K.", comment: "Good quality for the price. Would recommend.", rating: 4 },
              { name: "John D.", comment: "Solid build, happy with the purchase.", rating: 4 },
            ].map((review, i) => (
              <div key={i} className="border-b border-gray-100 pb-4 last:border-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">{review.name}</span>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
