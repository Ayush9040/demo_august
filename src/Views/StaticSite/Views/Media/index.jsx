import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'

import mediaRoutes from './Constants/routes'

const Alumni = () => {

  return (
    <Routes>
      {mediaRoutes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  )
}

export default Alumni