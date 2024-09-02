import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import CourseSection from '../CourseSections'
// import FAQ from '../Faq'
import './style.scss'

const Accordian = ({ data, sliderVal, setSliderVal }) => {
  
  const [hidden, setHidden] = useState(sliderVal)

  // useEffect(() => {
  //   setHidden(sliderVal)
  // }, [sliderVal])


  return (
    <div className="accordian_contanier">

      {data.map((item, i) => {
        return (
          <Fragment key={i}>
            <div style={typeof (item.ans) === 'object' ? { width: '100%' } : {}} className="accordian_div">
              <p
                className="accordian_ques"
                onClick={hidden != item.id  ? 
                  () => { setSliderVal(item.id); setHidden(item.id); }:
                  () => { setSliderVal(null); setHidden(null); }}
              >
                {item.ques || item.questions}
                <span
                  className={
                    (hidden === (item.id || item['_id']) || sliderVal === (item.id || item['_id'])) ? 'acc_arrow open' : 'acc_arrow'
                  }
                >
                  &#9654;
                </span>
              </p>

              {typeof (item.ans) !== 'object' ?
                <p className="accordian_ans" style={(hidden === (item.id || item['_id']) || sliderVal === (item.id || item['_id'])) ? { height: 'auto' } : {}} >
                  {' '}
                  {item.ans || item.answer}
                </p>
                :
                <ul className="accordian_ans" style={(hidden === item.id || sliderVal === item.id) ? { height: 'auto' } : {}}>
                  {item.ans.map((points, i) => (
                    <div className='accordian_ul' key={i}>
                      <Link to={points.url} >{points.text}</Link>
                    </div>
                  ))}
                </ul>
              }
            </div>

            {typeof (item.ans) !== 'object' && <hr />}

          </Fragment>
        )
      })}
    </div>
  )
}

export default Accordian
