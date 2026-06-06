"use client";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCartStore } from "@/context/cartStore";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useCartStore();

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6 min-h-[60vh]">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-[#1e3a6e] hover:underline mb-6"
        >
          <ArrowLeft size={14} /> Continue Shopping
        </Link>

        <h1 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <ShoppingBag size={48} className="mb-4 text-gray-300" />
            <p className="text-lg font-medium">Your cart is empty</p>
            <p className="text-sm mt-1 mb-4">Add some products to get started</p>
            <Link
              href="/"
              className="bg-[#1e3a6e] text-white px-6 py-2 rounded-lg hover:bg-[#2d5090] transition-colors"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Items */}
            <div className="md:col-span-2 space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex gap-4"
                >
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/product/${item.id}`}
                      className="font-semibold text-gray-800 hover:text-[#1e3a6e] transition-colors line-clamp-1"
                    >
                      {item.title}
                    </Link>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="font-bold text-[#1e3a6e] mt-1">${item.price}</p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                    <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 hover:bg-gray-100 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-3 py-1 border-x border-gray-200 text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 hover:bg-gray-100 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-gray-700">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              <button
                onClick={clearCart}
                className="text-sm text-red-500 hover:text-red-700 transition-colors"
              >
                Clear cart
              </button>
            </div>

            {/* Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sticky top-20">
                <h2 className="font-bold text-lg text-gray-800 mb-4">Order Summary</h2>
                <div className="space-y-2 text-sm text-gray-600">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span className="truncate pr-2">
                        {item.title} × {item.quantity}
                      </span>
                      <span className="flex-shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-100 mt-4 pt-4">
                  <div className="flex justify-between font-bold text-gray-800 text-base">
                    <span>Total</span>
                    <span>${totalPrice().toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-[#1e3a6e] hover:bg-[#2d5090] text-white py-3 rounded-lg font-semibold transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
