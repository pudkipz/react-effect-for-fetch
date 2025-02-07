import ArtListItem from './ArtListItem';

export default function ArtList({artData}) {
  return (
    <ul className='art-list'>
      {artData && artData.map((artItem, i) =>
        <ArtListItem artItem={artItem} key={i} />)}
    </ul>
  )
  
}