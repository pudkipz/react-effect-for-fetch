export default function AdviceSlip({currentAdvice}) {
  // console.log(currentAdvice.slip.advice)
  return (
    <>
      <h3>Some Advice</h3>
      <p>{currentAdvice.slip.advice}</p>
      <button>Get More Advice</button>
      <button>Save to Favourites</button>
    </>

  )
}