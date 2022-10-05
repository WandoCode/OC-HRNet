import Table from '../components/Table/Table'
import store from '../store/store'
function Employees() {
  const myStore = store()
  const employees = myStore.getEmployees()

  const formatEmployeesObj = () => {
    return employees.map((employee) => {
      return
    })
  }
  console.log(employees)
  return (
    <main>
      <h2>Current Employees</h2>
      <div className="section">
        <Table headers={true} datas={employees} />
      </div>
    </main>
  )
}

export default Employees
