import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

const NewLocationForm = ({locations, setLocations}) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    city: '',
    state: 'CO',
    image_url: ''
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  function handleAddLocation(newLocation) {
    const updatedLocationsArray = [...locations, newLocation];
    setLocations(updatedLocationsArray);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:9292/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(newLocation => {
        handleAddLocation(newLocation);
        history.push(`/locations`)
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        State:
        <input
          readOnly="readOnly"
          type="text"
          name="state"
          value={formData.state}
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
      <button type="submit">Create Location</button>
    </form>
  );
};

export default NewLocationForm;