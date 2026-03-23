import Image from "next/image";
import { CgShoppingCart } from "react-icons/cg";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

function formatPrice(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

function getDiscountPercent(price: number, salePrice: number) {
  return Math.round(((price - salePrice) / price) * 100);
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasSale = product.sale_price > 0 && product.sale_price < product.price;
  const fewUnits = product.quantity <= 5;
  const discountPercent = hasSale
    ? getDiscountPercent(product.price, product.sale_price)
    : 0;

  return (
    <div
      className="flex flex-col group overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg relative h-full bg-white rounded-[10px] px-2.5 w-full cursor-pointer"
      title={product.name}
    >
      {/* Image wrapper */}
      <div className="overflow-hidden mx-auto h-35 w-full md:h-50 mt-2 transition duration-200 ease-in-out relative border rounded-[10px]">
        <div className="relative w-full h-full rounded-xl overflow-hidden ">
          <Image
            src={product.image}
            alt={product.name}
            loading="eager"
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover w-full h-35 md:h-50 bg-fill-thumbnail transition-all duration-200 group-hover:scale-[1.02] group-hover:brightness-110 group-hover:opacity-85"
            unoptimized
          />

          {hasSale && (
            <span
              className="absolute top-2.5 right-2.5 text-black text-[11px] font-bold px-2 py-0.5 rounded-lg leading-tight"
              style={{ backgroundColor: "#d6ff7e" }}
            >
              -{discountPercent}%
            </span>
          )}
        </div>
      </div>

      {/* Body — gap reduced from 1.5 to 0.5 */}
      <div className="px-1 pt-2 pb-2 flex flex-col gap-0.5 flex-1">
        {/* Product name + cart icon */}
        <div className="flex items-start justify-between gap-2">
          <p className="text-[13.5px] font-bold text-gray-900 leading-snug line-clamp-2 flex-1">
            {product.name}
          </p>
          <button
            className="flex items-center justify-center w-8 h-8 rounded-xl border border-gray-200 text-gray-600 hover:text-black hover:border-gray-400 transition-all duration-150 active:scale-95 shrink-0 mt-0.5"
            aria-label={`Add ${product.name} to cart`}
          >
            <CgShoppingCart size={18} />
          </button>
        </div>

        {/* Prices */}
        <div className="flex items-baseline gap-2 flex-wrap">
          {hasSale ? (
            <>
              <span className="text-[15px] font-bold text-gray-500">
                {formatPrice(product.sale_price)}
              </span>
              <span className="text-[12px] font-normal text-gray-400 line-through">
                {formatPrice(product.price)}
              </span>
            </>
          ) : (
            <span className="text-[15px] font-bold text-gray-500">
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        {/* Stock status — pt removed */}
        <div className="flex items-center">
          <span
            className="text-[13.5px] font-semibold"
            style={{ color: fewUnits ? "#d19926" : "#16a34a" }}
          >
            {fewUnits ? "Few Units Left" : "In Stock"}
          </span>
        </div>
      </div>
    </div>
  );
}
