
import {useEffect, useState} from 'react';
import ArtListItem from './ArtListItem';


export default function ArtList() {
  const fetchAllArt = () => {
    fetch(`https://boolean-uk-api-server.fly.dev/art`)
      .then(response => response.json())
      .then(data => setArtData(data));
      // .then(data => console.log(data));
  }

  const [artData, setArtData] = useState(null);

  useEffect(fetchAllArt, [])

  return (
    <ul className='art-list'>
      {/* {console.log(artData)} */}
      {artData && artData.map((artItem, i) =>
        <ArtListItem artItem={artItem} key={i} />
      )
      }
    {/* {artData && <ArtListItem artData[0] />} */}
    </ul>
  )
  
}