"use client"

import React, { useEffect, useRef } from "react";
const DEFAULT_ZOOM = 7;

type CoordTypes = {
  lat: number,
  lng: number
}

export const GoogleMaps = ({...coordinates}:CoordTypes) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Display the map
    if (ref.current) {
      new window.google.maps.Map(ref.current, {
        center: coordinates,
        zoom: DEFAULT_ZOOM,
      });
    }
  }, [ref, coordinates]);

  return (
    <div
      ref={ref}
      style={{ width: "500px", height: "400px" }}
    />
  )
};