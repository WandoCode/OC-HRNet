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

  const addEmployee = (formDatas) => {
    console.log(employees)
    const employee = createEmployee(formDatas)
    employees.push(employee)
    localStorage.setItem('employees', JSON.stringify(employees))
  }

  const getEmployees = () => employees

  return { addEmployee, getEmployees }
}

export default store
