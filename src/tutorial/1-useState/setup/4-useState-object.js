import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Tegveer',
    age: 20,
    message: 'random message',
  });

  const [name, setName] = useState('Tegveer');
  const [age, setAge] = useState(20);
  const [message, setMessage] = useState('Random Message');

  const changeMessage = () => {
    setMessage('Hello world');
  }
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>Change Message</button>
    </React.Fragment>
  );
}
  ;

export default UseStateObject;
