import departmentsJSON from '../../assets/formDatas.json'
import store from '../../store/store'
import { useState } from 'react'
import Modale from '../modale/Modale'

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

  const departmentsOptions = departments.map((department) => {
    return <option key={department}>{department}</option>
  })

  const statesOptions = states.map((state) => {
    return <option key={state.name}>{state.name}</option>
  })

  const handleInputs = (e) => {
    const val = e.target.value
    const key = e.target.id

    const newInputs = { ...inputs }
    newInputs[key] = val
    setInputs(newInputs)
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
            <label htmlFor="firstName">
              First Name
              <input
                type="text"
                id="firstName"
                onChange={handleInputs}
                value={inputs.firstName}
              />
            </label>

            <label htmlFor="lastName">
              Last Name
              <input
                type="text"
                id="lastName"
                onChange={handleInputs}
                value={inputs.lastName}
              />
            </label>

            <label htmlFor="birthDate">
              Date of Birth
              <input
                id="birthDate"
                type="date"
                onChange={handleInputs}
                value={inputs.birthDate}
              />
            </label>

            <label htmlFor="starteDate">
              Start Date
              <input
                id="starteDate"
                type="date"
                onChange={handleInputs}
                value={inputs.starteDate}
              />
            </label>
            <label htmlFor="department">
              Department
              <select
                name="department"
                id="department"
                onChange={handleInputs}
                value={inputs.department}
              >
                {departmentsOptions}
              </select>
            </label>
          </div>
          <fieldset>
            <legend>Address</legend>
            <label htmlFor="street">
              Street
              <input
                id="street"
                type="text"
                onChange={handleInputs}
                value={inputs.street}
              />
            </label>
            <label htmlFor="city">
              City
              <input
                id="city"
                type="text"
                onChange={handleInputs}
                value={inputs.city}
              />
            </label>
            <label htmlFor="state">
              State
              <select
                name="state"
                id="state"
                onChange={handleInputs}
                value={inputs.state}
              >
                {statesOptions}
              </select>
            </label>
            <label htmlFor="zipCode">
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
        <button type="submit">Save</button>
      </form>
      {showModale && <Modale hideModale={onHideModale} />}
    </>
  )
}

export default CreateEmployeeForm
