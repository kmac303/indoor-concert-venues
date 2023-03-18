import React, { useState } from 'react';

const NewLocationForm = () => {
  const [formData, setFormData] = useState({
    city: '',
    state: 'CO',
    image_url: ''
  });
  // const [city, setCity] = useState('');
  // const [state, setState] = useState("CO");
  // const [image_url, setImage_url] = useState('');

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

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
      .then(data => {
        console.log(data)
      })
      .catch(error => console.error(error));
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch('http://localhost:9292/locations', { city, state, image_url })
  //     .then((res) => {
  //       console.log(res.data);
  //       setCity('');
  //       setState('');
  //       setImage_url('');
  //     })
  //     .catch((err) => console.log(err));
  // };

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
      <label>
        State:
        <input
          readonly="readonly"
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="image_url"
          value={formData.image_url}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Create Location</button>
    </form>
  );
};


//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="city">
//         City:
//         <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
//       </label>
//       <label htmlFor="state">
//         State:
//         <input type="text" id="state" name="state" value={state} onChange={(e) => setState(e.target.value)} />
//       </label>
//       <label htmlFor="image_url">
//         Image URL:
//         <input type="text" id="image_url" name="imageUrl" value={image_url} onChange={(e) => setImage_url(e.target.value)} />
//       </label>
//       <button type="submit">Add Location</button>
//     </form>
//   );
// };

export default NewLocationForm;