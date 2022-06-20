import Careers from '../Views/careers'
import SingleJob from '../Views/single-job'

const careerRoutes = [
  {
    Component: Careers,
    path: '/',
    exact: true,
    id: 'statisSiteUnderCareers',
    routePath: '/',
    name: 'Careers',
  },
  {
    Component: SingleJob,
    path: '/job/:jobid',
    exact: true,
    id: 'statisSiteUnderSingleJob',
    routePath: '/job/:jobid',
    name: 'SingleJob',
  },
  
]

export default careerRoutes