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
      const { online, onCampus, days7, days21, month1, month2, month3, weekends, weekDays, year1, year2, month7, month4, days1, days2 } = selectedFilters;

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
      if (days7 || days21 || month1 || month2 || month3 || year1 || year2 || month7 || month4 || days1 || days2) {
        if ((days7 && points.days7) || (days21 && points.days21) ||
          (month1 && points.month1) || (month2 && points.month2) || (month3 && points.month3)
          || (year1 && points.year1) || (year2 && points.year2) || (month7 && points.month7)
          || (month4 && points.month4) || (days1 && points.days1) || (days2 && points.days2) || points?.isRegular) {
          conditions.push(true);
        }
        else {
          conditions.push(false)
        }
      }

      // if (days21 && points.days21) {
      //   conditions.push(points.days21);
      // }
      // if (month1 && points.month1) {
      //   conditions.push(points.month1);
      // }
      // if (month2 && points.month2) {
      //   conditions.push(points.month2);
      // }
      // if (month3 && points.month3) {
      //   conditions.push(points.month3);
      // }
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

  // const shouldDisplayBlock = (obj) => {

  //   if (selectedFilters) {
  //     // const { online, onCampus, days7, days21, month1, month2, month3, weekends, weekDays } = selectedFilters;

  //     if (!anyFilterActive) {
  //       return true; // Show block if no filters are active
  //     }

  //     // Extract the points from obj
  //     const points = obj.ans;
  //     // Create an array to store conditions for filtering
  //     // const conditions = [];

  //     // Check if points exist and are not empty
  //     if (points) {

  //       // Function to filter the array
  //       var filteredData = points.filter(item => {
  //         console.log(item);
          
  //         // Check if the "days" group (days7, days21, month1, month2, month3) has any `true`
  //         let daysGroupMatches = ['days7', 'days21', 'month1', 'month2', 'month3', 'year1', 'year2', 'month7', 'month4', 'days1', 'days2'].some(key => selectedFilters[key] && item[key]);

  //         // If all "days" fields are false in `a`, we ignore this check and consider it a match
  //         if (['days7', 'days21', 'month1', 'month2', 'month3', 'year1', 'year2', 'month7', 'month4', 'days1', 'days2'].every(key => !selectedFilters[key])) {
  //           daysGroupMatches = true;
  //         }

  //         // Check that other properties match the values in `a`
  //         let otherPropsMatch = Object.keys(selectedFilters).every(key => {
  //           if (['days7', 'days21', 'month1', 'month2', 'month3', 'year1', 'year2', 'month7', 'month4', 'days1', 'days2'].includes(key)) {
  //             return true;  // Skip the "days" group properties because they're handled separately
  //           }
  //           return !selectedFilters[key] || selectedFilters[key] === item[key];  // Ensure it matches `true` values or ignore if `a[key]` is false
  //         });

  //         // Return true if both conditions are satisfied
  //         return daysGroupMatches && otherPropsMatch;
  //       });
  //     }
  //     console.log(filteredData);

  //     // Check if all active conditions are met and not empty
  //     return filteredData.length > 0//conditions.length > 0 && conditions.every(Boolean);
  //   }

  //   return false; // In case selectedFilters is undefined
  // };

  // function filterObjectsByCriteria(criteria, dataArray) {
  //   // Extract only the keys that have true values from the criteria object
  //   const trueCriteria = Object.entries(criteria).filter(([key, value]) => value === true).map(([key]) => key);

  //   // Filter the dataArray based on the keys in trueCriteria
  //   return dataArray.filter(obj => {
  //     return trueCriteria.every(key => obj[key] === true);
  //   });
  // }
  const shouldDisplayBlock = (obj) => {
    if (selectedFilters) {
      if (!anyFilterActive) {
        return true; // Show block if no filters are active
      }
  
      const points = obj.ans; // Extract points from the object
  
      if (points) {
        var filteredData = points.filter(item => {
          console.log(item);
          
          // Check if the item is regular; if it is, skip the daysGroupMatches check
          if (item.isRegular) {
            // If it's regular, we don't need to validate daysGroupMatches, just check other properties
            return Object.keys(selectedFilters).every(key => {
              // Skip the "days" group properties and check the others
              if (['days7', 'days21', 'month1', 'month2', 'month3', 'year1', 'year2', 'month7', 'month4', 'days1', 'days2'].includes(key)) {
                return true;  // Skip the "days" group properties because they're handled separately
              }
              return !selectedFilters[key] || selectedFilters[key] === item[key];  // Ensure it matches `true` values or ignore if `selectedFilters[key]` is false
            });
          }
  
          // If it's not regular, perform the `daysGroupMatches` check
  
          // Check if the "days" group (days7, days21, month1, month2, month3) has any `true`
          let daysGroupMatches = ['days7', 'days21', 'month1', 'month2', 'month3', 'year1', 'year2', 'month7', 'month4', 'days1', 'days2'].some(key => selectedFilters[key] && item[key]);
  
          // If all "days" fields are false in `selectedFilters`, we ignore this check and consider it a match
          if (['days7', 'days21', 'month1', 'month2', 'month3', 'year1', 'year2', 'month7', 'month4', 'days1', 'days2'].every(key => !selectedFilters[key])) {
            daysGroupMatches = true;
          }
  
          // Check that other properties match the values in `selectedFilters`
          let otherPropsMatch = Object.keys(selectedFilters).every(key => {
            if (['days7', 'days21', 'month1', 'month2', 'month3', 'year1', 'year2', 'month7', 'month4', 'days1', 'days2'].includes(key)) {
              return true;  // Skip the "days" group properties because they're handled separately
            }
            return !selectedFilters[key] || selectedFilters[key] === item[key];  // Ensure it matches `true` values or ignore if `selectedFilters[key]` is false
          });
  
          // Return true if both conditions are satisfied
          return daysGroupMatches && otherPropsMatch;
        });
      }
  
      console.log(filteredData);
      return filteredData.length > 0;
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
