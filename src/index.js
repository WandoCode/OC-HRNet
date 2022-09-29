import ReactDOM from 'react-dom/client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/redux-store'
import App from './app/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
