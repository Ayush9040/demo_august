import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import authRoutes from './Constants/routes'

const Authentication = () => {
  return (
    <Routes>
      {authRoutes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  )
}

export default Authentication