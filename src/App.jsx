import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const fetchData = (query, action) => {
    console.log('hello')
      fetch(`https://boolean-uk-api-server.fly.dev${query}`)
        .then(response => response.json())
        .then(data => action(data));
        // .then(data => console.log(data));
    }

  const [usersData, setUsersData] = useState(null);

  useEffect((() => fetchData('/pudkipz/contact'), setUsersData), [])

  return (
    <div className="main-layout">
      <ArtsSection />
      {usersData && <UsersSection usersData={usersData} />}
      <AdviceSection />
    </div>
  )
}

export default App
