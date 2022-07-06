import React from 'react'
import useFacts from '../../utils/hooks/useFacts'
import './style.scss'

const TimePeriodSelector = () => {
  const {
    handleNext,
    handlePrev,
    selectedRange,
    handleNavigate,
    currentRanges
  } = useFacts()

  return (
    <div className="time-period-selector">
      <button className="back-btn" onClick={handlePrev}></button>
      <div className="decades">
        {
          currentRanges.map((item) => (
            <div
              key={item.range}
              className={`decades-option ${item.range === selectedRange?.range ? 'selected' : 'other-index'}`}
              onClick={() => handleNavigate(item.key)}
            >
              <h4>
                {item.start}
              </h4>
              <h4>-</h4>
              <h4>
                {item.end}
              </h4>
            </div>
          ))
        }
      </div>
      <button className="fwd-btn" onClick={handleNext}></button>
    </div>
  )
}

export default TimePeriodSelector
