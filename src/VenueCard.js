import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//this component is for each individual venue
function VenueCard({venue, onDeleteVenue}) {
    //destructuring the venue object
    const {image_url, description, name, location_id, capacity, id} = venue;
//handles deleting a venue
    function handleDelete() {
        fetch(`http://localhost:9292/venues/${id}`, {
            method: "DELETE"
        })
        .then((r) => r.json())
        .then(() => {
            onDeleteVenue(id);
        })        
    }
    return (
        <ul className="card">
            <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title><h2>{name}</h2></Card.Title>
                    <Card.Subtitle><b>{location_id}</b></Card.Subtitle>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Card.Text>
                    Capacity: {capacity}
                    </Card.Text>
                    <Button variant="primary" onClick={handleDelete}>Delete</Button>
                </Card.Body>
            </Card>
            <br/>
            <p></p>
        </ul>
    )
}

export default VenueCard;