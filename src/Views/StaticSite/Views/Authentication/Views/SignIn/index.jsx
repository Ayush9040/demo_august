import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { loginUserAction } from '../../Auth.actions'
import CommonBtn from '../../../../Components/commonbtn'
import InputComponent from '../../../../Components/InputComponent'
import { mail, lock } from '../../../../assets/icons/icon'
import './style.scss'
import InnerNavComponent from '../../../../Components/InnerNavComponent'

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoggedIn } = useSelector(state=>state.auth)
  const [course, setCourse] = useState()
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  })
  const location = useLocation()

  useEffect(() => {
    setCourse(location?.pathname?.split('/')?.[3])
  }, [location])

  const[Params]= useSearchParams()

  const [selectDate, setSetselectDate] = useState()

  useEffect(() => {
    setSetselectDate(Params.get('date'))
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [isLoggedIn])

  const handleSignIn = () =>{
    dispatch(loginUserAction({
      email: formData.email,
      password: formData.password
    }, navigate))
  }

  const UserNav = {
    title: 'alumni-events',
    color: 'orange',
    menuColor: 'black',
    menuItems: [
    ],
  }

  return (
    <div className="signin-container">
      <InnerNavComponent abc={UserNav} />
      <div className="signin-form">
        <form>
          <h1>Sign In</h1>
          <InputComponent
            icon={mail}
            type="text"
            placeholder="Enter Email"
            form={formData}
            setField={setFormData}
            keyName="email"
          />
          <InputComponent
            icon={lock}
            type="password"
            placeholder="Enter Password"
            form={formData}
            setField={setFormData}
            keyName="password"
          />
          <label className="other-options">
            <div className="remember-me">
              <input type={'checkbox'} />
              &ensp; Remember Me
            </div>
            <div className="forgot-password">Forgot Password ?</div>
          </label>
          <label className="signin-btn">
            <CommonBtn
              text="Sign In"
              buttonAction={handleSignIn}
            />
            <Link to={`/enrollment/${course}/?date=${selectDate}`}>
              <CommonBtn text={'Continue as a guest'} isColor={'#EA4335'} />
            </Link>
          </label>
        </form>
        <div className="social-logins guest">
          <Link to="/user/sign-up">
            <h3>Sign Up</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
