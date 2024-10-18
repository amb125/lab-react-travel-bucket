import logo from './logo.svg';
import './App.css';
import destinations from "./destinations.json";
import React, {useState, useEffect} from 'react';

// Now that you’ve imported the destination data, save it in a state variable using useState. Map over the state variable and render a simple list that displays the destination names and images:

// ```
// <div>
//   <p>DESTINATION_NAME_HERE</p>
//   <img src="DESTINATION_IMAGE_HERE" width={100} />
// </div>
// ```


function App() {
  const [destinationData, setDestinationData] = useState([])
  // console.log(destinationData);

  useEffect(() => {setDestinationData(destinations)}, [])
  console.log(destinationData);

  return (
    <>
      {destinationData.map((destination) => (
        <>
          <p>{destination.name}</p>
          <img src={destination.image} width={100} />
        </>
      )
      )}
    </>
  );
}

export default App;
