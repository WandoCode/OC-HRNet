import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Employees from './pages/Employees'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="employees" element={<Employees />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
