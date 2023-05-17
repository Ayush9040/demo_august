import React from 'react'
import './style.scss'
const PublicationDateNav = ({ bold, setBold, handleYearlyData }) => {
  return (
    <>
      <div className="nav-container">
        <ul>
          <li
            style={
              bold === 7 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
            }
            onClick={() => {
              setBold(7)
              handleYearlyData && handleYearlyData(2023)
            }
            }
          >
            2023|
          </li>
          <li
            style={
              bold === 6 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
            }
            onClick={() => {
              setBold(6)
              handleYearlyData && handleYearlyData(2022)
            }
            }
          >
            2022|
          </li>
          <li
            style={
              bold === 5 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
            }
            onClick={() => {
              setBold(5)
              handleYearlyData && handleYearlyData(2021)
            }
            }
          >
            2021|
          </li>
          <li
            style={
              bold === 4 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
            }
            onClick={() => {
              handleYearlyData && handleYearlyData(2020)
              setBold(4)
            }}
          >
            2020|
          </li>
          <li
            style={
              bold === 3 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
            }
            onClick={() => {
              handleYearlyData && handleYearlyData(2019)
              setBold(3)
            }}
          >
            2019|
          </li>
          <li
            style={
              bold == 2 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
            }
            onClick={() => {
              handleYearlyData && handleYearlyData(2018)
              setBold(2)
            }}
          >
            2018|
          </li>
          <li
            style={
              bold == 1 ? { fontWeight: 'bold' } : { fontWeight: 'normal' }
            }
            onClick={() => {
              handleYearlyData && handleYearlyData(2017)
              setBold(1)
            }}
          >
            2017
          </li>
        </ul>
      </div>
    </>
  )
}
export default PublicationDateNav