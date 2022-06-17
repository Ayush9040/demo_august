import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import courseRoutes from './Constants/routes'

const Course = () => {
  return (
    <Routes>
      {courseRoutes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  )
}

export default Course