import { Suspense } from "react";
import Breadcrumb from "@/components/ui/BreadCrumb";
import PageContent from "@/components/search/PageContent";
import ProductGridSkeleton from "@/components/search/ProductGridSkeleton";

const BREADCRUMB = [
  { label: "Home", href: "/" },
  { label: "Market", href: "/market" },
  { label: "Search", href: "/search" },
  { label: "Mens-Clothing" },
];

interface PageProps {
  searchParams: Promise<{
    sort?: string;
    discount?: string;
    min?: string;
    max?: string;
  }>;
}

export default function MensClothingPage({ searchParams }: PageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl px-4 sm:px-6">
        <Breadcrumb items={BREADCRUMB} />
      </div>

      <div className="max-w-7xl mx-5 px-4 sm:px-6 pb-16">
        <Suspense fallback={<ProductGridSkeleton />}>
          <PageContent searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
