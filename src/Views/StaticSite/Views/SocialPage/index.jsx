import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import socialResponsibilityRoutes from './Constants/routes'

const SoicalPage = () => {
  return (
    <Routes>
      {socialResponsibilityRoutes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  )
}

export default SoicalPage