
import { Suspense } from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'

import MetaTags from './Components/MetaTags'

import { MainRoutes } from './Constants/routes'
import Pagenotfound from './Views/StaticSite/Components/404 Error'
import ReactGA from 'react-ga'


const App = () => {

  ReactGA.initialize('374034779')
  ReactGA.pageview('/')

  return (
    <Suspense fallback={<div className='global-loader' >Loading...</div>} >
      <MetaTags />
      <Routes>
        {MainRoutes.map(({ Component, path }) => {
          return <Route element={<Component />} path={path} key={path} />
        })}
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </Suspense>
  )
}

export default App
