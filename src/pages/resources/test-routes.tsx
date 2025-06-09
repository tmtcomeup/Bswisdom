import React from 'react'
import { Routes, Route } from 'react-router-dom'

function TestRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>Test Route</div>} />
    </Routes>
  )
}

export default TestRoutes
