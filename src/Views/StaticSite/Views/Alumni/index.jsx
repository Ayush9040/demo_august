import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'

import alumniRoutes from './Constants/routes'

const Alumni = () => {

  return (
    <Routes>
      {alumniRoutes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  )
}

export default Alumni