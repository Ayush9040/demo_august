import Books from '../Views/books'
import EBooks from '../Views/e-books'
import library from '../Views/library'
import YogaTotalHealth from '../Views/yoga-health'
import Yogasattva from '../Views/yogasattva'


const publicaionRoutes = [
  {
    Component: YogaTotalHealth,
    path: '/yoga-health',
    exact: true,
    id: 'statisSiteYogaHealth',
    routePath: '/yoga-health',
    name: 'YogaHealth',
  },
  {
    Component: Yogasattva,
    path: '/yogasattva',
    exact: true,
    id: 'statisSiteYogasattva',
    routePath: '/yogasattva',
    name: 'Yogasattva',
  },
  {
    Component: Books,
    path: '/books',
    exact: true,
    id: 'statisSiteBooks',
    routePath: '/books',
    name: 'Books',
  },
  {
    Component: EBooks,
    path: '/e-books',
    exact: true,
    id: 'statisSiteEBooks',
    routePath: '/e-books',
    name: 'EBooks',
  },
  {
    Component: library,
    path: '/library',
    exact: true,
    id: 'statisSiteLibrary',
    routePath: '/library',
    name: 'Library',
  },
]

export default publicaionRoutes