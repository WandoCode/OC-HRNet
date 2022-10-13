import Table from 'plugin-table-oc'
import store from '../store/store'
import dayjs from 'dayjs'
function Employees() {
  const myStore = store()
  const employees = myStore.getEmployees()

  const formatEmployeesObj = () => {
    return employees.map((employee) => {
      return {
        firstName: employee.firstName,
        lastName: employee.lastName,
        startDate: dayjs(employee.startDate).format('DD/MM/YYYY'),
        department: employee.department,
        birthDate: dayjs(employee.birthDate).format('DD/MM/YYYY'),
        street: employee.address.street,
        city: employee.address.city,
        state: employee.address.state,
        zipCode: employee.address.zipCode,
      }
    })
  }

  const headers = {
    firstName: 'First Name',
    lastName: 'Last Name',
    startDate: 'Start Date',
    department: 'Department',
    birthDate: 'Date of Birth',
    street: 'Street',
    city: 'City',
    state: 'State',
    zipCode: 'Zip Code',
  }

  return (
    <main className="currentEmployees">
      <h2>Current Employees</h2>
      <div className="section">
        <Table headers={headers} datas={formatEmployeesObj()} />
      </div>
    </main>
  )
}

export default Employees
