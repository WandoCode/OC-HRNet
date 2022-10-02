import { useState } from 'react'
import arrowUp from '../../assets/caret-up.svg'
import arrowDown from '../../assets/caret-down.svg'

function Dropdown({ choicesArray, onChoice, name, label }) {
  const [openMenu, setOpenMenu] = useState(false)
  const [currValue, setCurrValue] = useState(choicesArray[0])

  const handleInput = (e) => {
    onChoice(e)
    setCurrValue(e.target.value)
    setOpenMenu(false)
  }

  const choicesOptions = choicesArray.map((choice) => {
    return (
      <label htmlFor={choice} key={choice} className="dropdown__label">
        <input
          type="radio"
          name={name}
          id={choice}
          onChange={handleInput}
          value={choice}
        />
        {choice}
      </label>
    )
  })

  const handleBtnClick = () => {
    setOpenMenu(openMenu ? false : true)
  }

  return (
    <div className="dropdown label">
      {label}
      <button
        type="button"
        onClick={handleBtnClick}
        className="dropdown__selected"
      >
        {currValue}{' '}
        {openMenu ? (
          <img src={arrowUp} alt="arrow up" />
        ) : (
          <img src={arrowDown} alt="arrow down" />
        )}
      </button>
      {openMenu && <div className="dropdown-options">{choicesOptions}</div>}
    </div>
  )
}

export default Dropdown
