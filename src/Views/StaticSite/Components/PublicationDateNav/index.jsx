import React from 'react'
import './style.scss'

const PublicationDateNav = ({ bold, setBold }) => {
  return (
    <>
      <div className="nav-container">
        <ul>
          <li
            style={
              bold === 5 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
            }
            onClick={() => setBold(5)}
          >
            2021|
          </li>
          <li
            style={
              bold === 4 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
            }
            onClick={() => setBold(4)}
          >
            2020|
          </li>
          <li
            style={
              bold === 3 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
            }
            onClick={() => setBold(3)}
          >
            2019|
          </li>
          <li
            style={
              bold == 2 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
            }
            onClick={() => setBold(2)}
          >
            2018|
          </li>
          <li
            style={
              bold == 1 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
            }
            onClick={() => setBold(1)}
          >
            2017
          </li>
        </ul>
      </div>
    </>
  )
}

export default PublicationDateNav
