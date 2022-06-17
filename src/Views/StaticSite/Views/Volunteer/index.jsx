import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import volunteerRoutes from './Constants/routes'

const VolunteerPage = () => {
  return (
    <Routes>
      {volunteerRoutes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  )
}

export default VolunteerPage