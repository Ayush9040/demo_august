import { Suspense } from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'

import { MainRoutes } from './Constants/routes'

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {MainRoutes.map(({ Component, path }) => {
          return <Route element={<Component />} path={path} key={path} />
        })}
      </Routes>
    </Suspense>
  )
}

export default App
