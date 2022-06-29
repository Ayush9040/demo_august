import React from 'react'
import './formstyles.scss'
import InputComponent from '../InputComponent'

const Academic = ({
  handleEmpty2,
  setBold,
  empty,
  qualificationData,
  QualificationDetailHandler,
  yearEmpty,
  formData,
  setFormData,
}) => {
  return (
    <div className="main_div">
      <div className="grid_box">
        <div className="left_grid">
          <form>
            <div>
              <InputComponent
                type="text"
                placeholder="School/College*"
                form={formData}
                setField={setFormData}
                keyName="school"
                value={formData.school}
              />
            </div>
            <div>
              <InputComponent
                type="text"
                placeholder="Course*"
                form={formData}
                setField={setFormData}
                keyName="course"
                value={formData.course}
              />
            </div>
          </form>
          <div className="year_flex_box">
            <div className="year_flex_div">Year of completion*</div>
            <InputComponent
              type="number"
              placeholder="Year"
              form={formData}
              setField={setFormData}
              keyName="completion"
              value={formData.completion}
            />
            {yearEmpty === 1 && (
              <small
                style={{
                  color: 'red',
                  fontSize: '1.25rem',
                  display: 'block',
                  float: 'right',
                }}
              >
                *Please Enter a valid year
              </small>
            )}
          </div>
          <div className="add_button_div">
            Add More
            <button
              className="add_button"
              onClick={() => {
                QualificationDetailHandler()
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="right_grid">
          <div className="listed_quality">
            Listed Qualifications :
            {qualificationData?.map((items, key) => {
              return (
                <div className="qualification_lists" key={key}>
                  <p>{items.schoolOrCollege}</p>
                  <p>{items.course}</p>
                  <p>{items.yearOfCompletion}</p>
                </div>
              )
            })}
          </div>
          {empty === 1 && (
            <small
              style={{
                color: 'red',
                fontSize: '1.25rem',
                float: 'right',
                margin: '-1.75rem 7rem 2rem 0',
              }}
            >
              *Please Enter Your Deatils!
            </small>
          )}
        </div>
      </div>
      <div className="button_box">
        <button
          className="back_button"
          onClick={() => {
            setBold(0)
          }}
        >
          Back
        </button>
        <button className="next_button" onClick={handleEmpty2}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Academic
