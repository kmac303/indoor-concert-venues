import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewVenueForm({data, setData}) {
    const [name, setName] = useState(""); 
    const [description, setDescription] = useState(""); 
    const [image_url, setImage_url] = useState(<img src=""/>); 
    const [location, setLocation] = useState(""); 
    const [capacity, setCapacity] = useState("");
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        const formData = ({name, location, description, image_url});
////creates a new array that has all venues in it along with the new venue. Then the setVenues function is called with the new array of venues
        function handleAddVenue(newVenue) {
            const updatedVenuesArray = [newVenue, ...data.venues];
            setData(updatedVenuesArray);
          }
    //fetch request sending a body of formData that we set up
    fetch("http://localhost:9292/venues", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
    })
    .then((r) => r.json())
    .then((newVenue) => {
        handleAddVenue(newVenue);
        history.push("/")
    });
    
}

function submissionMessage() {
    return (
            window.confirm("Thanks for your submission! Click OK to view it on the Home page")
    );
  }

    return (
    <div>
        <h4>Is this list missing a venue? Please add details for another Indoor Colorado Concert Venue below:</h4>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>
            <br />
            <label htmlFor="location">Location: </label>
            <input type="text" id="location" value={location} onChange={e => setLocation(e.target.value)}/>
            <br />
            <label htmlFor="description" >Description: </label>
            <input type="text" id="description" value={description} onChange={e => setDescription(e.target.value)}/>
            <br />
            <label htmlFor="image_url" >Image URL: </label>
            <input type="text" id="image_url" alt="image" onChange={e => setImage_url(e.target.value)}/>
            <br />
            <label htmlFor="capacity" >Capacity: </label>
            <input type="text" id="capacity" value={capacity} onChange={e => setCapacity(e.target.value)}/>
            <br />
            <button type="submit" onClick={submissionMessage}>Add Venue</button>
        </form>
    </div>
)}

export default NewVenueForm;