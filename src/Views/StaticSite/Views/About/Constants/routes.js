import AboutUs from '../Views'
import Blessings from '../Views/blessings'
import OurLegacy from '../Views/our-legacy'



const aboutRoutes = [  {
  Component: AboutUs,
  path: '/overview',
  exact: true,
  id: 'statisSiteAboutUs',
  routePath: '/overview',
  name: 'AboutUs',
}, {
  Component: Blessings,
  path: '/blessings',
  exact: true,
  id: 'statisSiteBlessings',
  routePath: '/blessings',
  name: 'Blessings'
},
{
  Component: OurLegacy,
  path: '/our-legacy',
  exact: true,
  id: 'statisSiteOurLegacy',
  routePath: '/our-legacy',
  name: 'OurLegacy',
},
{
  Component: Blessings,
  path: '/blessings',
  exact: true,
  id: 'statisSiteBlessings',
  routePath: '/blessings',
  name: 'Blessings'
},
]

export default aboutRoutes