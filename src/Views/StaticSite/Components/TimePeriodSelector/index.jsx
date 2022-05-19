import React, { useEffect, useState, useMemo } from 'react'
import { useLocation, useNavigate, createSearchParams, useSearchParams } from 'react-router-dom'
import './style.scss'

const TimePeriodSelector = ({ dateRange, onDecadeChange }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const rangeGroupLength = 4
  const [rangeGroupIndex, setRangeGroupIndex] = useState(0)
  const [selectedRange, setSelectedRange] = useState(0)

  useEffect(() => {
    const range = searchParams.get('range')
    const numRange = Number(range)
    const validRange = numRange >= dateRange.length ? 0 : numRange

    setSelectedRange(validRange)
    setRangeGroupIndex(Math.floor(validRange/rangeGroupLength))
  }, [searchParams])

  const currentRanges = useMemo(() => {
    const start = rangeGroupIndex * rangeGroupLength
    const end = start + rangeGroupLength
    const result = dateRange.slice(start, end)
    return result
  }, [dateRange, rangeGroupIndex])

  const handleNavigate = (index) => navigate({
    pathname: location.pathname,
    search: `?${createSearchParams({ range: index })}`,
  })

  const handleNext = () => {
    const next = selectedRange + 1
    handleNavigate(next >= dateRange.length ? 0 : next)
  }

  const handlePrev = () => {
    const prev = selectedRange - 1
    handleNavigate(prev < 0 ? dateRange.length - 1 : prev)
  }

  return (
    <div className="time-period-selector">
      <button className="back-btn" onClick={handlePrev}></button>
      <div className="decades">
        {
          currentRanges.map((item, index) => (
            <div
              key={item.range}
              className={`decades-option ${item.range === dateRange[selectedRange]?.range ? 'selected' : 'others'}`}
              onClick={() => handleNavigate(index)}
            >
              <h4>
                {item.start}
                <br />-<br />
                {item.end}
              </h4>
            </div>
          ))
        }
        {/* <div
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
        </div> */}
      </div>
      <button className="fwd-btn" onClick={handleNext}></button>
    </div>
  )
}

export default TimePeriodSelector
