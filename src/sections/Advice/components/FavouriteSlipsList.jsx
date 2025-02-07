export default function FavouriteSlipsList({favouriteAdvice}) {
  return(
    <>
    <h3>Favourite Advice Slips</h3>
    <ul>
      {favouriteAdvice.map((advice, i) =>
        <li key={i}>{advice.advice}</li>)}
    </ul>
    </>
  )
}