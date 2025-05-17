// components/SkeletonLoader.tsx
export default function SkeletonLoader() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-10 bg-gray-200 rounded w-1/4 mb-6"></div>
      <div className="space-y-3">
        <div className="h-12 bg-gray-200 rounded"></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-12 bg-gray-100 rounded"></div>
        ))}
      </div>
    </div>
  );
}