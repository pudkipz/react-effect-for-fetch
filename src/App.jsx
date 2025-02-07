import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
import { useEffect, useState } from 'react'



function App() {
  const fetchData = (url, action) => {
  // console.log({query})
    fetch(`${url}`)
      .then(response => response.json())
      .then(data => action(data));
      // .then(data => console.log(data));
      // console.log(artData)
  }
  

  const [artData, setArtData] = useState(null);
  const [usersData, setUsersData] = useState(null);
  const [currentAdvice, setCurrentAdvice] = useState('');
  const [favouriteAdvice, setFavouriceAdvice] = useState([])

  useEffect(() => fetchData('https://boolean-uk-api-server.fly.dev/art', setArtData), []);
  useEffect(() => fetchData('https://boolean-uk-api-server.fly.dev/pudkipz/contact', setUsersData), []);
  useEffect(() => fetchData('https://api.adviceslip.com/advice', setCurrentAdvice), [])  // ??

  // {console.log(currentAdvice)}
  return (
    
    <div className="main-layout">
      {artData && <ArtsSection artData={artData} />}
      {usersData && <UsersSection usersData={usersData} />}
      {currentAdvice && <AdviceSection currentAdvice={currentAdvice} favouriteAdvice={favouriteAdvice} />}
    </div>
  )
}

export default App
