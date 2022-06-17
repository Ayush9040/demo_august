import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import museumRoutes from './Constants/routes'

const Museum = () => {
  return (
    <Routes>
      {museumRoutes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  )
}

export default Museum