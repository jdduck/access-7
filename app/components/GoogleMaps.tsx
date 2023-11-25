"use client"

import React, { useEffect, useRef } from "react";
const DEFAULT_ZOOM = 12;

type CoordTypes = {
  lat: number,
  lng: number
}

export const GoogleMaps = ({...coordinates}:CoordTypes) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Display the map
    if (ref.current) {
      var map = new window.google.maps.Map(ref.current, {
        center: coordinates,
        zoom: DEFAULT_ZOOM,
      });
      // const markerIcon = "@/public/images/home.jpg"
      var marker = new google.maps.Marker({
        position: coordinates,
        map,
        // icon: markerIcon,        
        title: "Here I am"
      })      
    }
  }, [ref, coordinates]);

  return (
    
    <div className="mt-16"
      ref={ref}
      style={{ height: "20rem"}}
    />    
  )
};