import React from 'react';
import Buttons from './Buttons';
import Hours from './Hours';
import Minutes from './Minutes';

function Km2Hour() {
  const [distance, setDistance] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);

  const onChange = (event) => setDistance(event.target.value);
  const onReset = () => setDistance(0);
  const onFlip = () => {
    onReset();
    setFlipped((flipped) => !flipped);
  };

  return (
    <div>
      <h3>Kilometers to Miles</h3>
      <Hours flipped={flipped} onChange={onChange} distance={distance} />
      <h4>You want to convert from {distance} kilometers to:</h4>
      <Minutes flipped={flipped} onChange={onChange} distance={distance} />
      <Buttons onReset={onReset} onFlip={onFlip} />
    </div>
  );
}

export default Km2Hour;
