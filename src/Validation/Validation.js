import React from 'react'

const validation = (props) => {
  const minLength = 4;
  let lengthResponse = '';

  if (props.length < minLength) {
    lengthResponse = 'Sorry, text too short.'
  }
  else {
    lengthResponse = 'Hooray, text long enough!'
  }
  return (
    <div>
      <p>This is the bound length {props.length}. {lengthResponse}
      </p>
    </div>
  );
};

export default validation;