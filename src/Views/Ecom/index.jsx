import { Routes, Route } from 'react-router-dom'

import PageView from './Views/PageView'

const Ecom = () => {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={<PageView />}
        />
      </Routes>
    </>
  )
}

export default Ecom
