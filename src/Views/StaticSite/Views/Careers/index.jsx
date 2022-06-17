import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import careerRoutes from './Constants/routes'

const Career = () => {
  return (
    <Routes>
      {careerRoutes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  )
}

export default Career