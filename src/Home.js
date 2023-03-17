import React from "react";
import Button from 'react-bootstrap/Button';

function Home() {

  return (
    <div className="d-grid gap-2">
      <img src="https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-6/327912548_1514101362448447_3580270556796621639_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=kH6Mng__dK4AX8gpU40&_nc_ht=scontent-den4-1.xx&oh=00_AfDmSSkyzg1QzvSNFD7nj5Xt70c8xRZFLWrAJ8goWbLl9g&oe=64187D36"/>
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