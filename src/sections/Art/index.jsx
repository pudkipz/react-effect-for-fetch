import ArtList from './components/ArtList'

function ArtsSection({artData}) {
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artData={artData}/>
      </div>
    </section>
  )
}

export default ArtsSection
