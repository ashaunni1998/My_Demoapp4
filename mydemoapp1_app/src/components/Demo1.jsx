import React, { useState } from 'react';
import "../Styles/Demo1.css"; // Import the CSS file for styling

const Demo1 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
      <button className="increment-button" onClick={handleClick}>
        Increment
      </button>
      <p className="counter-value">Count: {count}</p>
    </div>
  );
};

export default Demo1;
