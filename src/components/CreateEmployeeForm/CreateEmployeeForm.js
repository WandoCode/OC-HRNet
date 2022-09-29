import departmentsJSON from '../../assets/formDatas.json'
import store from '../../store/user'
import { useState } from 'react'

function CreateEmployeeForm() {
  const { departments, states } = departmentsJSON

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
    const storeInstance = store()

    storeInstance.addUser(inputs)
  }

  return (
    <form action="#" id="create-employee" onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        onChange={handleInputs}
        value={inputs.firstName}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        onChange={handleInputs}
        value={inputs.lastName}
      />

      <label htmlFor="birthDate">Date of Birth</label>
      <input
        id="birthDate"
        type="text"
        onChange={handleInputs}
        value={inputs.birthDate}
      />

      <label htmlFor="starteDate">Start Date</label>
      <input
        id="starteDate"
        type="text"
        onChange={handleInputs}
        value={inputs.starteDate}
      />

      <fieldset className="address">
        <legend>Address</legend>
        <label htmlFor="street">Street</label>
        <input
          id="street"
          type="text"
          onChange={handleInputs}
          value={inputs.street}
        />
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          onChange={handleInputs}
          value={inputs.city}
        />
        <label htmlFor="state">State</label>
        <select
          name="state"
          id="state"
          onChange={handleInputs}
          value={inputs.state}
        >
          {statesOptions}
        </select>
        <label htmlFor="zipCode">Zip Code</label>
        <input
          id="zipCode"
          type="number"
          onChange={handleInputs}
          value={inputs.zipCode}
        />
      </fieldset>
      <label htmlFor="department">Department</label>
      <select
        name="department"
        id="department"
        onChange={handleInputs}
        value={inputs.department}
      >
        {departmentsOptions}
      </select>
      <button type="submit">Save</button>
    </form>
  )
}

export default CreateEmployeeForm
