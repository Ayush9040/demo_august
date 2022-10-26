import React from 'react'
import './style.scss'
import 'react-step-progress-bar/styles.css'
import { ProgressBar, Step } from 'react-step-progress-bar'

const StepProgessBar = ( { status=33.33 } ) => {
  const transitionStyles = {
    entering: { transform: 'scale(1.75)' },
    entered: { transform: 'scale(1)' },
    exiting: { transform: 'scale(1.75)' },
    exited: { transform: 'scale(1)' },
  }

 
  return (
    <div className="progess_div">
      <ProgressBar filledBackground="#CC4625" percent={status}>
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
                <div className="date">ORDER PLACED</div>
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
                <div className="date">DELIVERED</div>
              </div>
            </>
          )}
        </Step>
      </ProgressBar>
    </div>
  )
}

export default StepProgessBar
