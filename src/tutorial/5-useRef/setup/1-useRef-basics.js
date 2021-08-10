import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  // Reference to object its made to point to [does not trigger re render]
  const refContainer = useRef(null);
  const divContainer = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <React.Fragment>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          <button type='submit'>Submit</button>
        </div>
      </form>
      <div ref={divContainer}>Hello World</div>
    </React.Fragment>
  );
};

export default UseRefBasics;
