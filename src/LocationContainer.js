import React from "react";
import LocationCard from "./LocationCard";

function LocationContainer({locations}) {
  let sortedLocations = locations.sort(function (a, b) {
    if (a.city < b.city) {
      return -1;
    }
    if (a.city > b.city) {
      return 1;
    }
    return 0;
  });
      const locationCards = sortedLocations.map(location => {
        return <LocationCard 
          key={location.id} 
          location={location} 
          />
      })
      
    return (
        <div>
          <h1>Locations:</h1>
                {locationCards}
        </div>
    )
}

export default LocationContainer;