import React from 'react'
import { Routes, Route } from 'react-router-dom'

function MinimalResourceRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>Resources</div>} />
    </Routes>
  )
}

export default MinimalResourceRoutes
