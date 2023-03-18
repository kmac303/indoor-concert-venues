import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import { Link, useParams } from "react-router-dom";
import EditVenue from "./EditVenue";
// import DeleteVenue from "./DeleteVenue";

function Location({locations}) {
    const { id } = useParams();
    const [location, setLocation] = useState({
      venues: []
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
          .then((r) => r.json())
          .then(setLocation({ ...location, venues: location.venues.filter(v => v.id != event.target.value)}))
      }


      const cityObj = locations.map((l) => {
        return <option key={l.city} value={l.id}>
                {l.city}
                </option>
      }
     )
    
   
      const venueObj = location.venues.map(venue => {
        
        const formState = {
          venue: venue,
          cityObj: cityObj
         }

       return (

          <div key={venue.id}>
            <Card style={{ width: '50rem' }}>
              <Card.Img variant="top" src={venue.image_url} />
                <Card.Title><h2>{venue.name}</h2></Card.Title>
                <Card.Text>{venue.description}</Card.Text>
                <Card.Text>{venue.capacity}</Card.Text>
            </Card>
            <Link to={{pathname: "/venues/:id/edit", state: venue}}><button>Edit</button></Link>
            <button value={venue.id} onClick={handleDeleteClick}>Delete Venue</button>
      
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