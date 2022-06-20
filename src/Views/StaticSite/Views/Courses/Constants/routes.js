//import BrowseCourses from '../../../../Components/BrowseCourses/BrowseCourses'
import BrowseCourses from '../Views/browse-courses'
import SingleCourse from '../Views/course-name'
import Courses from '../Views/course-page'

const courseRoutes = [
  {
    Component: Courses,
    path: '/',
    exact: true,
    id: 'statisSiteCourses',
    routePath: '/',
    name: 'Courses',
  },
  {
    Component: BrowseCourses,
    path: '/browse/:type',
    exact: true,
    id: 'statisSiteBrowse',
    routePath: '/browse/:type',
    name: 'Browse',
  },
  {
    Component: SingleCourse,
    path: '/course/:courseId',
    exact: true,
    id: 'statisSiteCourse',
    routePath: '/course/:courseId',
    name: 'Course',
  },
]

export default courseRoutes