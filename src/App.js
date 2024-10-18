import logo from './logo.svg';
import './App.css';
import destinations from "./destinations.json";
import React, {useState, useEffect} from 'react';
import DestinationBox from './components/DestinationBox';

// ### Iteration 2 | Create the DestinationBox Component

// Create a new component named DestinationBox. It should take a destination prop (an object) and render the following details: name, image, continent, notes, and a "Mark as Visited" button.

// Once created, test it by rendering a single instance of the component in App.js:

// ```
// <DestinationBox destination={{
//   name: "Paris",
//   image: "https://linktoparisimage.com",
//   continent: "Europe",
//   visited: false,
//   notes: "Visit the Eiffel Tower."
// }} />
// ```

function App() {
  const [destinationData, setDestinationData] = useState([])

  useEffect(() => {setDestinationData(destinations)}, [])

  return (
    <>
      {/* {destinationData.map((destination) => (
        <div key={destination.key}>
          <p>{destination.name}</p>
          <img src={destination.image} width={100} />
        </div>
      )
      )} */}

    <DestinationBox destination={{
      name: "Paris",
      image: "https://linktoparisimage.com",
      continent: "Europe",
      visited: false,
      notes: "Visit the Eiffel Tower."
    }} />

    </>
  );
}

export default App;
