import departmentsJSON from '../../assets/formDatas.json'

function CreateForm() {
  const { departments, states } = departmentsJSON

  const departmentsOptions = departments.map((department) => {
    return <option key={department}>{department}</option>
  })

  const statesOptions = states.map((state) => {
    return <option key={state.name}>{state.name}</option>
  })

  return (
    <form action="#" id="create-employee">
      <label htmlFor="first-name">First Name</label>
      <input type="text" id="first-name" />

      <label htmlFor="last-name">Last Name</label>
      <input type="text" id="last-name" />

      <label htmlFor="date-of-birth">Date of Birth</label>
      <input id="date-of-birth" type="text" />

      <label htmlFor="start-date">Start Date</label>
      <input id="start-date" type="text" />

      <fieldset className="address">
        <legend>Address</legend>
        <label htmlFor="street">Street</label>
        <input id="street" type="text" />
        <label htmlFor="city">City</label>
        <input id="city" type="text" />
        <label htmlFor="state">State</label>
        <select name="state" id="state">
          {statesOptions}
        </select>
        <label htmlFor="zip-code">Zip Code</label>
        <input id="zip-code" type="number" />
      </fieldset>
      <label htmlFor="department">Department</label>
      <select name="department" id="department">
        {departmentsOptions}
      </select>
      <button type="submit">Save</button>
    </form>
  )
}

export default CreateForm
