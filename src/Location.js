import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Search from "./Search";
import { useParams } from "react-router-dom";

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
   

      const venueObj = location.venues.map(venue => (
          <ul skey={venue.id}>
            <Card style={{ width: '50rem' }}>
              <Card.Img variant="top" src={venue.image_url} />
                <Card.Title><h2>{venue.name}</h2></Card.Title>
                <Card.Text>{venue.description}</Card.Text>
            </Card>
          </ul>
        ));

  return (
    <div>
      <b><h2>{location.city} Venues:</h2></b>
      {/* <h2>Venues:</h2> */}
        {venueObj}
    </div>
  );
}


export default Location;