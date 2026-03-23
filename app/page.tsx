"use client";

import { useState, useEffect } from "react";
import { products } from "@/lib/products";
import Breadcrumb from "@/components/ui/BreadCrumb";
import Sidebar from "@/components/search/Sidebar";
import ProductGrid from "@/components/search/ProductGrid";
import ProductGridSkeleton from "@/components/search/ProductGridSkeleton";

type SortOption = "default" | "price-asc" | "price-desc";

const SORT_LABELS: Record<SortOption, string> = {
  default: "Default",
  "price-asc": "Lowest Price",
  "price-desc": "Highest Price",
};

const BREADCRUMB = [
  { label: "Home", href: "/" },
  { label: "Market", href: "/market" },
  { label: "Search", href: "/search" },
  { label: "Mens-Clothing" },
];

function ChevronDownIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function MensClothingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const [sort, setSort] = useState<SortOption>("price-desc");
  const [sortOpen, setSortOpen] = useState(false);
  const [discountFilter, setDiscountFilter] = useState<
    "all" | "with" | "without"
  >("all");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  const displayProducts = products;

  const sidebarProps = {
    discountFilter,
    onDiscountChange: setDiscountFilter,
    priceMin,
    priceMax,
    onPriceMinChange: setPriceMin,
    onPriceMaxChange: setPriceMax,
    onPriceSave: () => {},
    onPriceClear: () => {
      setPriceMin("");
      setPriceMax("");
    },
    activeFilters: ["Mens-Clothing"],
    onClearAll: () => {
      setDiscountFilter("all");
      setPriceMin("");
      setPriceMax("");
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl  px-4 sm:px-6">
        <Breadcrumb items={BREADCRUMB} />
      </div>

      <div className="max-w-7xl mx-5 px-4 sm:px-6 pb-16">
        <div className="flex gap-4">
          <div className="hidden lg:block w-80 shrink-0 -ml-2">
            <div className="sticky top-27">
              <Sidebar {...sidebarProps} />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <div className="lg:hidden">
                <Sidebar {...sidebarProps} />
              </div>

              <div className="hidden lg:block" />

              <div className="relative">
                <button
                  onClick={() => setSortOpen((o) => !o)}
                  className="flex items-center gap-2 px-4 py-2  bg-white border border-gray-200 rounded-md text-[13px] font-500 text-gray-700 hover:border-gray-300 transition-all shadow-sm"
                >
                  <span className="hidden lg:block">Sort by</span>
                  <span className="font-600 text-black font-semibold text-md">
                    {SORT_LABELS[sort]}
                  </span>
                  <ChevronDownIcon />
                </button>

                {sortOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-white border border-gray-100 rounded-xl shadow-xl py-1.5 min-w-45 z-20">
                    {(Object.keys(SORT_LABELS) as SortOption[]).map((key) => (
                      <button
                        key={key}
                        onClick={() => {
                          setSort(key);
                          setSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-[13px] transition-colors ${
                          sort === key
                            ? "font-600 text-black bg-gray-50"
                            : "font-400 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {SORT_LABELS[key]}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <h1 className="text-[18px] font-bold text-black">
                Mens Clothing{" "}
                {!isLoading && (
                  <span className="text-[14px] font-400 text-gray-400">
                    ({displayProducts.length} products found)
                  </span>
                )}
              </h1>
            </div>

            {isLoading ? (
              <ProductGridSkeleton />
            ) : (
              <ProductGrid products={displayProducts} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
