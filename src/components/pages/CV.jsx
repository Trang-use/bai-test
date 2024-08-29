import { useState } from 'react';
import '../../styles/index.scss';

function CV() {
  const [number, setNumber] = useState('');

  // Handle change in the input field
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {  // Allow only numeric values
      setNumber(value);
    }
  };

  // Function to get a random number between a given range
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Render divs based on the number entered
  const renderDivs = () => {
    const num = parseInt(number, 10);

    if (isNaN(num) || num <= 0) {
      return null;
    }

    // Generate an array of divs from 1 to the entered number
    return Array.from({ length: num }, (_, i) => {
      const randomTop = getRandomNumber(0, window.innerHeight - 60); // Adjust for circle height
      const randomLeft = getRandomNumber(0, window.innerWidth - 60); // Adjust for circle width

      return (
        <div
          key={i + 1}
          style={{
            position: 'absolute',
            top: `${randomTop}px`,
            left: `${randomLeft}px`,
            padding: '10px',
            backgroundColor: 'lightblue',
            fontSize: '20px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: '2px solid #000',
            textAlign: 'center',
            margin: '10px',
          }}
        >
          {i + 1}
        </div>
      );
    });
  };

  return (
    <div style={{ padding: '20px', position: 'relative' }}>
      <h1>Enter a Number</h1>
      <input
        type="text"
        value={number}
        onChange={handleInputChange}
        placeholder="Enter a number"
        style={{ padding: '5px', fontSize: '16px', width: '200px' }}
      />
      <div style={{ marginTop: '10px', position: 'relative' }}>
        {renderDivs()}
      </div>
    </div>
  );
}

export default CV;
