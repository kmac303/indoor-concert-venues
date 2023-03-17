import React from "react";
import LocationCard from "./LocationCard";

//this component is where we store our locations
function LocationContainer({locations}) {

  
////new array that filters through if name, description or location matches the search terms. Also handles case insensitive matches

      // const filteredLocations = locations.filter(location => {
      //   return (location.city.toLowerCase().includes(search.toLowerCase())) 
      //   || location.state.toLowerCase().includes(search.toLowerCase())
      // })

      
////iterating over the filtered array and creating a separate LocationCard for each location
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