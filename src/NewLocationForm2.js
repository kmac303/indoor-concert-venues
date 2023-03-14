import React, { useState } from 'react';
import axios from 'axios';

const AddLocationForm = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState("CO");
  const [image_url, setImage_url] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:9292/locations', { city, state, image_url })
      .then((res) => {
        console.log(res.data);
        setCity('');
        setState('');
        setImage_url('');
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">
        City:
        <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <label htmlFor="state">
        State:
        <input type="text" id="state" name="state" value={state} onChange={(e) => setState(e.target.value)} />
      </label>
      <label htmlFor="image_url">
        Image URL:
        <input type="text" id="image_url" name="imageUrl" value={image_url} onChange={(e) => setImage_url(e.target.value)} />
      </label>
      <button type="submit">Add Location</button>
    </form>
  );
};

export default AddLocationForm;