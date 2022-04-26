import {
  Routes,
  Route,
} from 'react-router-dom'

import { MainRoutes } from './Constants/routes'

const App = () => {
  return (
    <Routes>
      {MainRoutes.map(({ Component, path }) => (
        <Route element={<Component />} path={path} key={path} />
      ))}
    </Routes>
  )
}

export default App
