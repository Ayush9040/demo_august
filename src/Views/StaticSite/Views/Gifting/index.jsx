import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import giftingRoutes from './Constants/routes'

const Gift = () => {
  return (
    <Routes>
      {giftingRoutes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  )
}

export default Gift
