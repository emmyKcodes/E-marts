function CardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 flex flex-col">
      {/* Image placeholder */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 shimmer-sweep" />

        {/* Big tilting e — almost card-width, padded */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <span
            className="select-none w-full text-center"
            style={{
              animation: "eTilt 3s linear infinite",
              transformOrigin: "50% 50%",
              fontSize: "clamp(64px, 18vw, 96px)",
              color: "rgba(200, 200, 200, 0.5)",
              lineHeight: 1,
              display: "block",
            }}
          >
            e
          </span>
        </div>
      </div>

      {/* Text placeholders */}
      <div className="p-3 flex flex-col gap-2.5">
        <div className="h-3.5 bg-gray-100 rounded-full overflow-hidden w-4/5 relative">
          <div className="absolute inset-0 shimmer-sweep" />
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden w-3/5 relative">
          <div className="absolute inset-0 shimmer-sweep" />
        </div>
        <div className="flex items-center justify-between pt-1">
          <div className="h-4 bg-gray-100 rounded-full overflow-hidden w-1/3 relative">
            <div className="absolute inset-0 shimmer-sweep" />
          </div>
          <div className="w-8 h-8 bg-gray-100 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 shimmer-sweep" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductGridSkeleton() {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>

      <style>{`
        @keyframes eTilt {
          0%   { transform: rotate(0deg); }
          50%  { transform: rotate(-180deg); }
          100% { transform: rotate(0deg); }
        }

        .shimmer-sweep {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.75) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmerSlide 1.5s ease-in-out infinite;
        }

        @keyframes shimmerSlide {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </>
  );
}
