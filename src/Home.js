import React from "react";
import Button from 'react-bootstrap/Button';

function Home() {

  return (
    <div className="d-grid gap-2">
        <p>The state of Colorado has some of the best indoor concert venues. This app is designed to keep track of them all.</p>
      <Button href="http://localhost:3000/locations"variant="primary" size="lg">
        See Locations
      </Button>
      {/* <Button href="http://localhost:3000/venues"variant="secondary" size="lg">
        All Venues
      </Button> */}
    </div>
  );
}

export default Home;