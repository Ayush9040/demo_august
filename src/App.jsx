
import { Suspense, useEffect, useState } from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'

import MetaTags from './Components/MetaTags'

import { MainRoutes } from './Constants/routes'
import Pagenotfound from './Views/StaticSite/Components/404 Error'
// import ReactGA from 'react-ga'
import ReactGA from 'react-ga4';

import { useLocation } from 'react-router-dom';



const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  useEffect(() => {
    // const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    // if (hasAcceptedCookies === "true" || hasAcceptedCookies === true) {
    //   setIsVisible(false);
    //   ReactGA.initialize('G-KZMLSTPLP1', { debug: true })
    //   console.log("react GA from cookies ", ReactGA);
    //   ReactGA.pageview('/')
    // }
    ReactGA.initialize('G-KZMLSTPLP1')
    ReactGA.send('/')
  }, []);

  const handleAccept = () => {
    // sessionStorage.setItem('cookiesAccepted', 'true');
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
    ReactGA.initialize('G-KZMLSTPLP1')
    ReactGA.send('/')
  };
  const handleClose = () => {
    setIsVisible(false);
  };

  const clevertap = window?.clevertap;

  useEffect(() => {
    // Function to handle website exit event
    const handleWebsiteExit = () => {
      const currentPageUrl = window.location.href;

      // Trigger the CleverTap event for website exit
      clevertap.event.push("website_exit", {
        "Page_Url": currentPageUrl,
        "exit_timestamp": new Date().toISOString()
      });

      console.log("Website Exit Event Triggered");
    };

    // Add event listener for the 'beforeunload' event
    window.addEventListener('beforeunload', handleWebsiteExit);

    // Clean up when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleWebsiteExit);
    };
  }, [location]);  // Run effect when location changes (navigation)


  // App.js or index.js

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('../public/clevertap_sw') // The service worker file hosted in public folder
        .then(function (registration) {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function (error) {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);


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
      {/* {isVisible && <div className="cookie-banner">
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
      </div>} */}

    </Suspense>
  )
}

export default App
