import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import donationRoutes from './Constants/routes'

const Donations = () => {
  return (
    <Routes>
      {donationRoutes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  )
}

export default Donations