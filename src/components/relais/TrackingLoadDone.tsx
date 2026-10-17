"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTrackingLoading } from "./TrackingLoadingContext";

/** À placer sur la page résultat pour fermer l’overlay de recherche. */
export function TrackingLoadDone() {
  const { endTrackingLoad, takeCancelled } = useTrackingLoading();
  const router = useRouter();
  useEffect(() => {
    if (takeCancelled()) {
      router.back();
      return;
    }
    endTrackingLoad();
  }, [endTrackingLoad, router, takeCancelled]);
  return null;
}
