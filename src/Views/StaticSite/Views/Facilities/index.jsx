import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import facilityRoutes from './Constants/routes'

const Facility = () => {
  return (
    <Routes>
      {facilityRoutes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  )
}

export default Facility
