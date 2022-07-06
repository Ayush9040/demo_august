import AlumniGallery from '../Views/alumni-gallery'
import Support from '../Views/support'
//import Seminar from '../Views/upcoming-events'

const alumniRoutes = [
  // {
  //   Component: Seminar,
  //   path: '/upcoming-events',
  //   exact: true,
  //   id: 'statisSiteUnderUpcomingEvents',
  //   routePath: '/upcoming-events',
  //   name: 'Alumni',
  // },
  {
    Component: AlumniGallery,
    path: '/alumni-gallery',
    exact: true,
    id: 'statisSiteUnderAlumniGallery',
    routePath: '/alumni-gallery',
    name: 'AlumniGallery',
  },
  {
    Component: Support,
    path: '/support',
    exact: true,
    id: 'statisSiteUnderSupport',
    routePath: '/support',
    name: 'Support',
  },
]

export default alumniRoutes