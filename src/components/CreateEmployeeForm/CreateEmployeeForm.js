import departmentsJSON from '../../assets/formDatas.json'
import store from '../../store/store'
import { useState } from 'react'
import Modale from '../modale/Modale'
import Dropdown from '../Dropdown/Dropdown'

function CreateEmployeeForm() {
  const storeInstance = store()

  const { departments, states } = departmentsJSON

  const [showModale, setShowModale] = useState(false)

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    starteDate: '',
    department: departments[0],
    street: '',
    city: '',
    state: states[0].name,
    zipCode: '',
  })

  const onHideModale = () => {
    setShowModale(false)
  }

  const statesChoices = states.map((state) => {
    return state.name
  })

  const handleInputs = (e) => {
    const val = e.target.value
    const key = e.target.name
    const newInputs = { ...inputs }
    newInputs[key] = val
    setInputs(newInputs)
    console.log(newInputs)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    storeInstance.addEmployee(inputs)

    setShowModale(true)
  }

  return (
    <>
      <form action="#" id="create-employee" onSubmit={handleSubmit}>
        <div className="inputs-wrapper">
          <div className="subfield">
            <label htmlFor="firstName" className="label">
              First Name
              <input
                type="text"
                id="firstName"
                onChange={handleInputs}
                value={inputs.firstName}
              />
            </label>

            <label htmlFor="lastName" className="label">
              Last Name
              <input
                type="text"
                id="lastName"
                onChange={handleInputs}
                value={inputs.lastName}
              />
            </label>

            <label htmlFor="birthDate" className="label">
              Date of Birth
              <input
                id="birthDate"
                type="date"
                onChange={handleInputs}
                value={inputs.birthDate}
              />
            </label>

            <label htmlFor="starteDate" className="label">
              Start Date
              <input
                id="starteDate"
                type="date"
                onChange={handleInputs}
                value={inputs.starteDate}
              />
            </label>

            <Dropdown
              choicesArray={departments}
              currValue={inputs.department}
              onChoice={handleInputs}
              name="department"
              label="Department"
            />
          </div>
          <fieldset>
            <legend>Address</legend>
            <label htmlFor="street" className="label">
              Street
              <input
                id="street"
                type="text"
                onChange={handleInputs}
                value={inputs.street}
              />
            </label>
            <label htmlFor="city" className="label">
              City
              <input
                id="city"
                type="text"
                onChange={handleInputs}
                value={inputs.city}
              />
            </label>
            <Dropdown
              choicesArray={statesChoices}
              currValue={inputs.state}
              onChoice={handleInputs}
              name="state"
              label="state"
            />

            <label htmlFor="zipCode" className="label">
              Zip Code
              <input
                id="zipCode"
                type="number"
                onChange={handleInputs}
                value={inputs.zipCode}
              />
            </label>
          </fieldset>
        </div>
        <button type="submit" className="button">
          Save
        </button>
      </form>
      {showModale && <Modale hideModale={onHideModale} />}
    </>
  )
}

export default CreateEmployeeForm
