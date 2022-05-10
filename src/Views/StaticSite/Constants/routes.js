// import OurLegacyModal from '../Components/OurLegacyModal'
import MadhavJi from '../Views/About/our-legacy/paramhamsa-madhavadas-ji.jsx'
import Yogendra from '../Views/About/our-legacy/shree-yogendra-ji'
import Jayadev from '../Views/About/our-legacy/dr-jayadeva-yogendra.jsx'
import Sitadevi from '../Views/About/our-legacy/smt-sitadevi-ji.jsx'
import Hansaji from '../Views/About/our-legacy/dr-hansaji-yogendra'
import Hirish from '../Views/About/our-legacy/harish-ji'
import Blessings from '../Views/About/blessings'
import AboutUs from '../Views/About/index'
import OurLegacy from '../Views/About/our-legacy'
import Seminar from '../Views/Alumni'
import AlumniGallery from '../Views/Alumni/alumni-gallery'
import Support from '../Views/Alumni/support'
import Courses from '../Views/Courses'
import SingleCourse from '../Views/Courses/course-name'
import TTCCourse from '../Views/Courses/ttc-courses'
import AnnamBramha from '../Views/Donation'
import AnnamBrahmha from '../Views/Donation/annam-brahma'
import Bmcschools from '../Views/Donation/bmcschools'
import Children from '../Views/Donation/children'
import Community from '../Views/Donation/community'
import Police from '../Views/Donation/police'
import Truckasana from '../Views/Donation/truckasana'
import Underprivileged from '../Views/Donation/underprivileged'
import Facilities from '../Views/Facilities'
import FAQ from '../Views/Faq'
import Gifting from '../Views/Gifting'
import Home from '../Views/Home'
import Volunteer from '../Views/Joinourteam'
import Values from '../Views/Joinourteam/values'
import MediaGallery from '../Views/Media'
import MediaEvents from '../Views/Media/events'
import News from '../Views/Media/news'
import MuseumPage from '../Views/Museum/index.jsx'
import YogaTotalHealth from '../Views/Publication'
import Books from '../Views/Publication/books'
import EBooks from '../Views/Publication/e-books'
import library from '../Views/Publication/library'
import Yogasattva from '../Views/Publication/yogasattva'
import Shop from '../Views/Shop'
import BlogPage from '../Views/BlogPage/index.jsx'
import BlogAnother from '../Views/BlogPage/Blog.jsx'

