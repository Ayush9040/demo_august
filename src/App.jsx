
import { Suspense } from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'

import MetaTags from './Components/MetaTags'

import { MainRoutes } from './Constants/routes'
import Home from './Views/StaticSite/Views/Home'


const App = () => {

  return (
    <Suspense  fallback={ <div className='global-loader' >Loading...</div> }  >
      <MetaTags />
      <Routes>
        {MainRoutes.map(({ Component, path }) => {
          return <Route element={<Component />} path={path} key={path} />
        })}
        <Route path='*' element={ <Home/>} />
      </Routes>
    </Suspense>
  )
}

export default App
