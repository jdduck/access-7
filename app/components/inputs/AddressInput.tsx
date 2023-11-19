"use client"

import PlacesAutocomplete, { geocodeByAddress, getLatLng} from "react-places-autocomplete";
import { useState } from "react";
import { GoogleMaps } from "../GoogleMaps";

export default function AddressInput() {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({lat: 38.276463, lng: -104.604607});

  const handleSelect = async (value:any) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  type AutoChildren = {
    value: string
    onChange: ((value: string) => void)
    onSelect: ((address: string, placeID: string) => void) | undefined
    children?: JSX.Element|JSX.Element[]
  }

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>

            <input {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };                
                return (
                  <>
                  <div key={suggestion.placeId}>
                    <div {...getSuggestionItemProps(suggestion,{ style })}>
                      {suggestion.description}
                    </div>
                  </div>                  
                  <p> {coordinates.lat} {coordinates.lng} </p>
                  </>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
        <GoogleMaps {...coordinates}/>    
    </div>
  );
}
