import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const clearItem = (id) => setPeople(people.filter(person => person.id !== id))
  
  return(
    <>
      {
        people.map((person) => {
          const {id, name} = person
          return <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => clearItem(id)}>Clear Item</button>
          </div>
        })
      }
      <button className='btn' onClick={() => setPeople([])}>clear list</button>
    </>
  ) 
};

export default UseStateArray;
