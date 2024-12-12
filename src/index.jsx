import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

import { configureStore } from './Redux/store'

import './index.scss'

import App from './App'

import './Utils/interceptors'
import { isAuthorized } from './Utils/localStorage'
import { CleverTapProvider } from './CleverTap/CleverTapProvider'
// import ReactGA from 'react-ga'
import ReactGA from 'react-ga4';
import { ga4Id } from './Constants/appSettings'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

export const store = configureStore({})

if (isAuthorized()) {
  store.dispatch({
    type: 'auth/FETCH_USER_DATA'
  })
  store.dispatch({
    type: 'shop/GET_ACTIVE_CART'
  })
}

store.dispatch({
  type: 'locationAcions/GET_LOCATION'
})

const RemoveTrailingSlash = () => {
  const location = useLocation();

  if (location.pathname.endsWith("/") && location.pathname !== "/") {
    const newPath = location.pathname.slice(0, -1);
    return <Navigate to={newPath} replace={true} />;
  }

  return null;
};

const root = ReactDOM.createRoot(document.getElementById('root'))
ReactGA.initialize(ga4Id)
ReactGA.send('/')
// ReactGA.initialize('5158237522')
// ReactGA.pageview('/')
root.render(
  <Provider store={store}>
    <StrictMode>
      <Router>
        <RemoveTrailingSlash />
        <CleverTapProvider>
          <App />
        </CleverTapProvider>
      </Router>
    </StrictMode>
  </Provider>
)