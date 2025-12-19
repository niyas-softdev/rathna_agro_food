import { Suspense } from "react";
import Products from "../components/Products";

export default function ProductsPage() {
  return (
    <div className="py-10 lg:py-14 space-y-8">
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-3">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#f2a92b]">
            Products
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#114d3f]">
            Complete product portfolio
          </h1>
        </div>
      </div>
      <Suspense fallback={<div className="px-4 sm:px-6 lg:px-8 py-12 text-center text-slate-600">Loading products...</div>}>
        <Products />
      </Suspense>
    </div>
  );
}


