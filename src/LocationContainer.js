import React from "react";
import LocationCard from "./LocationCard";

function LocationContainer({locations}) {

      const locationCards = locations.map(location => {
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