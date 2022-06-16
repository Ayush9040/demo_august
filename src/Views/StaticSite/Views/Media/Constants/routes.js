import MediaEvents from '../Views/events'
import MediaGallery from '../Views/media-gallery'
import MediaVideo from '../Views/media-video'
import News from '../Views/news'

const mediaRoutes = [
  {
    Component: MediaGallery,
    path: '/media-gallery',
    exact: true,
    id: 'statisSiteMedia',
    routePath: '/media-gallery',
    name: 'Media',
  },
  {
    Component: News,
    path: '/news',
    exact: true,
    id: 'statisSiteNews',
    routePath: '/news',
    name: 'News',
  },
  {
    Component: MediaEvents,
    path: '/events',
    exact: true,
    id: 'statisSiteEvent',
    routePath: '/events',
    name: 'Event',
  },
  {
    Component: MediaVideo,
    path: '/video-gallery',
    exact: true,
    id: 'statisSiteUnderMediaVideo',
    routePath: '/video-gallery',
    name: 'MediaVideo',
  },
]

export default mediaRoutes