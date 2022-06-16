import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'

import publicaionRoutes from './Constants/route'

const Publication = () => {
  return (
    <Routes>
      {publicaionRoutes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  )
}

export default Publication