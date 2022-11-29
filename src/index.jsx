import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import { configureStore } from './Redux/store'

import './index.scss'

import App from './App'

import './Utils/interceptors'
import { isAuthorized } from './Utils/localStorage'

export const store = configureStore({})

if (isAuthorized()) {
  store.dispatch({
    type: 'auth/FETCH_USER_DATA'
  })
  store.dispatch({
    type:'shop/GET_ACTIVE_CART'
  })
}

store.dispatch({
  type: 'locationAcions/GET_LOCATION'
})



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  </Provider>
)