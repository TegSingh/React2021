import React, { useState, useReducer } from 'react';
import Modal from './Modal';
// import { data } from '../../../data';
import { reducer } from './reducer'

const defaultState = {
  people: [],
  showModal: false,
  modalContent: 'hello world'
}

// This file is the entry point inside any folder
const Index = () => {

  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }
      // Dispatching the action which here is TESTING
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      // If no value for name has been set
      dispatch({ type: 'NO_VALUE' })
    }
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }
  return (
    <React.Fragment>
      {state.showModal && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
          <button type='submit'>Add</button>
        </div>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button onClick={() => { dispatch({ type: 'REMOVE_ITEM', payload: person.id }) }}>Remove</button>
          </div>
        )
      })}
    </React.Fragment>
  );
};

export default Index;
