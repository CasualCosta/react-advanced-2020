import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ''
}
const Index = () => {
  const [name, setName] = useState()
  const [state, dispatch] = useReducer(reducer, defaultState)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name) {
      const newPerson = {id: crypto.randomUUID(), name }
      dispatch({ type: 'ADD_PERSON', payload: newPerson})
      setName('')
    } else {
      dispatch({type: 'NO_VALUE'} )
    }
  }

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'})
  }
  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input 
            type='text'
            value={name}
            onChange={((e)=> setName(e.target.value))}
          />
        </div>
        <button type='submit'>Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button onClick={(() => dispatch({type: 'REMOVE_PERSON', payload: person.id}))}>Remove</button>
          </div>
        )
      })}
    </>
  )
};

export default Index;
