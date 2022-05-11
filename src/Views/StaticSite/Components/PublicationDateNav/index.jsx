import React, { useState } from 'react'
import './style.scss'

const PublicationDateNav = ({ bold, setBold }) => {
  return (
    <>
      <div className="nav-container">
        <ul>
          <li
            style={
              bold === 1 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
            }
            onClick={() => setBold(1)}
          >
            2018......
          </li>
          <li
            style={
              bold === 2 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
            }
            onClick={() => setBold(2)}
          >
            2019|
          </li>
          <li
            style={
              bold == 3 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
            }
            onClick={() => setBold(3)}
          >
            2020|
          </li>
          <li
            style={
              bold == 4 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
            }
            onClick={() => setBold(4)}
          >
            2021|
          </li>
        </ul>
      </div>
    </>
  )
}

export default PublicationDateNav
