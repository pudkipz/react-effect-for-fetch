import UsersListItem from './UsersListItem';

export default function UsersList({usersData}) {
  return (
    <ul className='users-list'>
      {usersData && usersData.map((usersItem, i) =>
              <UsersListItem usersItem={usersItem} key={i} />)}

    </ul>
  )
}