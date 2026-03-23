import Sidebar from "@/components/search/Sidebar";
import SortDropdown from "@/components/search/SortDropdown";
import ProductResults from "@/components/search/ProductResults";

interface PageContentProps {
  searchParams: Promise<{
    sort?: string;
    discount?: string;
    min?: string;
    max?: string;
  }>;
}

export default async function PageContent({ searchParams }: PageContentProps) {
  const params = await searchParams;

  const sort = params.sort ?? "price-desc";
  const discount = (params.discount ?? "all") as "all" | "with" | "without";
  const min = params.min || "";
  const max = params.max || "";

  return (
    <div className="flex gap-4">
      <div className="hidden lg:block w-80 shrink-0 -ml-2">
        <div className="sticky top-27">
          <Sidebar
            discountFilter={discount}
            appliedMin={min}
            appliedMax={max}
          />
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <div className="lg:hidden">
            <Sidebar
              discountFilter={discount}
              appliedMin={min}
              appliedMax={max}
            />
          </div>

          <div className="hidden lg:block" />
          <SortDropdown currentSort={sort} />
        </div>

        <ProductResults sort={sort} discount={discount} min={min} max={max} />
      </div>
    </div>
  );
}
