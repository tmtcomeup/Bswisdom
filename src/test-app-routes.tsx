import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TestRoutes from './pages/resources/test-routes'

function TestAppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>Test Home</div>} />
      <Route path="/resources/*" element={<TestRoutes />} />
    </Routes>
  )
}

export default TestAppRoutes
