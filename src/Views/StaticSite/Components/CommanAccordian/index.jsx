import React, { Fragment, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import CourseSection from '../CourseSections'
// import FAQ from '../Faq'
import './style.scss'

const Accordian = ({ data, sliderVal = 0, setSliderVal }) => {

  const [hidden, setHidden] = useState()
  const navigate = useNavigate();

  useEffect(() => {

    setHidden(sliderVal)

  }, [sliderVal])


  return (
    <div className="accordian_contanier">

      {
        data.map((item, i) => {

          return (
            <Fragment key={i}>

              <div style={typeof (item.ans) === 'object' ? { width: '100%' } : {}} className="accordian_div">

                <p className="accordian_ques"
                  onClick={() => { setSliderVal && setSliderVal(item.id || item['_id']); setHidden(item.id || item['_id']); }} >

                  {item.ques || item.questions}
                  <span className={
                    (hidden === (item.id || item['_id']) || sliderVal === (item.id || item['_id'])) ? 'acc_arrow open' : 'acc_arrow'}>
                    &#9654;
                  </span>
                </p>

                {
                  typeof (item.ans) !== 'object' ?

                    <p className="accordian_ans"
                      style={(hidden === (item.id || item['_id']) || sliderVal === (item.id || item['_id'])) ? { height: 'auto' } : {}}>
                      {' '} {item.ans || item.answer}
                    </p>

                    :
                    <ul className="accordian_ans" style={(hidden === item.id || sliderVal === item.id) ? { height: 'auto' } : {}} >
                      {
                        item.ans.map((points, i) => (
                          <div className='accordian_ul' key={i}
                            style={points.text === "View more about 200 hours TTC (Basic)" ? { textDecoration: 'underLine', color: 'darkblue', cursor:'pointer' } : null}>
                            <p onClick={() => navigate(points.url)} >{points.text}</p>
                          </div>
                        ))
                      }
                    </ul>

                }
              </div>

              {typeof (item.ans) !== 'object' && <hr />}

            </Fragment>
          )
        })
      }
    </div>
  )
}

export default Accordian
