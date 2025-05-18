// components/DataContainer.tsx
import SkeletonLoader from './SkeletonLoader';

type DataContainerProps = {
  loading: boolean;
  error: string | null;
  children: React.ReactNode;
  onRetry: () => void;
};

export default function DataContainer({ 
  loading, 
  error, 
  children, 
  onRetry 
}: DataContainerProps) {
  if (loading) return <SkeletonLoader />;
  if (error) return (
    <div className="text-center p-8 bg-red-50 rounded-lg">
      <p className="text-red-600 mb-4">{error}</p>
      <button 
        onClick={onRetry}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Reintentar
      </button>
    </div>
  );

  return <>{children}</>;
}