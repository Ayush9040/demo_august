import React from 'react'
import './formstyles.scss'
import InputComponent from '../InputComponent'

const Personal = ({
  handleEmpty1,
  empty,
  setFormData,
  formData,
  setEmpty
}) => {

  const today = new Date().toISOString().split('T')[0]

  
  return (
    <div className="main_div">
      <div className="grid_box">
        <div className="left_grid">
          <form>
            <div>
              <InputComponent
                type="text"
                placeholder="Name*"
                form={formData}
                setField={setFormData}
                keyName="name"
                errorCheck={setEmpty}
              />
              {empty === 1 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem 0 2rem 0'
                  }}
                >
                  {' '}
                  Please enter your name
                </small>
              )}
            </div>
            <div>
              <InputComponent
                type="email"
                id="text"
                placeholder="Email ID*"
                form={formData}
                setField={setFormData}
                keyName="email"
                errorCheck={setEmpty}
              />
              {empty === 2 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem 0 2rem 0'
                  }}
                >
                  {' '}
                  Please enter an valid email
                </small>
              )}
            </div>
            <div>
              <InputComponent
                type="text"
                placeholder="Phone Number*"
                form={formData}
                setField={setFormData}
                keyName="phone"
                errorCheck={setEmpty}
              />
              {empty === 3 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem 0 2rem 0'
                  }}
                >
                  {' '}
                  Please enter a valid phone nuber
                </small>
              )}
            </div>
            <div>
              <InputComponent
                type="text"
                placeholder="Address Line 1*"
                form={formData}
                setField={setFormData}
                keyName="address1"
                errorCheck={setEmpty}
              />
              {empty === 4 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem 0 2rem 0'
                  }}
                >
                  {' '}
                  Please enter your address
                </small>
              )}
            </div>
            <div>
              <InputComponent
                type="text"
                placeholder="Address Line 2"
                form={formData}
                setField={setFormData}
                keyName="address2"
                errorCheck={setEmpty}
              />
            </div>
            <div>
              <InputComponent
                type="text"
                placeholder="Country*"
                form={formData}
                setField={setFormData}
                keyName="country"
                errorCheck={setEmpty}
              />
              {empty === 6 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem 0 2rem 0'
                  }}
                >
                  {' '}
                  Please enter your country
                </small>
              )}
            </div>
            <div>
              {' '}
              <InputComponent
                type="text"
                placeholder="State*"
                form={formData}
                setField={setFormData}
                keyName="state"
                errorCheck={setEmpty}
              />
              {empty === 7 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem 0 2rem 0'
                  }}
                >
                  {' '}
                  Please enter your state
                </small>
              )}
            </div>
            <div>
              <InputComponent
                type="text"
                placeholder="City*"
                form={formData}
                setField={setFormData}
                keyName="city"
                errorCheck={setEmpty}
              />
              {empty === 8 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem 0 2rem 0'
                  }}
                >
                  {' '}
                  Please enter your city
                </small>
              )}
            </div>
          </form>
        </div>
        <div className="right_grid">
          <form>
            <div>
              <InputComponent
                type="number"
                placeholder="Pincode*"
                form={formData}
                setField={setFormData}
                keyName="pincode"
                errorCheck={setEmpty}
              />
              {empty === 9 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem 0 2rem 0'
                  }}
                >
                  {' '}
                  Please enter your pincode
                </small>
              )}
            </div>

            <div className="personal_gender">Gender*</div>
            <div className="gender">
              <label className="gender_radio">
                Male&nbsp;
                <input
                  type="radio"
                  value="MALE"
                  name="gender"
                  checked={formData.gender==='MALE'}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({ ...formData, gender: e.target.value })
                    }
                  }}
                />
              </label>
              <label className="gender_radio">
                Female&nbsp;
                <input
                  className="radio"
                  type="radio"
                  value="FEMALE"
                  name="gender"
                  checked={formData.gender==='FEMALE'}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({ ...formData, gender: e.target.value }, setEmpty(0))
                    }
                  }}
                />
              </label>
              {empty === 15 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem 0 2rem 0'
                  }}
                >
                  {' '}
                  Please select one option
                </small>
              )}
            </div>
            <div className="DOB_box">
              <InputComponent
                type="text"
                placeholder="DOB*"
                minnum="1950-01-01"
                maxnum={today}
                form={formData}
                setField={setFormData}
                keyName="DOB"
                errorCheck={setEmpty}
                
              />
              {empty === 10 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem 0 2rem 0'
                  }}
                >
                  {' '}
                  Please enter your DOB
                </small>
              )}
            </div>
            <div>
              <InputComponent
                type="text"
                placeholder="Nationality*"
                form={formData}
                setField={setFormData}
                keyName="nationality"
                errorCheck={setEmpty}
              />
              {empty === 11 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem 0 2rem 0'
                  }}
                >
                  {' '}
                  Please enter your nationality
                </small>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="button_box">
        <button className="next_button" onClick={handleEmpty1}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Personal
