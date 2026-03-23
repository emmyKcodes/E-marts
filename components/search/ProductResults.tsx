import { products } from "@/lib/products";
import ProductGrid from "@/components/search/ProductGrid";
import type { Product } from "@/types/product";

interface ProductResultsProps {
  sort: string;
  discount: string;
  min: string;
  max: string;
}

function filterAndSort(
  all: Product[],
  sort: string,
  discount: string,
  min: string,
  max: string,
): Product[] {
  let result = [...all];

  if (discount === "with") {
    result = result.filter((p) => p.sale_price > 0 && p.sale_price < p.price);
  } else if (discount === "without") {
    result = result.filter(
      (p) => !(p.sale_price > 0 && p.sale_price < p.price),
    );
  }

  const minVal = min !== "" ? Number(min) : null;
  const maxVal = max !== "" ? Number(max) : null;

  if (minVal !== null) result = result.filter((p) => p.price >= minVal);
  if (maxVal !== null) result = result.filter((p) => p.price <= maxVal);

  if (sort === "price-asc") {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    result.sort((a, b) => b.price - a.price);
  }

  return result;
}

export default function ProductResults({
  sort,
  discount,
  min,
  max,
}: ProductResultsProps) {
  const displayProducts = filterAndSort(products, sort, discount, min, max);

  return (
    <>
      <div className="mb-4">
        <h1 className="text-[18px] font-bold text-black">
          Mens Clothing{" "}
          <span className="text-[14px] font-400 text-gray-400">
            ({displayProducts.length} products found)
          </span>
        </h1>
      </div>
      <ProductGrid products={displayProducts} />
    </>
  );
}
