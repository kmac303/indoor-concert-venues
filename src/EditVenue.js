import React, {useState} from 'react'
import { useLocation, useHistory } from 'react-router-dom';

function EditVenue() {

  const location = useLocation()
  const history = useHistory();
  const venue = location.state;
  const [formData, setFormData] = useState({
    name: venue.name,
    description: venue.description,
    capacity: venue.capacity,   
  });

  const handleInputChange = (event) => {
    console.log(event);
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    fetch(`http://localhost:9292/venues/${venue.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        history.push(`/locations/${venue.location_id}`)
      })
      .catch(error => console.error(error));
  };
  
    return ( 
        <div>
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
        Capacity:
        <input
          type="text"
          name="capacity"
          value={formData.capacity}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Update Venue</button>
    </form>
        </div>
     );
}

export default EditVenue;