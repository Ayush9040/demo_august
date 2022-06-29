import React from 'react'
import './formstyles.scss'
import InputComponent from '../InputComponent'

const Personal = ({
  handleEmpty1,
  empty,
  setFormData,
  formData
}) => {
  
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
              />
              {empty === 1 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem -7rem 2rem 0'
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
              />
              {empty === 3 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem -7rem 2rem 0'
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
              />
              {empty === 2 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem -7rem 2rem 0'
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
              />
              {empty === 4 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem -7rem 2rem 0'
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
              />
            </div>
            <div>
              <InputComponent
                type="text"
                placeholder="Country*"
                form={formData}
                setField={setFormData}
                keyName="country"
              />
              {empty === 6 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem -7rem 2rem 0'
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
              />
              {empty === 7 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem -7rem 2rem 0'
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
              />
              {empty === 8 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem -7rem 2rem 0'
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
              />
              {empty === 9 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem -7rem 2rem 0'
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
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({ ...formData, gender: e.target.value })
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
                    margin: '-1.75rem -7rem 2rem 0'
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
                form={formData}
                setField={setFormData}
                keyName="DOB"
              />
              {empty === 10 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem -7rem 2rem 0'
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
              />
              {empty === 11 && (
                <small
                  style={{
                    color: 'red',
                    fontSize: '1.25rem',
                    float: 'right',
                    margin: '-1.75rem - 7rem 2rem 0'
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
