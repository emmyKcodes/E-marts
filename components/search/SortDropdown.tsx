"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type SortOption = "default" | "price-asc" | "price-desc";

const SORT_LABELS: Record<SortOption, string> = {
  default: "Default",
  "price-asc": "Lowest Price",
  "price-desc": "Highest Price",
};

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

export default function SortDropdown({ currentSort }: { currentSort: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sort =
    (currentSort as SortOption) in SORT_LABELS
      ? (currentSort as SortOption)
      : "price-desc";

  const [open, setOpen] = useState(false);

  function handleSelect(key: SortOption) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", key);
    router.push(`?${params.toString()}`);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md text-[13px] font-500 text-gray-700 hover:border-gray-300 transition-all shadow-sm"
      >
        <span className="hidden lg:block">Sort by</span>
        <span className="font-600 text-black font-semibold text-md">
          {SORT_LABELS[sort]}
        </span>
        <ChevronDownIcon />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 bg-white border border-gray-100 rounded-xl shadow-xl py-1.5 min-w-45 z-20">
          {(Object.keys(SORT_LABELS) as SortOption[]).map((key) => (
            <button
              key={key}
              onClick={() => handleSelect(key)}
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
  );
}
