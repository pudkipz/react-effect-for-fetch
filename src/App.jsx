import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
import { useEffect, useState } from 'react'



function App() {
  const fetchData = (query, action) => {
  // console.log({query})
    fetch(`https://boolean-uk-api-server.fly.dev${query}`)
      .then(response => response.json())
      .then(data => action(data));
      // .then(data => console.log(data));
      // console.log(artData)
  }
  

  const [artData, setArtData] = useState(null);
  const [usersData, setUsersData] = useState(null);

  useEffect(() => fetchData('/art', setArtData), []);
  useEffect(() => fetchData('/pudkipz/contact', setUsersData), []);

  // {console.log(artData)}
  return (
    
    <div className="main-layout">
      {artData && <ArtsSection artData={artData} />}
      {usersData && <UsersSection usersData={usersData} />}
      <AdviceSection />
    </div>
  )
}

export default App