const staticSiteRoutes = [
  {
    Component: Home,
    path: '/',
    exact: true,
    id: 'statisSiteHome',
    routePath: '/',
    name: 'Home',
  },
  {
    Component: Courses,
    path: '/courses',
    exact: true,
    id: 'statisSiteCourses',
    routePath: '/courses',
    name: 'Courses',
  },
  {
    Component: SingleCourse,
    path: '/courses/course-name',
    exact: true,
    id: 'statisSiteCourse',
    routePath: '/courses/course-name',
    name: 'Course',
  },
  {
    Component: TTCCourse,
    path: '/courses/ttc-course',
    exact: true,
    id: 'statisSiteTTC',
    routePath: '/courses/ttc-course',
    name: 'TTC',
  },
  {
    Component: AboutUs,
    path: '/about',
    exact: true,
    id: 'statisSiteAbout',
    routePath: '/about',
    name: 'About',
  },
  {
    Component: OurLegacy,
    path: '/about/our-legacy',
    exact: true,
    id: 'statisSiteOurLegacy',
    routePath: '/about/our-legacy',
    name: 'OurLegacy',
  },
  {
    Component: Blessings,
    path: '/about/blessings',
    exact: true,
    id: 'statisSiteBlessings',
    routePath: '/about/blessings',
    name: 'Blessings',
  },
  {
    Component: Sitadevi,
    path: '/about/our-legacy/smt-sitadevi-ji',
    exact: true,
    id: 'statisSiteSitadeviJi',
    routePath: '/about/our-legacy/smt-sitadevi-ji',
    name: 'SitadeviJi',
  },
  {
    Component: Jayadev,
    path: '/about/our-legacy/dr-jayadeva-yogendra',
    exact: true,
    id: 'statisSiteDrJayadeva',
    routePath: '/about/our-legacy/dr-jayadeva-yogendra',
    name: 'DrJayadeva',
  },
  {
    Component: Hansaji,
    path: '/about/our-legacy/dr-hansaji-yogendra',
    exact: true,
    id: 'statisSiteDrHansaji',
    routePath: '/about/our-legacy/dr-hansaji-yogendra',
    name: 'DrHansaji',
  },
  {
    Component: Hirish,
    path: '/about/our-legacy/harish-ji',
    exact: true,
    id: 'statisSiteHarishJi',
    routePath: '/about/our-legacy/harish-ji',
    name: 'HarishJi',
  },
  {
    Component: MadhavJi,
    path: '/about/our-legacy/paramhamsa-madhavadas-ji',
    exact: true,
    id: 'statisSiteMadhavdasJi',
    routePath: '/about/our-legacy/paramhamsa-madhavadas-ji',
    name: 'MadhavdasJi',
  },
  {
    Component: Yogendra,
    path: '/about/our-legacy/shree-yogendra-ji',
    exact: true,
    id: 'statisSiteYagendraJi',
    routePath: '/about/our-legacy/shree-yogendra-ji',
    name: 'YagendraJi',
  },
  {
    Component: Yogendra,
    path: '/about/our-legacy/shree-yagendra-ji',
    exact: true,
    id: 'statisSiteYagendraJi',
    routePath: '/about/our-legacy/shree-yagendra-ji',
    name: 'YagendraJi',
  },
  {
    Component: YogaTotalHealth,
    path: '/publication',
    exact: true,
    id: 'statisSitePublication',
    routePath: '/publication',
    name: 'Publication',
  },
  {
    Component: Yogasattva,
    path: '/publication/yogasattva',
    exact: true,
    id: 'statisSiteYogasattva',
    routePath: '/publication/yogasattva',
    name: 'Yogasattva',
  },
  {
    Component: Books,
    path: '/publication/books',
    exact: true,
    id: 'statisSiteBooks',
    routePath: '/publication/books',
    name: 'Books',
  },
  {
    Component: EBooks,
    path: '/publication/e-books',
    exact: true,
    id: 'statisSiteEBooks',
    routePath: '/publication/e-books',
    name: 'EBooks',
  },
  {
    Component: library,
    path: '/publication/library',
    exact: true,
    id: 'statisSiteLibrary',
    routePath: '/publication/library',
    name: 'Library',
  },
  {
    Component: MediaGallery,
    path: '/media',
    exact: true,
    id: 'statisSiteMedia',
    routePath: '/media',
    name: 'Media',
  },
  {
    Component: News,
    path: '/media/news',
    exact: true,
    id: 'statisSiteNews',
    routePath: '/media/news',
    name: 'News',
  },
  {
    Component: MediaEvents,
    path: '/media/events',
    exact: true,
    id: 'statisSiteEvent',
    routePath: '/media/events',
    name: 'Event',
  },
  {
    Component: MuseumPage,
    path: '/museum',
    exact: true,
    id: 'statisSiteMuseum',
    routePath: '/museum',
    name: 'Museum',
  },
  {
    Component: Facilities ,
    path: '/facilities',
    exact: true,
    id: 'statisSiteFacilities',
    routePath: '/facilities',
    name: 'Facilities',
  },
  {
    Component: Shop ,
    path: '/shop',
    exact: true,
    id: 'statisSiteShop',
    routePath: '/shop',
    name: 'Shop',
  },
  {
    Component: Gifting,
    path: '/gifting',
    exact: true,
    id: 'statisSiteGifting',
    routePath: '/gifting',
    name: 'Gifting',
  },
  {
    Component: AnnamBramha,
    path: '/donation',
    exact: true,
    id: 'statisSiteDonation',
    routePath: '/donation',
    name: 'Donation',
  },
  {
    Component: AnnamBrahmha,
    path: '/donation/annam-brahma',
    exact: true,
    id: 'statisSiteAnnamBrahma',
    routePath: '/donation/annam-brahma',
    name: 'AnnamBrahma',
  },
  {
    Component: Bmcschools,
    path: '/donation/bmcschools',
    exact: true,
    id: 'statisSiteBMCSchools',
    routePath: '/donation/bmcschools',
    name: 'BMCSchools',
  },
  {
    Component: Children,
    path: '/donation/children',
    exact: true,
    id: 'statisSiteChildren',
    routePath: '/donation/children',
    name: 'Children',
  },
  {
    Component: Community,
    path: '/donation/community',
    exact: true,
    id: 'statisSiteCommunity',
    routePath: '/donation/community',
    name: 'Community',
  },
  {
    Component: Police,
    path: '/donation/police',
    exact: true,
    id: 'statisSitePolice',
    routePath: '/donation/police',
    name: 'Police',
  },
  {
    Component: Truckasana,
    path: '/donation/truckasana',
    exact: true,
    id: 'statisSiteTruckasana',
    routePath: '/donation/truckasana',
    name: 'Truckasana',
  },
  {
    Component: Underprivileged,
    path: '/donation/unprivileged',
    exact: true,
    id: 'statisSiteUnderPrivileged',
    routePath: '/donation/unprivileged',
    name: 'Privileged',
  },
  {
    Component: Seminar,
    path: '/alumni',
    exact: true,
    id: 'statisSiteUnderAlumni',
    routePath: '/alumni',
    name: 'Alumni',
  },
  {
    Component: AlumniGallery,
    path: '/alumni/alumni-gallery',
    exact: true,
    id: 'statisSiteUnderAlumniGallery',
    routePath: '/alumni/alumni-gallery',
    name: 'AlumniGallery',
  },
  {
    Component: Support,
    path: '/alumni/support',
    exact: true,
    id: 'statisSiteUnderSupport',
    routePath: '/alumni/support',
    name: 'Support',
  },
  {
    Component: FAQ,
    path: '/faqs',
    exact: true,
    id: 'statisSiteUnderFAQ',
    routePath: '/faqs',
    name: 'FAQ',
  },
  {
    Component: Volunteer,
    path: '/join-our-team',
    exact: true,
    id: 'statisSiteUnderJoin',
    routePath: '/join-our-team',
    name: 'Join',
  },
  {
    Component: Values,
    path: '/join-our-team/values',
    exact: true,
    id: 'statisSiteUnderValues',
    routePath: '/join-our-team/values',
    name: 'Values',
  },
  {
    Component: FAQ,
    path: '/faq',
    exact: true,
    id: 'statisSiteUnderFAQ',
    routePath: '/faq',
    name: 'FAQ',
  },
  {
    Component: BlogPage ,
    path: '/blogs',
    exact: true,
    id: 'statisSiteUnderBlogs',
    routePath: '/blogs',
    name: 'Blogs',
  },
  {
    Component: BlogAnother ,
    path: '/blogs/blog-name',
    exact: true,
    id: 'statisSiteUnderBlog',
    routePath: '/blogs/blog-name',
    name: 'Blog',
  },
]

export default staticSiteRoutes