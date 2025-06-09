import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MinimalResourceRoutes from './pages/resources/minimal-routes'

function MinimalAppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/resources/*" element={<MinimalResourceRoutes />} />
    </Routes>
  )
}

export default MinimalAppRoutes
