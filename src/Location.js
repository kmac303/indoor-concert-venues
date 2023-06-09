import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import { Link, useParams } from "react-router-dom";

function Location({locations}) {
    const { id } = useParams();
    const [location, setLocation] = useState({
      venues: []
    });

    let sortedVenues = location.venues.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    useEffect(() => {
      const locationObj = locations.find(l => l.id == id)
      if (locationObj){
        setLocation(locationObj);
      }}, [locations]); 

    const handleDeleteClick = (event) => {
        fetch(`http://localhost:9292/venues/${event.target.value}`, {
          method: "DELETE",
        })
          .then(setLocation({ ...location, venues: location.venues.filter(v => v.id != event.target.value)}))
      }


    
      const venueObj = sortedVenues.map(venue => {
      
       return (
          <div key={venue.id}>
            <Card>
              <Card.Img variant="top" src={venue.image_url} />
                <Card.Title><h2>{venue.name}</h2></Card.Title>
                <Card.Text>{venue.description}</Card.Text>
                <Card.Text>Capacity: {venue.capacity}</Card.Text>
            </Card>
            <Link to={{pathname: `/venues/${venue.id}/edit`, state: venue}}><button>Edit</button></Link>
            <button value={venue.id} onClick={handleDeleteClick}>Delete Venue</button>
            <p />
          </div>  
        )});

  return (
    <div>
      <b><h2>{location.city} Venues:</h2></b>
        {venueObj}
    </div>
  );
}

export default Location;