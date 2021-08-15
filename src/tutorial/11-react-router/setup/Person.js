import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  console.log(useParams());
  const [name, setName] = useState('default name');
  // Get value passed in path of Route component of Router using useParams [name does not matter as long as it is same on both sides]
  const { id } = useParams();
  useEffect(() => {
    // Make sure the id from useParams is an integer because it is set as string by useParams
    // Would have to fetch data again if not for locally available data
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      <Link to='/people' className='btn'>Back to People</Link>
    </div>
  );
};

export default Person;
