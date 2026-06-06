import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { categories } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-[#1e3a6e] text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Filters column */}
          <div>
            <h3 className="font-bold mb-3">Filters</h3>
            <div className="flex flex-wrap gap-2 text-sm text-blue-200">
              {categories.map((cat) => (
                <span key={cat}>{cat}</span>
              ))}
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-bold mb-3">About Us</h3>
            <ul className="space-y-1 text-sm text-blue-200">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold mb-3">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-[#2d5090] hover:bg-blue-600 p-2 rounded-full transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-[#2d5090] hover:bg-blue-400 p-2 rounded-full transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-[#2d5090] hover:bg-pink-600 p-2 rounded-full transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-6 pt-4 text-sm text-blue-300 text-center">
          © 2024 American. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
