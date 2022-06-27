import React, { useState, useEffect } from 'react'
import { filler1, upload } from '../../assets/icons/icon'
import './styles.scss'
// import { courseArray } from '../../Constants/courses/c200hr'
import { AllCourses } from '../../Views/Courses/Constants/courses'
import { useParams } from 'react-router-dom'
import InputComponent from '../InputComponent'
import { validateEmail } from '../../../../helpers'
import { Link } from 'react-router-dom'
import DisclaimerPolicy from '../DisclaimerPolicy'
import { useSelector } from 'react-redux'

const Enrollment = () => {
  const { user } = useSelector((state) => state.auth)
  const { courseId } = useParams()
  const [currentCourse, setCurrentCourse] = useState({})
  const [courseDate, setCourseDate] = useState(null)

  useEffect(() => {
    setCurrentCourse(AllCourses.find((item) => item.key === courseId))
    setCourseDate(localStorage.getItem('selectedDate'))
  }, [])

 

  const [empty, setEmpty] = useState(0)

  const newChild = [
    {
      placeholder: '',
      setField: '',
      keyName: '',
      type: 'text',
      value: '',
      id: 1,
    },
  ]

  const [newField, setNewField] = useState(newChild)

  const AddNewChild = () => {
    setNewField((s) => {
      return [
        ...s,
        {
          placeholder: '',
          setField: '',
          keyName: '',
          type: 'text',
          value: '',
        },
      ]
    })
  }

  const [bold, setBold] = useState(0)
  const [yearEmpty, setYearEmpty] = useState(0)
  const [resgin, setResgin] = useState(0)
  const [listData, setListData] = useState([])
  const [qualificationData, setQualificationData] = useState([])
  const [courseAsset1, setCourseAsset1] = useState(null)
  const [courseAsset2, setCourseAsset2] = useState(null)
  const [formData, setFormData] = useState({
    name: user.firstName ? user.firstName :  '',
    phone: '',
    email: user.email ? user.email : '',
    address1: '',
    address2: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    DOB: '',
    nationality: '',
    children: '',
    age1: '',
    age2: '',
    gender: '',
    school: '',
    course: '',
    completion: '',
    company: '',
    leavejob: '',
    resignation: '',
    medicalstatus: '',
    sourceinfo: '',
    source: '',
    purpose: '',
    info: '',
    residental: '',
  })
  const [qualificationAsset1, setQualificationAsset1] = useState('')
  const [qualificationAsset2, setQualificationAsset2] = useState('')
  const [experienceAsset1, setExperienceAsset1] = useState('')
  const [experienceAsset2, setExperienceAsset2] = useState('')
  console.log(yearEmpty)
  console.log(resgin)

  const listDetailHandler = () => {
    if (formData.resignation.length !== 4) {
      return setResgin(1)
    } else
      setListData([
        ...listData,
        {
          companyName: formData.company,
          roleWhenLeaving: formData.leavejob,
          yearOfresignation: formData.resignation,
          workExImgAsset: experienceAsset1,
          workExPdfAsset: experienceAsset2,
          listedWorkExperience: formData.leavejob,
        },
      ])
    setFormData({ ...formData, resignation: '', company: '', leavejob: '' })
  }

  const QualificationDetailHandler = () => {
    if (formData.completion.length !== 4) {
      return setYearEmpty(1)
    } else
      setQualificationData([
        ...qualificationData,
        {
          schoolOrCollege: formData.school,
          course: formData.course,
          yearOfCompletion: formData.completion,
          academicImgAsset: qualificationAsset1,
          academicPdfAsset: qualificationAsset2,
          listedQualification: formData.course,
        },
      ])
    setFormData({ ...formData, school: '', course: '', completion: '' })
  }
  console.log(formData.residental)

  const handleEmpty1 = () => {
    if (formData.name === '') {
      return setEmpty(1)
    } else if (
      formData.phone === '' ||
      formData.phone.length < 10 ||
      formData.phone.length > 10
    ) {
      return setEmpty(2)
    } else if (!validateEmail(formData.email)) {
      return setEmpty(3)
    } else if (formData.address1 === '') {
      return setEmpty(4)
    } else if (formData.country === '') {
      return setEmpty(6)
    } else if (formData.state === '') {
      return setEmpty(7)
    } else if (formData.city === '') {
      return setEmpty(8)
    } else if (formData.pincode === '') {
      return setEmpty(9)
    } else if (formData.DOB === '') {
      return setEmpty(10)
    } else if (formData.nationality === '') {
      return setEmpty(11)
    } else if (formData.gender === '') {
      return setEmpty(15)
    } else {
      setBold(1)
    }
  }

  const handleEmpty2 = () => {
    if (qualificationData.length === 0) {
      return setEmpty(1)
    } else setBold(2)
  }

  const handleEmpty3 = () => {
    if (listData.length === 0) {
      return setEmpty(1)
    } else setBold(3)
  }

  const handleEmpty4 = () => {
    if (formData.source === '') {
      if (formData.sourceinfo === '') {
        return setEmpty(2)
      }
    } else setBold(4)
  }

  const handleSubmit = async() => {
    setBold(5)
  }

  return (
    <>
      <div className="enrollment_container ">
        <div className="header">
          <Link to="/courses">
            <button className="x">x</button>
          </Link>
          <div className="student">Student Enrollment</div>

          <ul className="header_ul">
            <li
              style={bold === 0 ? { fontWeight: '600' } : {}}
              onClick={() => setBold(0)}
            >
              {' '}
              Personal Details{' '}
              {bold === 0 && <div className="bottom-line"></div>}
            </li>
            <li
              style={bold === 1 ? { fontWeight: '600' } : {}}
              onClick={handleEmpty1}
            >
              Academic Qualifications{' '}
              {bold === 1 && <div className="bottom-line"></div>}
            </li>
            <li
              style={bold === 2 ? { fontWeight: '600' } : {}}
              onClick={handleEmpty2}
            >
              Work Experience{' '}
              {bold === 2 && <div className="bottom-line"></div>}
            </li>
            <li
              style={bold === 3 ? { fontWeight: '600' } : {}}
              onClick={handleEmpty3}
            >
              Other{bold === 3 && <div className="bottom-line"></div>}
            </li>
            <li
              style={bold === 4 ? { fontWeight: 600 } : {}}
              onClick={handleEmpty4}
            >
              Course Details
              {bold === 4 && <div className="bottom-line"></div>}
            </li>
          </ul>
        </div>

        {bold === 0 ? (
          <div>
            <div className="details">
              <div className="left">
                <form>
                  <div>
                    <InputComponent
                      type="text"
                      placeholder="Name"
                      form={formData}
                      setField={setFormData}
                      keyName="name"
                    />
                    {empty === 1 && (
                      <small style={{ color: 'red', marginLeft: '45px', fontSize: '15px' }}>
                        *Please Enter Name!
                      </small>
                    )}
                  </div>
                  <div>
                    <InputComponent
                      type="number"
                      placeholder="Phone Number"
                      form={formData}
                      setField={setFormData}
                      keyName="phone"
                    />
                    {empty === 2 && (
                      <small style={{ color: 'red', marginLeft: '0' }}>
                        *Please Enter Your 10 Digit Phone Number!
                      </small>
                    )}
                  </div>
                  <div>
                    <InputComponent
                      type="text"
                      placeholder="Email ID"
                      form={formData}
                      setField={setFormData}
                      keyName="email"
                    />
                    {empty === 3 && (
                      <small style={{ color: 'red', marginLeft: '45px', fontSize: '15px' }}>
                        *Please Enter Email!
                      </small>
                    )}
                  </div>
                  <div>
                    <InputComponent
                      type="text"
                      placeholder="Address Line 1"
                      form={formData}
                      setField={setFormData}
                      keyName="address1"
                    />
                    {empty === 4 && (
                      <small style={{ color: 'red',marginLeft: '45px', fontSize: '15px' }}>
                        *Please Enter Address!
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
                    />{' '}
                    {empty === 5 && (
                      <small style={{ color: 'red', marginLeft: '45px', fontSize: '15px' }}>
                        *Please Enter Address!
                      </small>
                    )}
                  </div>
                  <div>
                    <InputComponent
                      type="text"
                      placeholder="Country"
                      form={formData}
                      setField={setFormData}
                      keyName="country"
                    />{' '}
                    {empty === 6 && (
                      <small style={{ color: 'red', marginLeft: '45px', fontSize: '15px' }}>
                        *Please Enter Your Country!
                      </small>
                    )}
                  </div>
                  <div>
                    <InputComponent
                      type="text"
                      placeholder="State"
                      form={formData}
                      setField={setFormData}
                      keyName="state"
                    />{' '}
                    {empty === 7 && (
                      <small style={{ color: 'red', marginLeft: '45px', fontSize: '15px' }}>
                        *Please Enter Your State!
                      </small>
                    )}
                  </div>
                  <div>
                    <InputComponent
                      type="text"
                      placeholder="City"
                      form={formData}
                      setField={setFormData}
                      keyName="city"
                    />{' '}
                    {empty === 8 && (
                      <small style={{ color: 'red', marginLeft: '45px', fontSize: '15px' }}>
                        *Please Enter Your City!
                      </small>
                    )}
                  </div>
                  <div>
                    <InputComponent
                      type="number"
                      placeholder="Pincode"
                      form={formData}
                      setField={setFormData}
                      keyName="pincode"
                    />
                    {empty === 9 && (
                      <small style={{ color: 'red', marginLeft: '45px', fontSize: '15px' }}>
                        *Please Enter Pincode!
                      </small>
                    )}
                  </div>
                </form>
              </div>
              <div className="right">
                <div className="radio_text">
                  <label className="label_1">
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
                  <label className="label_1">
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
                    <small style={{ color: 'red', marginLeft: '45px', fontSize: '15px' }}>
                      *Please Select One Otpion!
                    </small>
                  )}
                </div>
                <div className="date_div">
                  <div>
                    <InputComponent
                      type="text"
                      placeholder="DOB"
                      form={formData}
                      setField={setFormData}
                      keyName="DOB"
                    />{' '}
                    {empty === 10 && (
                      <small style={{ color: 'red', marginLeft: '45px', fontSize: '15px' }}>
                        *Please Enter Your DOB
                      </small>
                    )}
                  </div>
                  <div>
                    <InputComponent
                      type="text"
                      placeholder="Nationality"
                      form={formData}
                      setField={setFormData}
                      keyName="nationality"
                    />
                    {empty === 11 && (
                      <small style={{ color: 'red', marginLeft: '45px', fontSize: '15px' }}>
                        *Please Enter Your Nationality
                      </small>
                    )}
                  </div>

                  <div className="num_of_child">
                    <div className="flex_box">
                      <div className="year-of-comp child">
                        Number of Children
                      </div>
                      <InputComponent
                        type="number"
                        placeholder=""
                        form={formData}
                        setField={setFormData}
                        keyName="children"
                      />{' '}
                      {/* {empty === 12 && (
                        <small style={{ color: 'red', marginLeft: '0' }}>
                          *Please Enter !
                        </small>
                      )} */}
                    </div>
                    <div>
                      <div className="age_ofChild">
                        <div className="flex_box">
                          <div className="year-of-comp child">
                            Age of child 1
                          </div>
                          <InputComponent
                            type="number"
                            placeholder=""
                            form={formData}
                            setField={setFormData}
                            keyName="age1"
                          />{' '}
                          {/* {empty === 13 && (
                            <small style={{ color: 'red', marginLeft: '0' }}>
                              *Please Enter!
                            </small>
                          )} */}
                        </div>

                        {newField.map((i, idx) => {
                          return (
                            <>
                              <div className="flex_box">
                                <div className="year-of-comp child">
                                  Age of child {idx + 2}
                                </div>
                                <div key={i} />
                                <InputComponent
                                  placeholder=""
                                  type="number"
                                  form={formData}
                                  setField={setFormData}
                                  keyName={`age${idx + 2}`}
                                  id={i}
                                />
                              </div>
                            </>
                          )
                        })}
                        <div className="button_div">
                          {' '}
                          <button className="button_2" onClick={AddNewChild}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer">
              <button className="back" style={{ visibility: 'hidden' }}>
                Back
              </button>
              <div className="enrollment_logo">{filler1}</div>
              <button className="next_1" onClick={handleEmpty1}>
                Next
              </button>
            </div>
          </div>
        ) : bold === 1 ? (
          <div>
            <div className="details">
              <div className="left">
                <div className="flex-container">
                  <div className="career-history">
                    <InputComponent
                      type="text"
                      placeholder="School/College"
                      form={formData}
                      setField={setFormData}
                      keyName="school"
                      value={formData.school}
                    />

                    <InputComponent
                      type="text"
                      placeholder="Course"
                      form={formData}
                      setField={setFormData}
                      keyName="course"
                      value={formData.course}
                    />
                  </div>
                  <div className="button">
                    <button
                      className="button_2"
                      onClick={() => {
                        QualificationDetailHandler()
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="left_flex_contanier">
                  <div className="flex_box">
                    <div className="year-of-comp label">Year of completion</div>
                    <InputComponent
                      type="number"
                      placeholder="Year"
                      form={formData}
                      setField={setFormData}
                      keyName="completion"
                      value={formData.completion}
                    />{' '}
                  </div>
                  <div className="uploads">
                    <fieldset>
                      <label htmlFor="image">
                        {qualificationAsset1
                          ? qualificationAsset1.substring(0, 10)
                          : 'Upload Image'}
                        <input
                          type={'file'}
                          id="image"
                          onChange={(e) => {
                            setQualificationAsset1(e.target.files[0].name)
                          }}
                          placeholder="Upload Image"
                          accept="image/*"
                        />
                        &ensp;
                        {upload}
                      </label>
                    </fieldset>
                    <fieldset>
                      <label htmlFor="resume">
                        {qualificationAsset2
                          ? qualificationAsset2.substring(0, 10)
                          : 'Upload PDF'}
                        <input
                          type={'file'}
                          onChange={(e) => {
                            setQualificationAsset2(e.target.files[0].name)
                          }}
                          id="resume"
                          accept=".pdf"
                          placeholder="Upload Resume"
                        />
                        &ensp;
                        {upload}
                      </label>
                      
                      <small>Please ensure the file is under 2 MB</small>
                    </fieldset>
                  </div>
                </div>
              </div>
              <div className="right1">
                <div className="label">
                  Listed Qualifications :
                  {qualificationData?.map((items, key) => {
                    return (
                      <div className="qualification-lists" key={key}>
                        <p>{items.schoolOrCollege}</p>
                        <p>{items.course}</p>
                        <p>{items.yearOfCompletion}</p>
                      </div>
                    )
                  })}
                </div>
                {empty === 1 && (
                  <small style={{ color: 'red', marginLeft: '45px', fontSize: '15px' }}>
                    *Please Enter Your Deatils!
                  </small>
                )}
              </div>
            </div>
            <div className="footer">
              <button
                className="back"
                onClick={() => {
                  setBold(0)
                }}
              >
                Back
              </button>
              <div className="enrollment_logo">{filler1}</div>
              <button className="next_1" onClick={handleEmpty2}>
                Next
              </button>
            </div>
          </div>
        ) : bold === 2 ? (
          <div>
            <div className="details">
              <div className="left">
                <div className="flex-container">
                  <div className="career-history">
                    <InputComponent
                      type="text"
                      placeholder="Company Name"
                      form={formData}
                      setField={setFormData}
                      keyName="company"
                      value={formData.company}
                    />
                    <InputComponent
                      type="text"
                      placeholder="Role when leaving the company"
                      form={formData}
                      setField={setFormData}
                      keyName="leavejob"
                      value={formData.leavejob}
                    />{' '}
                  </div>
                  <div className="button">
                    <button
                      className="button_2"
                      onClick={() => {
                        listDetailHandler()
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="left_flex_contanier">
                  <div className="flex_box">
                    <div className="year-of-comp label">
                      Year of Resignation
                    </div>
                    <InputComponent
                      type="number"
                      placeholder="Year"
                      form={formData}
                      setField={setFormData}
                      keyName="resignation"
                      value={formData.resignation}
                    />
                  </div>
                  <div className="uploads">
                    <fieldset>
                      <label htmlFor="image">
                        {experienceAsset1
                          ? experienceAsset1.substring(0, 10)
                          : 'Upload Image'}
                        <input
                          type={'file'}
                          id="image"
                          onChange={(e) => {
                            setExperienceAsset1(e.target.files[0].name)
                          }}
                          placeholder="Upload Image"
                          accept="image/*"
                        />
                        &ensp;
                        {upload}
                      </label>
                    </fieldset>
                    <fieldset>
                      <label htmlFor="resume">
                        {experienceAsset2
                          ? experienceAsset2.substring(0, 10)
                          : 'Upload PDF'}
                        <input
                          type={'file'}
                          onChange={(e) => {
                            setExperienceAsset2(e.target.files[0].name)
                          }}
                          id="resume"
                          accept=".pdf"
                          placeholder="Upload Resume"
                        />
                        &ensp;
                        {upload}
                      </label>
                    
                      <small>Please ensure the file is under 2 MB</small>
                    </fieldset>
                  </div>
                </div>
              </div>
              <div className="right1">
                <div className="label">
                  Listed Work Experience :
                  {listData.map((item, key) => {
                    return (
                      <div className="experienced-lists" key={key}>
                        <p>{item.companyName}</p>
                        <p>{item.roleWhenLeaving}</p>
                        <p>{item.yearOfresignation}</p>
                      </div>
                    )
                  })}
                </div>
                {empty === 1 && (
                  <small style={{ color: 'red', marginLeft: '45px', fontSize: '15px' }}>
                    *Please Enter Your Deatils!
                  </small>
                )}
              </div>
            </div>
            <div className="footer">
              <button
                className="back"
                onClick={() => {
                  setBold(1)
                }}
              >
                Back
              </button>
              <div className="enrollment_logo">{filler1}</div>
              <button className="next_1" onClick={handleEmpty3}>
                Next
              </button>
            </div>
          </div>
        ) : bold === 3 ? (
          <div>
            <div className="other">
              <div className="other_1">
                <div className="other_div">
                  <div>
                    <label className="label">
                      Medical History & Current Health Issues :
                      <textarea
                        className="text_box"
                        type="text"
                        rows="5"
                        cols="40"
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            medicalstatus: e.target.value,
                          })
                        }}
                      />
                    </label>
                  </div>
                  <div>
                    <div className="label">How do you hear about us?</div>
                    <div>
                      <form className="radio_text">
                        <label className="label_1">
                          Internet&nbsp;
                          <input
                            type="radio"
                            value="internet"
                            name="source"
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
                        <label className="label_1">
                          Print Media&nbsp;
                          <input
                            type="radio"
                            value="media"
                            name="source"
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
                        <label className="label_1">
                          Friends/Relatives&nbsp;
                          <input
                            type="radio"
                            value="friends"
                            name="source"
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
                        <label className="label_1">
                          Events&nbsp;
                          <input
                            type="radio"
                            value="events"
                            name="source"
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
                        <label className="label_1">
                          Others&nbsp;
                          <input
                            type="radio"
                            value="others"
                            name="source"
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
                        {empty === 1 && (
                          <small style={{ color: 'red', marginLeft: '45px', fontSize: '15px' }}>
                            *Please select one!
                          </small>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
                <div className="other_div">
                  <input
                    className="underline label_any"
                    type="text"
                    placeholder="Any other source please specify"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        sourceinfo: e.target.value || 'none',
                      })
                    }}
                  />
                  {empty === 2 && (
                    <small style={{ color: 'red', marginLeft: '45px', fontSize: '15px' }}>
                      *Please Specify!
                    </small>
                  )}
                </div>
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
              </div>
            </div>
            <div className="footer">
              <button
                className="back"
                onClick={() => {
                  setBold(2)
                }}
              >
                Back
              </button>
              <div className="enrollment_logo">{filler1}</div>
              <button className="next_1" onClick={handleEmpty4}>
                Next
              </button>
            </div>
          </div>
        ) : bold === 4 ? (
          <div>
            <div className="other">
              <div className="last_div">
                <div className="details_box">
                  {' '}
                  <div className="details_course_box">
                    <div className="detail_image_box">
                      <img src={currentCourse?.image} alt="" />
                    </div>
                    <div className="current_duration">
                      {currentCourse?.title}&nbsp;
                      {courseDate ? courseDate : ''}
                      <div className="current_fees">{currentCourse?.fees}</div>
                    </div>
                  </div>
                </div>
                <div className="course_details_text">
                  Please select one of these options
                </div>
                <form>
                  <div className="last_radio_button">
                    <label
                      htmlFor=""
                      className="course_details_text radio_button"
                    >
                      <input
                        type="radio"
                        name="resident"
                        value="RESIDENTIAL"
                        disabled={
                          currentCourse.residential === false ? true : false
                        }
                        style={
                          currentCourse.residential === false
                            ? { background: 'grey' }
                            : {}
                        }
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({
                              ...formData,
                              residental: e.target.value,
                            })
                          }
                        }}
                      />{' '}
                      &nbsp; Residential
                    </label>
                    <label
                      htmlFor=""
                      className="course_details_text radio_button"
                    >
                      <input
                        type="radio"
                        name="resident"
                        value="ONLINE"
                        disabled={currentCourse.online === false ? true : false}
                        style={
                          currentCourse.online === false
                            ? { background: 'grey' }
                            : {}
                        }
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({
                              ...formData,
                              residental: e.target.value,
                            })
                          }
                        }}
                      />{' '}
                      &nbsp; Online
                    </label>
                  </div>
                  <div className="last_radio_button">
                    <label
                      htmlFor=""
                      className="course_details_text radio_button"
                    >
                      <input
                        type="radio"
                        name="resident"
                        value="NONRESIDENTIAL"
                        disabled={
                          currentCourse.nonResidential === false ? true : false
                        }
                        style={
                          currentCourse.nonResidential === false
                            ? { background: 'grey' }
                            : {}
                        }
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({
                              ...formData,
                              residental: e.target.value,
                            })
                          }
                        }}
                      />{' '}
                      &nbsp; Non-Residential
                    </label>
                    <label
                      htmlFor=""
                      className="course_details_text radio_button"
                    >
                      <input
                        type="radio"
                        name="resident"
                        value="OFFLINE"
                        disabled={
                          currentCourse.onCampus === false ? true : false
                        }
                        style={
                          currentCourse.onCampus === false
                            ? { background: 'grey' }
                            : {}
                        }
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({
                              ...formData,
                              residental: e.target.value,
                            })
                          }
                        }}
                      />{' '}
                      &nbsp; On campus
                    </label>
                  </div>
                </form>
                {/* <div className='upload_box'> */}
                <div className="course_details_text">
                  Please upload the relevant TYI certificate pre requisite
                  <div className="uploads">
                    <fieldset>
                      <label htmlFor="image">
                        {courseAsset1
                          ? courseAsset1.substring(0, 10)
                          : 'Upload Image'}
                        <input
                          type={'file'}
                          id="image"
                          onChange={(e) =>
                            setCourseAsset1(e.target.files[0].name)
                          }
                          placeholder="Upload Image"
                          accept="image/*"
                        />
                        &ensp;
                        {upload}
                      </label>
                    </fieldset>
                    <fieldset>
                      <label htmlFor="resume">
                        {courseAsset2
                          ? courseAsset2.substring(0, 10)
                          : 'Upload PDF'}
                        <input
                          type={'file'}
                          onChange={(e) =>
                            setCourseAsset2(e.target.files[0].name)
                          }
                          id="resume"
                          accept=".pdf"
                          placeholder="Upload Resume"
                        />
                        &ensp;
                        {upload}
                      </label>
                      
                      <small>Please ensure the file is under 2 MB</small>
                    </fieldset>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>

            <div className="footer">
              <button
                style={{ visibility: 'hidden' }}
                className="back"
                onClick={() => {
                  setBold(3)
                }}
              >
                Back
              </button>
              <div className="enrollment_logo">{filler1}</div>
              <button className="next_1" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        ) : (
          <DisclaimerPolicy
            templateKey={currentCourse?.templateId}
            formData={formData}
            qualificationData={qualificationData}
            listData={listData}
            currentCourse={currentCourse}
            courseAsset1={courseAsset1}
            courseAsset2={courseAsset2}
          />
        )}
      </div>
    </>
  )
}

export default Enrollment
