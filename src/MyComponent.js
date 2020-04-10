import React from 'react';

export default function MyComponent({ name = 'Nonna', handler }) {
  let buttonText = 'Click Here!';


  return (
    <>
      <h1>Hello {name}!</h1>
      <button onClick={() => handler(buttonText)}>{buttonText}</button>
    </>
  )
}
