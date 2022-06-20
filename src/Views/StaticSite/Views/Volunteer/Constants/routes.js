import Values from '../Views/values'
import Volunteer from '../Views/volunteer'
import VolunteerJob from '../Views/volunteerJob'

const volunteerRoutes = [ {
  Component: Volunteer,
  path: '/',
  exact: true,
  id: 'statisSiteUnderVolunteer',
  routePath: '/',
  name: 'Volunteer',
},
{
  Component: Values,
  path: '/values',
  exact: true,
  id: 'statisSiteUnderValues',
  routePath: '/values',
  name: 'Values',
},  {
  Component: VolunteerJob,
  path: '/program/:id',
  exact: true,
  id: 'statisSiteUnderVolunteerJob',
  routePath: '/program/:id',
  name: 'VolunteerJob',
},]
export default volunteerRoutes