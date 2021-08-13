import React, { useState, useContext } from 'react';
import { data } from '../../../data'

// more components

const PersonContext = React.createContext();
// Two components:  Provider and Consumer



// Root component
const ContextAPI = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    })
  };

  // Set up the context variable in the root and then all the components will have access to the objects/props/context variables
  // Use this when multiple levels to avoid complication
  // Programs with low complexity can function well on prop drilling
  return (
    <React.Fragment>
      <PersonContext.Provider value={{ removePerson, people }}>
        <h3>Context APi / useContext </h3>
        <List />
      </PersonContext.Provider>
    </React.Fragment>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  console.log(mainData);
  return <React.Fragment>
    {mainData.people.map((person) => {
      return <SinglePerson key={person.id} {...person} />
    })}
  </React.Fragment>
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext)

  return <div className='item'>
    <h4>{id}</h4>
    <h4>{name}</h4>
    <button onClick={() => removePerson(id)}>Remove</button>
  </div>
}

export default ContextAPI;
