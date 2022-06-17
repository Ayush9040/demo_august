import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import factsRoutes from './Constants/routes'

const Facts = () => {
  return (
    <Routes>
      {factsRoutes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  )
}

export default Facts
