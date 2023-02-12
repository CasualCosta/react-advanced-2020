import React, { useState } from 'react';
import {data} from '../../../data'

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
  }

  return <>
    <h2>prop drilling</h2>;
    <People people={people} removePerson={removePerson} />
  </>
};

const People = ({people, removePerson}) => {
  return people.map((person) => {
    return <Person person={person} removePerson={removePerson} />
  })
}

const Person = ({person, removePerson}) => {
  return (
  <div className='item' key={person.id}>
    <h4>{person.name}</h4>
    <button onClick={() => removePerson(person.id)}>remove</button>
  </div>)
}

export default PropDrilling;
