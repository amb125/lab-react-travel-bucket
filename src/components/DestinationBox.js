import React from 'react';

export default function DestinationBox (props) {
    console.log(props.destination.visited);
    return (
        <div key={props.destination.key}>
            <img src={props.destination.image}/>
            <h2>Name: {props.destination.name}</h2>
            <p>Continent: {props.destination.continent}</p>
            <p>Notes: {props.destination.notes}</p>
            {!props.destination.visited && <button>Mark as visited</button>}
        </div>
    )
}