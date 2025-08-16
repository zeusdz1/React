import React from 'react';

const StyledButton = () => {
  // Create your variables here
  const isDisabled = false; // Change this to true to see the button disabled

  // Create your style objects here
  const headingStyle = {
    textAllign: 'center',
    color: 'white',
    backgroundColor: 'teal',
    padding: '10px',
  };

  // Style object for button
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'blue',
    color: 'white',
    border: '2px solid darkblue',
    borderRadius: '8px',
    cursor: isDisabled ? 'not-allowed' : 'pointer'
  };

  return (
    <div>
      {/* Add your styled heading here */}
      <h1 style={headingStyle}>This is a Styled Heading</h1>
      
      {/* Add your styled and conditionally disabled button here */}
      <button
      style={buttonStyle}
      disabled={isDisabled}
      className="my-button"
      >
        {isDisabled ? 'Disabled' : 'Click Me'}
        </button>
    </div>
  );
};

export default StyledButton;