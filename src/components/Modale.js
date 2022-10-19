import closeSVG from '../assets/close.svg'

function Modale({ hideModale }) {
  const handleClose = () => {
    hideModale()
  }

  return (
    <section className="modale">
      <div className="modale-dialog">
        <button>
          <img src={closeSVG} alt="Close button" onClick={handleClose} />
        </button>

        <div>Employee Created!</div>
      </div>
    </section>
  )
}

export default Modale
