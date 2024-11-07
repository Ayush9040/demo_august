import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import CourseSection from '../CourseSections'
// import FAQ from '../Faq'
import './style.scss'

const Accordian = ({ data, sliderVal, setSliderVal, selectedFilters }) => {

  const [hidden, setHidden] = useState(sliderVal)

  // useEffect(() => {
  //   setHidden(sliderVal)
  // }, [sliderVal])

  const [anyFilterActive, setAnyFilterActive] = useState()
  useEffect(() => {
    if (selectedFilters) {
      const activeCoun = Object.values(selectedFilters).some(value => value === true);
      setAnyFilterActive(activeCoun)
    }
  }, [selectedFilters])

  const shouldDisplayLink = (points) => {
    if (selectedFilters) {
      const { online, onCampus, days7, days21, month1, month2, month3, weekends, weekDays } = selectedFilters;

      if (!anyFilterActive) {
        return true; // Show link if no filters are active
      }

      // Create an array to store conditions for filtering
      const conditions = [];

      if (online) {
        conditions.push(points.online);
      }
      if (onCampus) {
        conditions.push(points.onCampus);
      }
      if (days7) {
        conditions.push(points.days7);
      }
      if (days21) {
        conditions.push(points.days21);
      }
      if (month1) {
        conditions.push(points.month1);
      }
      if (month2) {
        conditions.push(points.month2);
      }
      if (month3) {
        conditions.push(points.month3);
      }
      if (weekends) {
        conditions.push(points.weekends);
      }
      if (weekDays) {
        conditions.push(points.weekDays);
      }

      // Check if all active conditions are met
      return conditions.length > 0 && conditions.every(Boolean);
    }

    return false; // In case selectedFilters is undefined
  };

  const shouldDisplayBlock = (obj) => {
    
    if (selectedFilters) {
      const { online, onCampus, days7,days21,month1, month2, month3, weekends, weekDays } = selectedFilters;

      if (!anyFilterActive) {
        return true; // Show block if no filters are active
      }

      // Extract the points from obj
      const points = obj.ans;
      // Create an array to store conditions for filtering
      const conditions = [];

      // Check if points exist and are not empty
      if (points) {
        // console.log(points);

        if (online) {
          const bool = points.some(obj => obj.online === true);
          conditions.push(!!bool);
        }
        if (onCampus) {
          const bool = points.some(obj => obj.onCampus === true);
          conditions.push(!!bool);
        }
        if (days7) {
          const bool = points.some(obj => obj.days7 === true);
          conditions.push(!!bool);
        }
        if (days21) {
          const bool = points.some(obj => obj.days21 === true);
          conditions.push(!!bool);
        }
        if (month1) {
          const bool = points.some(obj => obj.month1 === true);
          conditions.push(!!bool);
        }
        if (month2) {
          const bool = points.some(obj => obj.month2 === true);
          conditions.push(!!bool);
        }
        if (month3) {
          const bool = points.some(obj => obj.month3 === true);
          conditions.push(!!bool);
        }
        if (weekends) {
          const bool = points.some(obj => obj.weekends === true);
          conditions.push(!!bool);
        }
        if (weekDays) {
          const bool = points.some(obj => obj.weekDays === true);
          conditions.push(!!bool);
        }
      }

      // Check if all active conditions are met and not empty
      return conditions.length > 0 && conditions.every(Boolean);
    }

    return false; // In case selectedFilters is undefined
  };

  return (
    <div className="accordian_contanier">

      {data.map((item, i) => {
        return (
          <Fragment key={i}>
            {shouldDisplayBlock(item) &&
              <>
                <div style={typeof (item.ans) === 'object' ? { width: '100%' } : {}} className="accordian_div">
                  <p
                    className="accordian_ques"
                    onClick={hidden != item.id ?
                      () => { setSliderVal(item.id); setHidden(item.id); } :
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
                        shouldDisplayLink(points) && (
                          <div className='accordian_ul' key={i}>
                            <Link to={points.url}>{points.text}</Link>
                          </div>)
                      ))}
                    </ul>
                  }
                </div>

                {typeof (item.ans) !== 'object' && <hr />}</>
            }
          </Fragment>
        )
      })}
    </div>
  )
}

export default Accordian
