import React from "react";
import Button from 'react-bootstrap/Button';

function Home() {

  return (
    <div className="d-grid gap-2">
      <img src="https://cdn.mos.cms.futurecdn.net/VMWcAAQT9Rx7CCXnEBvv7H.jpg" 
      alt="Denver"/>
        <p>
          The state of Colorado has some of the best indoor concert venues in the world. This app is designed to keep track of them all.
        </p>
      <Button href="http://localhost:3000/locations"variant="primary" size="lg">
        See Locations
      </Button>
    </div>
  );
}

export default Home;