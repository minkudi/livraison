"use client";

import { useEffect } from "react";
import { useTrackingLoading } from "./TrackingLoadingContext";

/** À placer sur la page résultat pour fermer l’overlay de recherche. */
export function TrackingLoadDone() {
  const { endTrackingLoad } = useTrackingLoading();
  useEffect(() => {
    endTrackingLoad();
  }, [endTrackingLoad]);
  return null;
}
