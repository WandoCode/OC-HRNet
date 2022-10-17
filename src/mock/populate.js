import datas from './employees.json'
import store from '../store/store'

const populateDB = async () => {
  const storeInstance = store()

  await storeInstance.clear()

  datas.forEach((data) => {
    storeInstance.addEmployee(data)
  })
}

export default populateDB
