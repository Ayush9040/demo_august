import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'

import aboutRoutes from './Constants/routes'

const About = () => {
  console.log(aboutRoutes)
  return (
    <Routes>
      {aboutRoutes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  )
}

export default About