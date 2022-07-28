import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

import metaDataObj from '../../Constants/metaData.json'

const MetaTags = () => {

  const location = useLocation()
  return (
    <Helmet
      title={metaDataObj[location.pathname || '']?.title || ''}
      meta={metaDataObj[location.pathname || '']?.metaData || []}
    />
  )
}

export default MetaTags