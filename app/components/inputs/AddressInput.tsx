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
    console.log(value)
    setCoordinates(latLng);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="absolute z-50 w-5/6">
            <input {...getInputProps({ placeholder: "Type address" })}
              className="w-5/6 z-40 h-12 pl-4 fixed"           />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };                
                return (
                  <div key={suggestion.placeId}>
                    <div {...getSuggestionItemProps(suggestion,{ style })}>
                      {suggestion.description}
                    </div>
                  </div>                  
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
