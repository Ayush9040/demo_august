import React, { Fragment, useState } from 'react'
import './style.scss'

const Accordian = ({ data }) => {
  const [hidden, setHidden] = useState(1)

  return (
    <div className="accordian_contanier">
      {' '}
      {data.map((item,i) => {
        return (
          <Fragment key={i} >
            <div className="accordian_div">
              <p className='accordian_ques'
                onClick={() => {
                  setHidden(item.id)
                }}
              >
                {item.ques}
                <span
                  className={
                    hidden === item.id ? 'acc_arrow open' : 'acc_arrow'
                  }
                >
                  &#9654;
                </span>
              </p>
              <p className='accordian_ans' style={hidden === item.id ? { height: 'auto' } : {}}>
                {' '}
                {item.ans}
              </p>
            </div>
            <hr />
          </Fragment>
        )
      })}
    </div>
  )
}

export default Accordian
