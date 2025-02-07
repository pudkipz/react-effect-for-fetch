import UsersList from './components/UsersList'

function UsersSection({usersData}) {
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container"></div>
      <UsersList usersData={usersData}/>
    </section>
  )
}

export default UsersSection
