import AdviceSlip from './components/AdviceSlip'
import FavouriteSlipsList from './components/FavouriteSlipsList'

function AdviceSection({currentAdvice, favouriteAdvice, getMoreAdviceHandler, saveAdviceHandler}) {
  // console.log(currentAdvice)
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip"></section>
        <AdviceSlip currentAdvice={currentAdvice} getMoreAdviceHandler={getMoreAdviceHandler} saveAdviceHandler={saveAdviceHandler} />
      <section className="favourite-slips-list"></section>
        <FavouriteSlipsList favouriteAdvice={favouriteAdvice} />
    </section>
  )
}

export default AdviceSection
