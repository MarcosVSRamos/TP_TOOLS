import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import DistanceCalculator from '../pages/DistanceCalculator'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/distancia" element={<DistanceCalculator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
