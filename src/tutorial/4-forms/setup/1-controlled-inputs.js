import React, { useState } from 'react';


const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, email);
    if (firstName && email) {
      console.log('Submit the form');
      const person = { id: new Date().getTime(), firstName, email };
      setPeople([...people, person]);
      setFirstName('');
      setEmail('');
      console.log(person);
    } else {
      console.log('Empty values');
    }
  };

  return (
    <React.Fragment>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor="firstName">Name: </label>
            <input type='text' id='firstName' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className='form-control'>
            <label htmlFor="secondName">Email: </label>
            <input type='text' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type='submit'>Add Person</button>
        </form>
        {
          people.map((person) => {
            const { id, firstName, email } = person;
            return (<div className='item' key={id}>
              <h4>{firstName}</h4>
              <h4>{email}</h4>
            </div>);
          })
        }
      </article>
    </React.Fragment>
  );
};

export default ControlledInputs;
