import PublicationHistoryList from './PublicationHistoryList';

export default function ArtListItem({artItem: {id, title, artist, imageURL, publicationHistory}}) {
  return (
    <li>
      <div className='frame'>
        <img src={`https://boolean-uk-api-server.fly.dev${imageURL}`} />
        <h3>{title}</h3>
        <p>Artist: {artist}</p>
        <h4>Publication History:</h4>
        <PublicationHistoryList publicationHistory={publicationHistory} />
      </div>
    </li>
  )
}