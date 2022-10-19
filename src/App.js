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
// TODO: mentor: Livrables. Quelles sont les 3 liens à envoyer (le 3eme est flou)
// TODO: mentor: Test pas faits. Grave? Encore le temps même si ma soutenance est vddi 20h?

// TODO: mentor: Okay avec localStorage?
// TODO: mentor: Refaire Lighthouse
