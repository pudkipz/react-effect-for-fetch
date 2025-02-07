
export default function PublicationHistoryList({publicationHistory}) {
  return (
    <ul>
      {publicationHistory.map((pubItem, i) =>
              <li key={i}>{pubItem}</li>
            )
      }
    </ul>
  )
}