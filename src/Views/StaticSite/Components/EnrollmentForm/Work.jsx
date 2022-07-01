import React from 'react'
import './formstyles.scss'
import InputComponent from '../InputComponent'

const Work = ({
  setBold,
  listData,
  listDetailHandler,
  setFormData,
  formData,
  resgin,
  setResgin
  
}) => {
  return (
    <div className="main_div">
      <div className="grid_box">
        <div className="left_grid">
          <form>
            <div>
              <InputComponent
                type="text"
                placeholder="Company Name"
                form={formData}
                setField={setFormData}
                keyName="company"
                value={formData.company}
                errorCheck={setResgin}
              />
            </div>
            <div>
              <InputComponent
                type="text"
                placeholder="Role when leaving the job"
                form={formData}
                setField={setFormData}
                keyName="leavejob"
                value={formData.leavejob}
                errorCheck={setResgin}
              />
            </div>
            <div className="work_flex_box">
              <div>
                <div className="worked">Worked from</div>
                <InputComponent
                  type="number"
                  placeholder="Year"
                  form={formData}
                  setField={setFormData}
                  keyName="workfrom"
                  value={formData.workfrom}
                  errorCheck={setResgin}
                />
                {resgin === 1 && (
                  <style
                    style={{
                      color: 'red',
                      fontSize: '1.25rem',
                      display: 'block',
                      float: 'right',
                    }}
                  >
                    Please enter a valid year
                  </style>
                )}
              </div>
              <div>
                <div className="worked">Worked till</div>
                <InputComponent
                  type="number"
                  placeholder="Year"
                  form={formData}
                  setField={setFormData}
                  keyName="worktill"
                  value={formData.worktill}
                  errorCheck={setResgin}
                />
                {resgin === 2 && (
                  <style
                    style={{
                      color: 'red',
                      fontSize: '1.25rem',
                      display: 'block',
                      float: 'right',
                    }}
                  >
                    Please enter a valid year
                  </style>
                )}
              </div>
            </div>
            <div className="add_button_div">
              Add more
              <button
                className="add_button"
                onClick={(e) => {
                  listDetailHandler(e)
                }}
              >
                +
              </button>
            </div>
          </form>
        </div>
        <div className="right_grid">
          <div className="listed_quality">
            Listed Work Experience :{' '}
            {listData.map((item, key) => {
              return (
                <div className="experienced-lists" key={key}>
                  <p>{item.companyName}</p>
                  <p>{item.roleWhenLeaving}</p>
                  {/* <p>{item.yearOfresignation}</p> */}
                  <p>{item.workFrom} to {item.workTill}</p>
                  
                </div>
              )
            })}
          </div>
          {/* {resgin === 1 && (
            <small
              style={{
                color: 'red',
                marginLeft: '45px',
                fontSize: '15px',
              }}
            >
              *Please Enter Your Deatils!
            </small>
          )} */}
        </div>
      </div>
      <div className="button_box">
        <button
          className="back_button"
          onClick={() => {
            setBold(1)
          }}
        >
          Back
        </button>
        <button className="next_button" onClick={()=>{setBold(3)}}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Work
