export function TrackingDetailSkeleton() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12" aria-busy="true" aria-label="Chargement du suivi">
      <div className="skeleton h-4 w-32 rounded" />
      <div className="mt-6 space-y-4">
        <div className="card rounded-2xl border border-g200 bg-white p-6">
          <div className="skeleton h-3 w-20 rounded" />
          <div className="skeleton mt-3 h-8 w-3/4 max-w-md rounded" />
          <div className="skeleton mt-3 h-4 w-full max-w-lg rounded" />
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="skeleton h-12 rounded-lg" />
            <div className="skeleton h-12 rounded-lg" />
            <div className="skeleton h-12 rounded-lg" />
          </div>
        </div>
        <div className="card rounded-2xl border border-g200 bg-white p-6 sm:p-8">
          <div className="skeleton h-5 w-40 rounded" />
          <div className="mt-8 space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="skeleton h-6 w-6 shrink-0 rounded-full" />
                <div className="flex-1 space-y-2">
                  <div className="skeleton h-4 w-48 rounded" />
                  <div className="skeleton h-3 w-32 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
