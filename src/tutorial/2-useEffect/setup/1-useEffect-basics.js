import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0);

  // Whatever functionality is placed here, it will run after every render
  // Second argument is the dependency array [Leave empty to only run on initial render]
  useEffect(() => {
    if (value >= 0) {
      console.log('Hello World');
      document.title = `New Messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log('Second use effect');
  }, []);

  console.log('Render Component');

  return (
    <React.Fragment>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>Click Me</button>
    </React.Fragment>
  );
};

export default UseEffectBasics;
