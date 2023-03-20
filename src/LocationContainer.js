import React from "react";
import LocationCard from "./LocationCard";

//this component is where we store our locations
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