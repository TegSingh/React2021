import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  }

  const complexIncrease = () => {
    console.log(value);
    setTimeout(() => {
      setValue((value) => {
        return value + 1;
      });
    }, 2000);

  };

  return (
    <React.Fragment>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value + 1)}>Increase</button>
        <button className='btn' onClick={() => setValue(value - 1)}>Decrease</button>
        <button className='btn' onClick={reset}>Reset</button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>More Complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>Increase Later</button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;
