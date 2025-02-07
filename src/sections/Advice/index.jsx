import AdviceSlip from './components/AdviceSlip'
import FavouriteSlipsList from './components/FavouriteSlipsList'

function AdviceSection({currentAdvice, favouriteAdvice}) {
  // console.log(currentAdvice)
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip"></section>
        <AdviceSlip currentAdvice={currentAdvice} />
      <section className="favourtite-slips-list"></section>
        <FavouriteSlipsList favouriteAdvice={favouriteAdvice} />
    </section>
  )
}

export default AdviceSection
