import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import experienceRoutes from './Constants/routes'

const Experiences = () => {
  return (
    <Routes>
      {experienceRoutes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  )
}

export default Experiences