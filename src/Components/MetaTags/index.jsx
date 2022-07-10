import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

import metaDataObj from '../../Constants/metaData.json'

const MetaTags = () => {
  const location = useLocation()
  return (
    <Helmet 
      meta={metaDataObj[location.pathname || ''] || []}
    />
  )
}

export default MetaTags