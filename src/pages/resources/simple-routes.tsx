import React from 'react'
import { Routes, Route } from 'react-router-dom'

function ResourceRoutes() {
  return (
    <Routes>
      <Route path="/" element={<div>Resources Home</div>} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}

export default ResourceRoutes
