import { useLocation } from 'react-router-dom'

import { getEcomRoute } from './pageView.Uitils'

const PageView = () => {
  const location = useLocation()
  const ecomRoute = getEcomRoute(location)

  if(!ecomRoute){
    console.log('Show error page')
  }

  return (
    <div>
      <h2>
        Page View
      </h2> 
      <h3>
        EcomRoute: { ecomRoute }
      </h3>
    </div>
  )
}

export default PageView