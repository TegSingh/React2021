import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    // Each and every time window resize event takes place, the checkSize function will be called
    console.log('useEffect called');
    window.addEventListener('resize', checkSize);

    // Add a cleanup method to prevent new event listeners added after every render creating a memory leak
    // Can also be solved by an empty dependency array
    return () => {
      console.log('cleanup method called');
      window.removeEventListener('resize', checkSize);
    }
  })

  console.log(size);
  return (
    <React.Fragment>
      <h1>Window</h1>
      <h2>{size}px</h2>
    </React.Fragment>
  );
};

export default UseEffectCleanup;
