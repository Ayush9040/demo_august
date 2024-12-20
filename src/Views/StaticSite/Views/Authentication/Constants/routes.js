import { lazy } from 'react'

const UserProfile = lazy(()=>import('../../UserProfile'))
const EditAccount = lazy(()=>import('../../../Components/EditAccount'))
// import SignUp from '../Views/Signup'
const SignIn = lazy(()=>import('../Views/SignIn'))
const authRoutes = [
  { 
    Component: SignIn,
    path: '/sign-in/*',
    exact: true,
    id: 'statisSiteUnderSignIn',
    routePath: '/sign-in',
    name: 'SignIn',
  },
  // {
  //   Component: SignUp,
  //   path: '/sign-up/*',
  //   exact: true,
  //   id: 'statisSiteUnderSignUp',
  //   routePath: '/sign-up',
  //   name: 'SignUp',
  // },
  {
    Component: UserProfile,
    path: '/profile',
    exact: true,
    id: 'statisSiteUnderProfile',
    routePath: '/profile',
    name: 'Profile',
  },
  {
    Component: EditAccount,
    path: '/edit-account',
    exact: true,
    id: 'statisSiteUnderEditAccount',
    routePath: '/edit-account',
    name: 'EditAccount',
  },
]

export default authRoutes