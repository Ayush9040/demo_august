import React from 'react'
import './formstyles.scss'

const Other = ({ empty, formData, setFormData }) => {
  return (
    <div className="other-container">
      <div className="other-section-half">
        <div className="medical-section">
          <p className="medical-label">
            Medical History & Current Health Issues :
          </p>
          <textarea
            className="text_box"
            type="text"
            rows="5"
            cols="30"
            onChange={(e) => {
              setFormData({
                ...formData,
                medicalstatus: e.target.value,
              })
            }}
          />
        </div>

        <div className="about-us">
          {/* <p className="about-label">How do you hear about us?*</p> */}
          <div className="radio-section">
            {/* <form className="radio-text">
              <label className="label-1">
              Internet&nbsp;
                <input
                  type="radio"
                  value="internet"
                  name="source"
                  checked={formData.source==='internet'}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        source: e.target.value,
                      })
                    }
                  }}
                />
              </label>
              <label className="label-1">
              Print Media&nbsp;
                <input
                  type="radio"
                  value="media"
                  name="source"
                  checked={formData.source==='media'}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        source: e.target.value,
                      })
                    }
                  }}
                />
              </label>
              <label className="label-1">
              Friends/Relatives&nbsp;
                <input
                  type="radio"
                  value="friends"
                  name="source"
                  checked={formData.source==='friends'}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        source: e.target.value,
                      })
                    }
                  }}
                />
              </label>
              <label className="label-1">
              Events&nbsp;
                <input
                  type="radio"
                  value="events"
                  name="source"
                  checked={formData.source==='events'}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        source: e.target.value,
                      })
                    }
                  }}
                />
              </label>
              <label className="label-1">
              Others&nbsp;
                <input
                  type="radio"
                  value="others"
                  name="source"
                  checked={formData.source==='others'}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        source: e.target.value,
                      })
                    }
                  }}
                />
              </label> */}
            {/* {empty === 1 && (
                <small
                  style={{
                    color: 'red',
                    marginLeft: '45px',
                    fontSize: '15px',
                  }}
                >
                *Please select one!
                </small>
              )} */}
            {/* </form> */}
          </div>
        </div>
      </div>
      {/* <div className="other-last">
        <input
          className="reason-input"
          type="text"
          placeholder="Any other source please specify"
          onChange={(e) => {
            setFormData({
              ...formData,
              sourceinfo: e.target.value || 'none',
            })
          }}
        />
      </div> */}
      {empty === 2 && (
        <small style={{ color: 'red', marginLeft: '45px', fontSize: '15px' }}>
          *Please Choose a source
        </small>
      )}
      {/* <div className="radio_heading">
              <div className="label">Purpose of joining this program</div>

              <div className="radio_text">
                <label className="label_1">
                  Self-Development&nbsp;
                  <input
                    type="radio"
                    name="purpose"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({
                          ...formData,
                          purpose: e.target.value,
                        })
                      }
                    }}
                  />
                </label>
                <label className="label_1">
                  Fitness&nbsp;
                  <input
                    type="radio"
                    name="purpose"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({
                          ...formData,
                          purpose: e.target.value,
                        })
                      }
                    }}
                  />
                </label>
                <label className="label_1">
                  Career&nbsp;
                  <input
                    type="radio"
                    name="purpose"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({
                          ...formData,
                          purpose: e.target.value,
                        })
                      }
                    }}
                  />
                </label>
                <label className="label_1">
                  Health&nbsp;
                  <input
                    type="radio"
                    name="purpose"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({
                          ...formData,
                          purpose: e.target.value,
                        })
                      }
                    }}
                  />
                </label>
                <label className="label_1">
                  Others&nbsp;
                  <input
                    type="radio"
                    name="purpose"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({
                          ...formData,
                          purpose: e.target.value,
                        })
                      }
                    }}
                  />
                </label>
              </div>
            </div>

            <div>
              <input
                className="underline"
                type="text"
                placeholder="Any other source please specify"
                onChange={(e) => {
                  setFormData({ ...formData, info: e.target.value })
                }}
              />
            </div> */}
      {/* <div className="footer">
        <button
          className="back"
          onClick={() => {
            setBold(2)
          }}
        >
        Back
        </button>
        <button className="next_1" onClick={handleEmpty4}>Next</button>
      </div> */}
    </div>
  )
}

export default Other