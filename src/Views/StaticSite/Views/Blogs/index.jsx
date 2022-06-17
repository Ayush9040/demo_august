import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'

import blogRoutes from './Constants/routes'

const Blogs = () => {

  return (
    <Routes>
      {blogRoutes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  )
}

export default Blogs