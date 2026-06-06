"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

export default function ProductListing() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "All");
  const [maxPrice, setMaxPrice] = useState(
    Number(searchParams.get("maxPrice")) || 1000
  );
  const [brand, setBrand] = useState(searchParams.get("brand") || "All");
  const [showFilters, setShowFilters] = useState(false);

  // Sync URL with filters
  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (category !== "All") params.set("category", category);
    if (maxPrice < 1000) params.set("maxPrice", String(maxPrice));
    if (brand !== "All") params.set("brand", brand);
    router.replace(`/?${params.toString()}`, { scroll: false });
  }, [search, category, maxPrice, brand, router]);

  const filtered = products.filter((p) => {
    const matchSearch =
      !search || p.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || p.category === category;
    const matchPrice = p.price <= maxPrice;
    const matchBrand = brand === "All" || p.brand === brand;
    return matchSearch && matchCat && matchPrice && matchBrand;
  });

  return (
  <>
    <Header search={search} onSearchChange={setSearch} />

    {/* Mobile Filter Drawer */}
    {showFilters && (
      <div className="fixed inset-0 z-50 md:hidden">
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setShowFilters(false)}
        />

        <div className="absolute left-0 top-0 h-full w-72 bg-white p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Filters</h2>

            <button
              onClick={() => setShowFilters(false)}
              className="text-2xl"
            >
              ✕
            </button>
          </div>

          <Sidebar
            selectedCategory={category}
            onCategoryChange={setCategory}
            maxPrice={maxPrice}
            onMaxPriceChange={setMaxPrice}
            selectedBrand={brand}
            onBrandChange={setBrand}
          />
        </div>
      </div>
    )}

    <main className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
      {/* Desktop Sidebar */}
      <div className="w-56 flex-shrink-0 hidden md:block">
        <Sidebar
          selectedCategory={category}
          onCategoryChange={setCategory}
          maxPrice={maxPrice}
          onMaxPriceChange={setMaxPrice}
          selectedBrand={brand}
          onBrandChange={setBrand}
        />
      </div>

      {/* Product Grid */}
      <div className="flex-1">
        {/* Mobile Filter Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(true)}
            className="bg-[#1e3a6e] text-white px-4 py-2 rounded-lg"
          >
            ☰ Filters
          </button>
        </div>

        <h1 className="text-xl font-bold text-gray-800 mb-4">
          Product Listing
        </h1>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <p className="text-lg font-medium">No products found</p>
            <p className="text-sm mt-1">
              Try adjusting your filters or search terms
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </main>

    <Footer />
  </>
);
}
