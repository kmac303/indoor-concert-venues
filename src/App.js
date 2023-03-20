import React, {useState, useEffect} from 'react';
import {Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Header from './Header';
import LocationContainer from './LocationContainer';
import Location from './Location';
import About from './About';
import NewVenueForm from './NewVenueForm';
import NewLocationForm from './NewLocationForm';
import EditVenue from './EditVenue';
import Home from './Home';

function App() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/locations")
      .then((r) => r.json())
      .then((locations) => setLocations(locations)); 
  }, []); 

  return (
    <div className={"App"}>
      <NavBar />
      <Header />
      <br />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/locations">
          <LocationContainer locations={locations}/>
          </Route>
          <Route path="/venues/new">
            <NewVenueForm locations={locations} setLocations={setLocations}/>
          </Route>
          <Route exact path="/locations/new">
            <NewLocationForm locations={locations} setLocations={setLocations}/>
          </Route>
          <Route path="/locations/:id">
            <Location locations={locations} setLocations={setLocations}/>
          </Route>
          <Route path="/venues/:id/edit">
            <EditVenue />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
