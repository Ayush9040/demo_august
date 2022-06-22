import AboutUs from '../Views/overview'
import Blessings from '../Views/blessings'
import OurLegacy from '../Views/our-legacy'
import OurLegacyModal from '../../../Components/OurLegacyModal'



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
{
  Component: OurLegacyModal,
  path: '/our-legacy/:name',
  exact: true,
  id: 'statisSiteOurLegacyModal',
  routePath: '/our-legacy/:name',
  name: 'OurLegacyModal',
},
]

export default aboutRoutes