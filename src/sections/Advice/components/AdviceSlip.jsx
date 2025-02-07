export default function AdviceSlip({currentAdvice, getMoreAdviceHandler, saveAdviceHandler}) {
  return (
    <>
      <h3>Some Advice</h3>
      <p>{currentAdvice.slip.advice}</p>
      <button onClick={getMoreAdviceHandler}>Get More Advice</button>
      <button onClick={() => saveAdviceHandler(currentAdvice)}>Save to Favourites</button>
    </>

  )
}