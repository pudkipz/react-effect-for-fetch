export default function AdviceSlip({currentAdvice, getMoreAdviceHandler}) {
  // console.log(currentAdvice.slip.advice)
  return (
    <>
      <h3>Some Advice</h3>
      <p>{currentAdvice.slip.advice}</p>
      <button onClick={getMoreAdviceHandler}>Get More Advice</button>
      <button>Save to Favourites</button>
    </>

  )
}