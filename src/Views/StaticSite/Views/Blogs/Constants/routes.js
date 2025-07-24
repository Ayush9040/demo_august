import BlogAnother from '../Views/Blog'
import BlogPage from '../Views/blog-page'
import BlogPageNew from '../Views/BlogPageNew'

const blogRoutes = [
  {
    Component: BlogPageNew,
    path: '/',
    exact: true,
    id: 'statisSiteUnderBlogs',
    routePath: '/',
    name: 'Blogs',
  },
  {
    Component: BlogAnother,
    path: '/blog/:blogId',
    exact: true,
    id: 'statisSiteUnderBlog',
    routePath: '/blog/:blogId',
    name: 'Blog',
  },
]
export default blogRoutes