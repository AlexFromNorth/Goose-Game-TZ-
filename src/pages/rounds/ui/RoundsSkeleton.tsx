const skeletonItems = Array.from({ length: 10 });

export function RoundsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {skeletonItems.map((_, idx) => (
        <div
          key={idx}
          className="h-32 animate-pulse rounded-xl border border-border bg-base/60"
        />
      ))}
    </div>
  );
}
