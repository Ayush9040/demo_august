import EditAccount from '../../../Components/EditAccount'
import UserProfile from '../../../Components/UserProfile'
import SignIn from '../Views/SignIn'
import SignUp from '../Views/Signup'

const authRoutes = [
  {
    Component: SignIn,
    path: '/sign-in/*',
    exact: true,
    id: 'statisSiteUnderSignIn',
    routePath: '/sign-in/*',
    name: 'SignIn',
  },
  {
    Component: SignUp,
    path: '/sign-up/*',
    exact: true,
    id: 'statisSiteUnderSignUp',
    routePath: '/sign-up',
    name: 'SignUp',
  },
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