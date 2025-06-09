import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ResourceRoutes from './pages/resources/simple-routes'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/resources/*" element={<ResourceRoutes />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}

export default AppRoutes
