import React, { useEffect, useState } from 'react'
import './style.scss'

const TimePeriodSelector = ({ onDecadeChange }) => {
  const [decade, setDecade] = useState(0)

  const highlighted = {
    borderRadius: '100px',
    border: '5px solid #CA4625',
  }

  const forward = () => {
    if (decade === 3) {
      setDecade(0)
    } else {
      setDecade(decade + 1)
    }
  }
  const backward = () => {
    if (decade === 0) {
      setDecade(3)
    } else {
      setDecade(decade - 1)
    }
  }

  const [decadeStyle, setDecadeStyle] = useState({
    option1: 'o-1',
    option2: 'o-75',
    option3: 'o-50',
    option4: 'o-25',
  })

  useEffect(() => {
    switch (decade) {
    case 0:
      setDecadeStyle({
        option1: 'o-1',
        option2: 'o-75',
        option3: 'o-50',
        option4: 'o-25',
      })
      break
    case 1:
      setDecadeStyle({
        option1: 'o-75',
        option2: 'o-1',
        option3: 'o-50',
        option4: 'o-25',
      })
      break
    case 2:
      setDecadeStyle({
        option1: 'o-75',
        option2: 'o-50',
        option3: 'o-1',
        option4: 'o-25',
      })
      break
    case 3:
      setDecadeStyle({
        option1: 'o-75',
        option2: 'o-50',
        option3: 'o-25',
        option4: 'o-1',
      })
      break
    default:
      setDecadeStyle({
        option1: 'o-1',
        option2: 'o-75',
        option3: 'o-50',
        option4: 'o-25',
      })
      break
    }

    if (onDecadeChange) onDecadeChange(decade)
  }, [decade])

  return (
    <div className="time-period-selector">
      <button className="back-btn" onClick={backward}></button>
      <div className="decades">
        <div
          className={`decades-option ${decadeStyle.option1}`}
          onClick={() => {
            setDecade(0)
          }}
          style={decade === 0 ? highlighted : {}}
        >
          <h4 style={decade === 0 ? { color: '#121212' } : {}}>
            1990
            <br />-<br />
            2000
          </h4>
        </div>
        <div
          className={`decades-option ${decadeStyle.option2}`}
          onClick={() => {
            setDecade(1)
          }}
          style={decade === 1 ? highlighted : {}}
        >
          <h4 style={decade === 1 ? { color: '#121212' } : {}}>
            2000
            <br />-<br />
            2010
          </h4>
        </div>
        <div
          className={`decades-option ${decadeStyle.option3}`}
          onClick={() => {
            setDecade(2)
          }}
          style={decade === 2 ? highlighted : {}}
        >
          <h4 style={decade === 2 ? { color: '#121212' } : {}}>
            2010
            <br />-<br />
            2020
          </h4>
        </div>
        <div
          className={`decades-option ${decadeStyle.option4}`}
          onClick={() => {
            setDecade(3)
          }}
          style={decade === 3 ? highlighted : {}}
        >
          <h4 style={decade === 3 ? { color: '#121212' } : {}}>
            2020
            <br />-<br />
            Onwards
          </h4>
        </div>
      </div>
      <button className="fwd-btn" onClick={forward}></button>
    </div>
  )
}

export default TimePeriodSelector
