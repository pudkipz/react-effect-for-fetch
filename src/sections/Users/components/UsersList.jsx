import {useEffect, useState} from 'react';
import UsersListItem from './UsersListItem';

export default function UsersList() {
  const fetchAllUsers = () => {
    fetch(`https://boolean-uk-api-server.fly.dev/pudkipz/contact`)
      .then(response => response.json())
      .then(data => setUsersData(data));
      // .then(data => console.log(data));
  }

  const [usersData, setUsersData] = useState(null);

  useEffect(fetchAllUsers, [])
  
  return (
    <ul className='users-list'>
      {usersData && usersData.map((usersItem, i) =>
              <UsersListItem usersItem={usersItem} key={i} />)}

    </ul>
  )
}