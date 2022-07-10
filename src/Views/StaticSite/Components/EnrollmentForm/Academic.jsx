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
  setYearEmpty
}) => {
  return (
    <div className="main_div">
      <div className="grid_box">
        <div className="left_grid">
          <form>
            <div className='form_error'>
              <InputComponent
                type="text"
                placeholder="School/College*"
                form={formData}
                setField={setFormData}
                keyName="school"
                value={formData.school}
                errorCheck={setYearEmpty}
              />
              {yearEmpty === 1 && (
                <small>
                  {' '}
                  Please enter your school/college name
                </small>
              )}
            </div>
            <div className='form_error'>
              <InputComponent
                type="text"
                placeholder="Course*"
                form={formData}
                setField={setFormData}
                keyName="course"
                value={formData.course}
                errorCheck={setYearEmpty}
              />
              {yearEmpty === 2 && (
                <small>

                  {' '}
                  Please enter your course
                </small>
              )}
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
              errorCheck={setYearEmpty}
            />
          </div>
          {yearEmpty === 3 && (
            <small>
              *Please Enter a valid year
            </small>
          )}
          <div className="add_button_div">
            Add more
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
        <div className="right_grid form_error">
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
            <small>
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
