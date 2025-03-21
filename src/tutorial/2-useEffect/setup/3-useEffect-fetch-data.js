import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  const gethUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
  }

  useEffect(() => {
    gethUsers()
  }, [])

  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const {id, login, avatar_url, html_url} = user
          return(
            <li key={id}>
              <img src={avatar_url} alt={html_url} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>{login}</a>
              </div>
            </li>
          )
        })

        }
      </ul>
    </>
  )
};

export default UseEffectFetchData;
