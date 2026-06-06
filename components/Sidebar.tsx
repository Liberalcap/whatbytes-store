"use client";
import { categories, brands } from "@/data/products";

type SidebarProps = {
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  maxPrice: number;
  onMaxPriceChange: (price: number) => void;
  selectedBrand: string;
  onBrandChange: (brand: string) => void;
};

export default function Sidebar({
  selectedCategory,
  onCategoryChange,
  maxPrice,
  onMaxPriceChange,
  selectedBrand,
  onBrandChange,
}: SidebarProps) {
  return (
    <aside className="w-full">
      {/* Category Filter */}
      <div className="bg-[#1e3a6e] text-white rounded-lg p-4 mb-4">
        <h2 className="font-bold text-base mb-3">Filters</h2>
        <div className="mb-4">
          <h3 className="font-semibold text-sm mb-2">Category</h3>
          <div className="space-y-1.5">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer text-sm">
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={selectedCategory === cat}
                  onChange={() => onCategoryChange(cat)}
                  className="accent-white"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-2">Price</h3>
          <input
            type="range"
            min={0}
            max={1000}
            step={10}
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            className="w-full accent-white"
          />
          <div className="flex justify-between text-xs mt-1">
            <span>0</span>
            <span>{maxPrice === 1000 ? "1000" : maxPrice}</span>
          </div>
        </div>
      </div>

      {/* Brand Filter */}
      <div className="bg-[#1e3a6e] text-white rounded-lg p-4">
        <h2 className="font-bold text-base mb-3">Brand</h2>
        <div className="space-y-1.5 mb-4">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer text-sm">
              <input
                type="radio"
                name="brand"
                value={brand}
                checked={selectedBrand === brand}
                onChange={() => onBrandChange(brand)}
                className="accent-white"
              />
              {brand}
            </label>
          ))}
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-2">Price</h3>
          <div className="relative">
            <select
              value={maxPrice}
              onChange={(e) => onMaxPriceChange(Number(e.target.value))}
              className="w-full bg-white text-gray-800 text-sm rounded px-2 py-1.5 appearance-none"
            >
              <option value={1000}>Up to $1000</option>
              <option value={500}>Up to $500</option>
              <option value={300}>Up to $300</option>
              <option value={200}>Up to $200</option>
              <option value={100}>Up to $100</option>
              <option value={50}>Up to $50</option>
            </select>
          </div>
        </div>
      </div>
    </aside>
  );
}
