import closeSVG from '../../assets/close.svg'

function Modale({ hideModale }) {
  const handleClose = () => {
    hideModale()
  }

  return (
    <section onClick={handleClose}>
      <div>
        <img src={closeSVG} alt="Close button" />
        <div>Employee Created!</div>
      </div>
    </section>
  )
}

export default Modale
