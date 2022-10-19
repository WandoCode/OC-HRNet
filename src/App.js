import Router from './Router'
import './style/index.css'
import populateDB from './mock/populate'
import { useEffect } from 'react'

function App() {
  let dev = process.env.REACT_APP_DEV === 'true'

  useEffect(() => {
    if (dev) {
      populateDB()
    }
  }, [])

  return <Router />
}

export default App
