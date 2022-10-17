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

  const createEmployee = (formDatas) => {
    const {
      firstName,
      lastName,
      birthDate,
      startDate,
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
      startDate,
      department,
      address: {
        street,
        city,
        state,
        zipCode,
      },
    }
  }

  const addEmployee = (formDatas) => {
    const employee = createEmployee(formDatas)
    employees.push(employee)
    localStorage.setItem('employees', JSON.stringify(employees))
  }

  const getEmployees = () => employees

  const clear = async () => {
    await localStorage.removeItem('employees')
  }

  return { addEmployee, getEmployees, clear }
}

export default store
