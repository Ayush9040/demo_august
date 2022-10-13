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
    orderPlaced:0,
    orderShipped:33.33,
    outOfDelivery:66.66,
    arrivalDate:100,
  })
  return (
    <div className="progess_div">
      <ProgressBar
        filledBackground="linear-gradient(to right, #fefb72, #d44040)"
        percent={progessBar.orderShipped}
      >
        <Step >
          {({ accomplished, transitionState,index }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`transitionStep ${
                accomplished ? 'accomplished' : null
              }`}
              
            >{index+1}
              🌑
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished,transitionState, position,index }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`transitionStep ${
                accomplished ? 'accomplished' : null
              }`}
            >{index+1}
              🌒
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState,index }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`transitionStep ${
                accomplished ? 'accomplished' : null
              }`}
              position={50}
            >{index+1}
              🌓
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, transitionState,index }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`transitionStep ${
                accomplished ? 'accomplished' : null
              }`}
              position={75}
            >{index+1}
              🌔
            </div>
          )}
        </Step>
        {/* <Step transition="scale">
          {({ accomplished, transitionState,index }) => (
            <div
              style={transitionStyles[transitionState]}
              className={`transitionStep ${
                accomplished ? 'accomplished' : null
              }`}
              position={100}
            >{index+1}
              🌕
            </div>
          )}
        </Step>  */}
      </ProgressBar>
    </div>
  )
}

export default StepProgessBar
