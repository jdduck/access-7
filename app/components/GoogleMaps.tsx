"use client"

import React, { useEffect, useRef } from "react";

const DEFAULT_CENTER = { lat: 48.8566, lng: 2.3522 };
const DEFAULT_ZOOM = 7;

export const GoogleMaps = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Display the map
    if (ref.current) {
      new window.google.maps.Map(ref.current, {
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
      });
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{ width: "700px", height: "400px" }}
    />
  );
};