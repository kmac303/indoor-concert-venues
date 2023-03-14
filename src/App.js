import React, {useState, useEffect} from 'react';
import {Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Header from './Header';
import VenueContainer from './VenueContainer';
import LocationContainer from './LocationContainer';
import LocationCard from './LocationCard';
import Location from './Location';
import About from './About';
import NewVenueForm from './NewVenueForm';
import NewLocationForm2 from './NewLocationForm2';
import Home from './Home';

function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/locations")
      .then((r) => r.json())
      .then((locations) => setLocations(locations)); 
  }, []); 

  return (
    <div 
    className={"App light"}
    >
      <NavBar />
      <Header />
      <br />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/locations">
          <LocationContainer locations={locations} search={search} setSearch={setSearch}/>
          </Route>
          <Route path="/venues/new">
            <NewVenueForm data={data} setData={setData}/>
          </Route>
          <Route exact path="/locations/new">
            <NewLocationForm2 locations={locations} setLocations={setLocations}/>
          </Route>
          <Route path="/locations/:id">
            <Location locations={locations} search={search} setSearch={setSearch}/>
          </Route>
          {/* <Route path="/venues">
          <VenueContainer venues={locations.venues} setLocations={setLocations} search={search} setSearch={setSearch}/>
          </Route> */}
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
