import React, { useState } from 'react'
import './style.scss'
import 'react-step-progress-bar/styles.css'
import { ProgressBar, Step } from 'react-step-progress-bar'

const StepProgessBar = () => {
  const transitionStyles = {
    entering: { transform: 'scale(1.75)' },
    entered: { transform: 'scale(1)' },
    exiting: { transform: 'scale(1.75)' },
    exited: { transform: 'scale(1)' },
  }

  const [progessBar, SetProgessBar] = useState({
    orderPlaced: 0,
    orderShipped: 33.33,
    outOfDelivery: 66.66,
    arrivalDate: 100,
  })
  return (
    <div className="progess_div">
      <ProgressBar filledBackground="#CC4625" percent={progessBar.orderShipped}>
        <Step>
          {({ accomplished, transitionState }) => (
            <>
              {' '}
              <div
                style={transitionStyles[transitionState]}
                className={`transitionStep ${
                  accomplished ? 'accomplished' : null
                }`}
              >
                <div className="date">ORDER DATE</div>
              </div>
            </>
          )}
        </Step>

        <Step>
          {({ accomplished, transitionState }) => (
            <>
              {' '}
              <div
                style={transitionStyles[transitionState]}
                className={`transitionStep ${
                  accomplished ? 'accomplished' : null
                }`}
              >
                <div className="date">SHIPPED</div>
              </div>
            </>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState }) => (
            <>
              {' '}
              <div
                style={transitionStyles[transitionState]}
                className={`transitionStep ${
                  accomplished ? 'accomplished' : null
                }`}
              >
                <div className="date">OUT FOR DELIVERY</div>
              </div>
            </>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState }) => (
            <>
              {' '}
              <div
                style={transitionStyles[transitionState]}
                className={`transitionStep ${
                  accomplished ? 'accomplished' : null
                }`}
              >
                {' '}
                <div className="date">ARRIVAL DATE</div>
              </div>
            </>
          )}
        </Step>
      </ProgressBar>
    </div>
  )
}

export default StepProgessBar
