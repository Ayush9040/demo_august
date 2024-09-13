
import { Suspense, useEffect, useState } from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'

import MetaTags from './Components/MetaTags'

import { MainRoutes } from './Constants/routes'
import Pagenotfound from './Views/StaticSite/Components/404 Error'
import ReactGA from 'react-ga'


const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (hasAcceptedCookies) {
      setIsVisible(false);
      ReactGA.initialize('374034779')
      ReactGA.pageview('/')
    }
  }, []);

  const handleAccept = () => {
    // sessionStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
    ReactGA.initialize('374034779')
    ReactGA.pageview('/')
  };
  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <Suspense fallback={<div className='global-loader' >Loading...</div>} >
      <MetaTags />
      <Routes>
        {MainRoutes.map(({ Component, path }) => {
          return <Route element={<Component />} path={path} key={path} />
        })}
        <Route path='*' element={<Pagenotfound />} />
      </Routes>

      {/* badge to accept cookies */}
      {isVisible && <div className="cookie-banner">
        <p>
          We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
        </p>
        <div>
          <button onClick={handleClose} className="cookie-button cancel-cookie">
            Close
          </button>
          <button onClick={handleAccept} className="cookie-button">
            Accept
          </button></div>
      </div>}

    </Suspense>
  )
}

export default App
