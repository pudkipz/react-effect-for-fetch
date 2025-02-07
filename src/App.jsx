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

  // for doing it the other way
  const fetchData2 = async (url, action) => {
    const response = await fetch(url)
    const data = await response.json()
    action(data)
  }

  

  const getMoreAdviceHandler = () => {
    // console.log('hello')
    // fetchData('https://api.adviceslip.com/advice', setCurrentAdvice)
    // setUpdateAdvice(!updateAdvice)
    // console.log(updateAdvice)
    fetchData('https://api.adviceslip.com/advice', setCurrentAdvice)
  }
  

  const [artData, setArtData] = useState(null);
  const [usersData, setUsersData] = useState(null);
  const [currentAdvice, setCurrentAdvice] = useState(null);
  const [favouriteAdvice, setFavouriceAdvice] = useState([])
  // const [updateAdvice, setUpdateAdvice] = useState(false)

  useEffect(() => fetchData('https://boolean-uk-api-server.fly.dev/art', setArtData), []);
  useEffect(() => fetchData('https://boolean-uk-api-server.fly.dev/pudkipz/contact', setUsersData), []);
  // useEffect(() => fetchData('https://api.adviceslip.com/advice', setCurrentAdvice), [updateAdvice])
  {if (!currentAdvice) fetchData('https://api.adviceslip.com/advice', setCurrentAdvice)}

  // {console.log(currentAdvice)}
  return (
    
    <div className="main-layout">
      {/* <p>currentAdvice.slip.advice</p> */}
      {artData && <ArtsSection artData={artData} />}
      {usersData && <UsersSection usersData={usersData} />}
      {currentAdvice &&
      <AdviceSection currentAdvice={currentAdvice} favouriteAdvice={favouriteAdvice} getMoreAdviceHandler={getMoreAdviceHandler}/>}
    </div>
  )
}

export default App
