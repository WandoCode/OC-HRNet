import { useState } from 'react'
import arrowUp from '../assets/caret-up.svg'
import arrowDown from '../assets/caret-down.svg'
import OutsideClickHandler from 'react-outside-click-handler'
function Dropdown({ choicesArray, onChoice, name }) {
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
    <OutsideClickHandler
      display="contents"
      onOutsideClick={() => {
        setOpenMenu(false)
      }}
    >
      <div className="dropdown">
        <button
          type="button"
          onClick={handleBtnClick}
          className="dropdown__selected"
          id={name}
          name={name}
        >
          {currValue}
          {openMenu ? (
            <img src={arrowUp} alt="arrow up" />
          ) : (
            <img src={arrowDown} alt="arrow down" />
          )}
        </button>
        {openMenu && <div className="dropdown-options">{choicesOptions}</div>}
      </div>
    </OutsideClickHandler>
  )
}

export default Dropdown
