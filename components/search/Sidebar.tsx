"use client";

import { useState } from "react";
import { PRICE_BOUNDS } from "@/lib/products";

export type DiscountFilter = "all" | "with" | "without";

export interface SidebarProps {
  discountFilter?: DiscountFilter;
  onDiscountChange?: (value: DiscountFilter) => void;
  priceMin?: string;
  priceMax?: string;
  onPriceMinChange?: (value: string) => void;
  onPriceMaxChange?: (value: string) => void;
  onPriceSave?: () => void;
  onPriceClear?: () => void;
  activeFilters?: string[];
  onClearAll?: () => void;
}

function CheckIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="2 6 5 9 10 3" />
    </svg>
  );
}

function SlidersIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <circle cx="8" cy="6" r="2" fill="currentColor" stroke="none" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <circle cx="16" cy="12" r="2" fill="currentColor" stroke="none" />
      <line x1="4" y1="18" x2="20" y2="18" />
      <circle cx="10" cy="18" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button className="w-full flex items-center justify-between py-4 text-left">
        <span className="text-[14px] font-bold text-black">{title}</span>
      </button>
      <div className="mb-4 border border-gray-200 rounded-md p-3">
        {children}
      </div>
    </div>
  );
}

function RadioOption({
  label,
  value,
  selected,
  onChange,
}: {
  label: string;
  value: string;
  selected: boolean;
  onChange: (v: string) => void;
}) {
  return (
    <label
      className="flex items-center gap-3 cursor-pointer group py-2.5 border-b border-gray-100 last:border-0"
      onClick={() => onChange(value)}
    >
      <span
        className={`w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 transition-all duration-150 ${selected ? "" : "border-2 border-gray-300 group-hover:border-gray-400 bg-white"}`}
        style={
          selected
            ? { backgroundColor: "#9bbc55", border: "2px solid #9bbc55" }
            : {}
        }
      >
        {selected && (
          <span className="text-white flex items-center justify-center">
            <CheckIcon />
          </span>
        )}
      </span>
      <span
        className={`text-[13.5px] transition-colors ${selected ? "font-600 text-black" : "font-400 text-gray-700 group-hover:text-black"}`}
      >
        {label}
      </span>
    </label>
  );
}

export default function Sidebar({
  discountFilter = "all",
  onDiscountChange,
  priceMin = "",
  priceMax = "",
  onPriceMinChange,
  onPriceMaxChange,
  onPriceSave,
  onPriceClear,
  activeFilters = ["Mens-Clothing"],
  onClearAll,
}: SidebarProps) {
  const [openCategory, setOpenCategory] = useState<string | null>("Fashion");
  const [mensSelected, setMensSelected] = useState(false);

  const handleDiscountChange = (v: string) =>
    onDiscountChange?.(v as DiscountFilter);

  return (
    <>
      <aside className="hidden lg:block w-full bg-white rounded-2xl border border-gray-100 p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[15px] font-bold text-black">Filters</span>
          {(activeFilters.length > 0 || onClearAll) && (
            <button
              onClick={onClearAll}
              className="text-[12.5px] font-500 text-gray-500 hover:text-black transition-colors"
            >
              Clear All
            </button>
          )}
        </div>
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {activeFilters.map((f) => (
              <span
                key={f}
                className="flex items-center gap-1.5 text-[12px] font-500 text-gray-700 border rounded-md px-2.5 py-0.5"
              >
                {f}
                <button
                  onClick={onClearAll}
                  className="text-gray-400 hover:text-black leading-none text-[14px]"
                  aria-label={`Remove ${f} filter`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
        <Section title="Discount">
          <div>
            <RadioOption
              label="Show All"
              value="all"
              selected={discountFilter === "all"}
              onChange={handleDiscountChange}
            />
            <RadioOption
              label="With Discount"
              value="with"
              selected={discountFilter === "with"}
              onChange={handleDiscountChange}
            />
            <RadioOption
              label="Without Discount"
              value="without"
              selected={discountFilter === "without"}
              onChange={handleDiscountChange}
            />
          </div>
        </Section>
        <Section title="Price (₦)">
          <div className="space-y-3">
            <div className="flex justify-between text-[11.5px] text-gray-400">
              <span>₦{PRICE_BOUNDS.min.toLocaleString("en-NG")}</span>
              <span>₦{PRICE_BOUNDS.max.toLocaleString("en-NG")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`flex-1 flex items-center border rounded-md px-3 py-2 transition-all duration-150 ${priceMin ? "border-gray-400 bg-white" : "border-gray-200 bg-gray-50"} focus-within:ring-2`}
              >
                <input
                  type="number"
                  placeholder="Min"
                  value={priceMin}
                  onChange={(e) => onPriceMinChange?.(e.target.value)}
                  className="w-full bg-transparent outline-none text-[13px] text-gray-800 placeholder:text-gray-400 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
              </div>
              <span className="text-gray-300 text-[13px]">—</span>
              <div
                className={`flex-1 flex items-center border rounded-md px-3 py-2 transition-all duration-150 ${priceMax ? "border-gray-400 bg-white" : "border-gray-200 bg-gray-50"}`}
              >
                <input
                  type="number"
                  placeholder="Max"
                  value={priceMax}
                  onChange={(e) => onPriceMaxChange?.(e.target.value)}
                  className="w-full bg-transparent outline-none text-[13px] text-gray-800 placeholder:text-gray-400 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-between pt-0.5">
              <button
                onClick={onPriceClear}
                className="text-[12.5px] text-sm text-gray-500 hover:text-black transition-colors"
              >
                Clear
              </button>
              <button
                onClick={onPriceSave}
                className="text-[12.5px] font-600 transition-colors"
                style={{ color: "#5a9e00" }}
              >
                Save
              </button>
            </div>
          </div>
        </Section>
        <Section title="Categories">
          <div className="space-y-1">
            <button
              onClick={() =>
                setOpenCategory(openCategory === "Fashion" ? null : "Fashion")
              }
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="text-[13.5px] font-bold text-black">
                Fashion
              </span>
              <span className="text-[18px] font-bold  text-gray-700">-</span>
            </button>
            {openCategory === "Fashion" && (
              <div className="mt-1 ml-3 space-y-0.5">
                <label
                  className="flex items-center gap-2.5 px-2 py-2 rounded-lg cursor-pointer group"
                  onClick={() => setMensSelected((s) => !s)}
                >
                  <span
                    className={`w-4 h-4 rounded-xl     flex items-center justify-center shrink-0 transition-all duration-150 ${
                      mensSelected
                        ? ""
                        : "border-2 border-gray-300 group-hover:border-gray-400 bg-white"
                    }`}
                    style={
                      mensSelected
                        ? {
                            backgroundColor: "#9bbc55",
                            border: "2px solid #9bbc5c",
                          }
                        : {}
                    }
                  >
                    {mensSelected && (
                      <span className="text-white flex items-center justify-center">
                        <CheckIcon />
                      </span>
                    )}
                  </span>
                  <span className="text-[13px] font-400 text-gray-700 group-hover:text-black transition-colors">
                    Men&apos;s Clothing
                  </span>
                </label>
              </div>
            )}
          </div>
        </Section>
      </aside>

      <div className="lg:hidden flex items-center gap-2 bg-white border border-gray-200 rounded-md px-3 py-2 shadow-sm cursor-pointer hover:border-gray-300 transition-all">
        <SlidersIcon />
        <span className="text-[13.5px] text-black font-bold">Filters</span>
      </div>
    </>
  );
}
