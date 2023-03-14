import React, {useState, useEffect} from "react";
import Search from "./Search";
import VenueCard from "./VenueCard";
//this component is where we store our venues
function VenueContainer({venues, setLocations, search, setSearch}) {

  // useEffect(() => {
  //   fetch("http://localhost:9292/")
  //     .then((r) => r.json())
  //     .then((data) => setData(data.venues)); 
  // }, []); 
  
//handles deleting a venue by taking in its id
      function handleDeleteVenue(id) {
        const updatedVenueArray = venues.filter(venue => venue.id !== id);
        setLocations(updatedVenueArray);
      }
////new array that filters through if name, description or location matches the search terms. Also handles case insensitive matches
      const filteredVenues = venues.filter(venue => {
        return (venue.name.toLowerCase().includes(search.toLowerCase())) 
        || venue.description.toLowerCase().includes(search.toLowerCase())
        || venue.capacity.toLowerCase().includes(search.toLowerCase())
      })
////iterating over the filtered array and creating a separate VenueCard for each venue
      const venueCards = filteredVenues.map(venueObj => {
        return <VenueCard 
          key={venueObj.id} 
          venue={venueObj} 
          onDeleteVenue={handleDeleteVenue}/>
      })

    return (
        <div>
          <Search onSearch={setSearch}/>
            <ul className="cards">
                {venueCards}
            </ul>
        </div>
    )
}

export default VenueContainer;