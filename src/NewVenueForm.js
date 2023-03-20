import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

function NewVenueForm({locations, setLocations}) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image_url: '',
    capacity: '',   
    location_id: 1
  });

  const cityObj = locations.map((l) => {
    return <option key={l.city} value={l.id}>
            {l.city}
            </option>
  }
 )

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    fetch('http://localhost:9292/venues', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        history.push(`/locations/${formData.location_id}`)
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          type="text"
          name="image_url"
          value={formData.image_url}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Capacity:
        <input
          type="text"
          name="capacity"
          value={formData.capacity}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        City:
        <select
        type="text"
        name="location_id"
        value={formData.location_id}
        onChange={handleInputChange}>
       {cityObj}
     </select>
      </label>
      <button type="submit">Create Venue</button>
    </form>
  );
};

export default NewVenueForm;