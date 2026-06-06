import { Suspense } from "react";
import ProductListing from "@/components/ProductListing";

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProductListing />
    </Suspense>
  );
}
