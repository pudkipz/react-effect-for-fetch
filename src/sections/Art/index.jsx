import ArtList from './components/ArtList'

function ArtsSection({artData}) {
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container"></div>
      <ArtList artData={artData}/>
    </section>
  )
}

export default ArtsSection
