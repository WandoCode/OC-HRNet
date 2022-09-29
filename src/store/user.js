const store = () => {
  let employeesEntry = localStorage.getItem('employees')

  let employees
  if (employeesEntry && employeesEntry.length > 0) {
    employees = JSON.parse(employeesEntry)
  } else {
    localStorage.setItem('employees', JSON.stringify([]))
    employees = []
  }

  const createId = () => employees.length

  const createUser = (formDatas) => {
    const {
      firstName,
      lastName,
      birthDate,
      starteDate,
      department,
      street,
      city,
      state,
      zipCode,
    } = formDatas

    return {
      id: createId(),
      firstName,
      lastName,
      birthDate,
      starteDate,
      department,
      address: {
        street,
        city,
        state,
        zipCode,
      },
    }
  }

  const addUser = (formDatas) => {
    console.log(employees)
    const user = createUser(formDatas)
    employees.push(user)
    localStorage.setItem('employees', JSON.stringify(employees))
  }

  return { addUser }
}

export default store
