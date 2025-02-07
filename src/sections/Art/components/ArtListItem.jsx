import PublicationHistoryList from './PublicationHistoryList';

export default function ArtListItem({artItem: {id, title, artist, imageURL, publicationHistory}}) {
  return (
    <li>
      <div className='frame'>
        {/* <img></img> */}
        <h3>{title}</h3>
        <p>Artist: {artist}</p>
        <h4>Publication History:</h4>
        <PublicationHistoryList publicationHistory={publicationHistory} />
      </div>
    </li>
  )
}