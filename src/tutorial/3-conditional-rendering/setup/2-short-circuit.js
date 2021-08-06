import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  const [text, setText] = useState('This is some text');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <div>
      {/* <h1>Value1: {firstValue}</h1> */}
      {/* <h1>Value2: {secondValue}</h1> */}
      <h1>Tegveer Singh</h1>
      <button className='btn' onClick={() => { setIsError(!isError) }}>toggle error</button>
      {/* {isError && <h1>Error..</h1>} */}
      {isError ? <p>This is a paragraph</p> : <p>This is another paragraph</p>}
      {/* <h1>{text || 'Hello'}</h1> */}
      {/* {text && <h1>Hello Text</h1>} */}

    </div>
  );
};

export default ShortCircuit;
