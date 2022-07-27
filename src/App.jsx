import axios from 'axios'
import { useEffect } from 'react'
import { Suspense } from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import MetaTags from './Components/MetaTags'

import { MainRoutes } from './Constants/routes'


const App = () => {

  const location = useLocation()

  useEffect(()=>{
    const res = axios.post(`https://cms-dev-be.theyogainstituteonline.org/v1/misc/slug${location?.pathname}`)
    console.log(res,'url-check')
  },[])


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MetaTags />
      <Routes>
        {MainRoutes.map(({ Component, path }) => {
          return <Route element={<Component />} path={path} key={path} />
        })}
      </Routes>
    </Suspense>
  )
}

export default App
