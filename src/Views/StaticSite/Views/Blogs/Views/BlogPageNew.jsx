import React, { useEffect, useState, useRef } from 'react'
import Heading from '../../../Components/Heading'
import { useSelector,useDispatch } from 'react-redux'
//import { share } from '../../../assets/icons/icon'
import './style.scss'
import SeminarCard from '../../../Components/SeminarCard'
//import CommonBannerNavPrimary from '../../../Components/CommonBannerNavPrimary'
import { Link, useLocation } from 'react-router-dom'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { fetchBlogsData } from '../Blogs.action'
import Pagination from 'react-js-pagination'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import './BlogPageNew.css'
import Footer from '../../../Components/Footer'
import dropdown_blog from './images/dropdown_blog.svg'

const BlogPageNew = () => {

  const [ pagination,setPagination ] = useState({ page:1,limit:10 })
  //const [ pageRange,setPageRange] = useState(5)

  const { blogs, count, blog }=useSelector(state=>state.blogs)
  const location = useLocation()

  const dispatch = useDispatch()

  // Category state
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Header menu state
  const [openMenuCatId, setOpenMenuCatId] = useState(null);
  const [activeMenuSub, setActiveMenuSub] = useState(null);
  const [activeMenuLeaf, setActiveMenuLeaf] = useState(null);
  const [dropdownAlignRight, setDropdownAlignRight] = useState({}); // { [catId]: true/false }

  const menuBtnRefs = useRef([]); // Array of refs for menu buttons

  // Extract unique categories, subcategories, and leafcategories from blogs
  const menuData = React.useMemo(() => {
    const catMap = new Map();
    (blogs || []).forEach(blog => {
      (blog.categories || []).forEach(cat => {
        if (cat && cat._id) {
          if (!catMap.has(cat._id)) {
            catMap.set(cat._id, { ...cat, subcategories: new Map() });
          }
          (blog.subcategories || []).forEach(sub => {
            if (sub && sub._id) {
              if (!catMap.get(cat._id).subcategories.has(sub._id)) {
                catMap.get(cat._id).subcategories.set(sub._id, { ...sub, leafcategories: new Map() });
              }
              (blog.leafcategories || []).forEach(leaf => {
                if (leaf && leaf._id) {
                  catMap.get(cat._id).subcategories.get(sub._id).leafcategories.set(leaf._id, leaf);
                }
              });
            }
          });
        }
      });
    });
    // Convert to array structure
    return Array.from(catMap.values()).map(cat => ({
      ...cat,
      subcategories: Array.from(cat.subcategories.values()).map(sub => ({
        ...sub,
        leafcategories: Array.from(sub.leafcategories.values())
      }))
    })).reverse();
  }, [blogs]);

  // Extract blogs for a given leafcategory id
  const getBlogsForLeaf = (leafId) =>
    (blogs || []).filter(blog =>
      (blog.leafcategories || []).some(leaf => leaf._id === leafId)
    );

  useEffect(() => {
    dispatch(fetchBlogsData(pagination));
    // Only scroll to top on pagination change, not on category change
    // window.scrollTo(0, 0); // Remove or comment this out to prevent scroll on category change
  }, [pagination]);

  // Filter blogs by selected category
  const filteredBlogs = selectedCategory === 'all'
    ? blogs
    : blogs.filter(blog =>
        (blog.categories || []).some(cat => cat._id === selectedCategory)
      );

  // Pagination for filtered blogs
  const paginatedBlogs = selectedCategory === 'all'
    ? filteredBlogs.slice((pagination.page - 1) * pagination.limit, pagination.page * pagination.limit)
    : filteredBlogs;

  // useEffect(()=>{
  //   window.innerWidth<900 ? setPageRange(1):setPageRange(5)
  // },[ window.innerWidth ])

  const viewBlog = {
    title: 'Blogs',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }

  const handlePageChange = (pageNumber) => {
    pageNumber!==1 ? setPagination({ ...pagination,page:pageNumber, limit:9 }):setPagination({ ...pagination,page:pageNumber, limit:10 })
  }
  
  // Helper to format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Split blogs for sections (mock logic, adjust as needed)
  const featuredStories = blogs?.slice(0, 5) || [];
  const popularArticles = blogs?.slice(5, 8) || [];
  const recentArticles = blogs || [];

  // Helper to check if dropdown should align right
  const handleDropdownOpen = (catId, btnRef) => {
    setOpenMenuCatId(openMenuCatId === catId ? null : catId);
    setActiveMenuSub(null);
    setActiveMenuLeaf(null);
    setTimeout(() => {
      if (btnRef.current) {
        const btnRect = btnRef.current.getBoundingClientRect();
        const dropdownWidth = 900; // estimate or measure
        if (btnRect.left + dropdownWidth > window.innerWidth) {
          setDropdownAlignRight(prev => ({ ...prev, [catId]: true }));
        } else {
          setDropdownAlignRight(prev => ({ ...prev, [catId]: false }));
        }
      }
    }, 0);
  };

  return (
    <>
      {metaDataObj[location.pathname] && (
        <Helmet title={metaDataObj[location.pathname || '']?.title || ''} />
      )}
      <div>
      <InnerNavComponent abc={viewBlog}/>
      <div></div>
      </div>
      {/* Header Menu Bar */}
      <div className="blog-header-menu-bar-centered">
        <div className="blog-header-menu-bar-inner">
          {menuData.map((cat, idx) => (
            cat.name === 'Latest Researches' ? (
              <button
                key={cat._id}
                className="blog-header-menu-btn"
                onClick={() => window.location.href = '/latest-researches'}
              >
                {cat.name}
              </button>
            ) : (
              <div
                className={`blog-header-menu-dropdown${dropdownAlignRight[cat._id] ? ' open-right' : ''}`}
                key={cat._id}
              >
                <button
                  ref={el => menuBtnRefs.current[idx] = el}
                  className={`blog-header-menu-btn${openMenuCatId === cat._id ? ' active' : ''}`}
                  onClick={e => {
                    e.preventDefault();
                    handleDropdownOpen(cat._id, { current: menuBtnRefs.current[idx] });
                  }}
                >
                  {cat.name} <span className="dropdown-arrow"><img src={dropdown_blog} alt="arrow-down" /></span>
                </button>
                {openMenuCatId === cat._id && cat.subcategories.length > 0 && (
                  <div
                    className="blog-header-menu-dropdown-content-centered"
                  >
                    <div className="blog-header-menu-dropdown-content-inner">
                      {/* Subcategories column */}
                      <div className="blog-header-menu-subcat-col">
                        {cat.subcategories.map(sub => (
                          <div
                            key={sub._id}
                            className={`blog-header-menu-sub-item${activeMenuSub === sub._id ? ' active' : ''}`}
                            onClick={e => {
                              e.stopPropagation();
                              setActiveMenuSub(sub._id);
                              setActiveMenuLeaf(null);
                            }}
                          >
                            <div className="blog-header-menu-sub-title">{sub.name}</div>
                            <div className="blog-header-menu-sub-desc">{sub.desc}</div>
                          </div>
                        ))}
                      </div>
                      {/* Leafcategories column */}
                      {activeMenuSub && cat.subcategories.find(s => s._id === activeMenuSub)?.leafcategories.length > 0 && (
                        <div className="blog-header-menu-leafcat-col">
                          {cat.subcategories.find(s => s._id === activeMenuSub).leafcategories.map(leaf => (
                            <div
                              key={leaf._id}
                              className={`blog-header-menu-leaf-item${activeMenuLeaf === leaf._id ? ' active' : ''}`}
                              onClick={e => {
                                e.stopPropagation();
                                setActiveMenuLeaf(leaf._id);
                              }}
                            >
                              {leaf.name}
                            </div>
                          ))}
                        </div>
                      )}
                      {/* Blogs column */}
                      {activeMenuLeaf && (
                        <div className="blog-header-menu-blogs-col">
                          {getBlogsForLeaf(activeMenuLeaf).map(blog => (
                            <div key={blog._id} className="blog-header-menu-blog-item">
                              <div className="blog-header-menu-blog-title">{blog.title}</div>
                              <div className="blog-header-menu-blog-excerpt">{blog.excerpt}</div>
                            </div>
                          ))}
                          <div className="blog-header-menu-seeall">See all Blogs &rarr;</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          ))}
        </div>
      </div>
      <div className="blog-hero-section">
        <div className="blog-hero-overlay">
          <h1 className="blog-hero-title">Yoga Resources and insights</h1>
          <div className="blog-hero-desc">
            <p>Explore insightful articles, timeless practices, and wellness wisdom to elevate your daily life.</p>
          </div>
        </div>
      </div>
      <div className="blog-page-new">
      
        <div className="blog-featured-section">
          <h2 className="blog-section-title">Featured stories</h2>

            <div className="partition-line"></div>

          <div className="blog-featured-grid">
            {/* Main large card */}
            {featuredStories[0] && (
              <div className="blog-featured-main-card">
                <img className="blog-featured-main-img" src={featuredStories[0].coverImage} alt={featuredStories[0].title} />
                <div className="blog-featured-main-content">
                  <h3 className="blog-featured-main-title">{featuredStories[0].title}</h3>
                  <p className="blog-featured-main-excerpt">{featuredStories[0].excerpt}</p>
                  <div className="blog-featured-main-meta">
                    <span>{formatDate(featuredStories[0].createdAt)}</span>
                    {featuredStories[0].timeDuration && <span>• {featuredStories[0].timeDuration} mins</span>}
                  </div>
                </div>
              </div>
            )}
            {/* Vertical list of small cards */}
            <div className="blog-featured-side-list">
              {featuredStories.slice(1, 5).map((item, idx) => (
                <div className="blog-featured-side-card" key={item._id || idx}>
                  <img className="blog-featured-side-img" src={item.coverImage} alt={item.title} />
                  <div className="blog-featured-side-content">
                    <h4 className="blog-featured-side-title">{item.title}</h4>
                    <p className="blog-featured-side-desc">{featuredStories[0].excerpt}</p>
                    <div className="blog-featured-side-meta">
                      <span>{formatDate(item.createdAt)}</span>
                      {item.timeDuration && <span>• {item.timeDuration} mins</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="blog-popular-section">
          <h2 className="blog-section-title">Popular articles</h2>

          <div className="partition-line"></div>
          
          <div className="blog-popular-list">
            {popularArticles.map((item, idx) => (
              <div className="blog-card blog-popular-card" key={item._id || idx}>
                <img className="blog-card-img" src={item.coverImage} alt={item.title} />
                <div className="blog-card-content">
                  <h3 className="blog-card-title">{item.title}</h3>
                  <p className="blog-card-excerpt">{item.excerpt}</p>
                  <div className="blog-card-meta">
                    <span>{formatDate(item.createdAt)}</span>
                    {item.timeDuration && <span>• {item.timeDuration} min</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="blog-recent-section">
          <h2 className="blog-section-title">Recent Articles</h2>
          {/* Dynamic Category Tags from blogs */}
          <div className="blog-tags">
            <button
              className={`blog-tag${selectedCategory === 'all' ? ' active' : ''}`}
              onClick={e => { e.preventDefault(); setSelectedCategory('all'); setPagination({ ...pagination, page: 1 }); }}
            >
              All
            </button>
            {menuData.map(cat => (
              <div key={cat._id} className="blog-tag-dropdown">
                <button
                  className={`blog-tag${selectedCategory === cat._id ? ' active' : ''}`}
                  onClick={e => { e.preventDefault(); setSelectedCategory(cat._id); setPagination({ ...pagination, page: 1 }); }}
                >
                  {cat.name} <span className="dropdown-arrow">▼</span>
                </button>
                {openMenuCatId === cat._id && cat.subcategories.length > 0 && (
                  <div className="blog-tag-dropdown-content">
                    {cat.subcategories.map(sub => (
                      <div
                        key={sub._id}
                        className={`blog-tag-sub-item${selectedCategory === sub._id ? ' active' : ''}`}
                        onClick={e => { e.preventDefault(); setSelectedCategory(sub._id); setPagination({ ...pagination, page: 1 }); }}
                      >
                        {sub.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="blog-recent-list">
            {paginatedBlogs.map((item, idx) => (
              <div className="blog-card blog-recent-card" key={item._id || idx}>
                <img className="blog-card-img" src={item.coverImage} alt={item.title} />
                <div className="blog-card-content">
                  {/* Category label */}
                  {item.categories && item.categories[0] && (
                    <span className="blog-card-category">{item.categories[0].name}</span>
                  )}
                  <h3 className="blog-card-title">{item.title}</h3>
                  <p className="blog-card-excerpt">{item.excerpt}</p>
                  <div className="blog-card-meta">
                    <span>{formatDate(item.createdAt)}</span>
                    {item.timeDuration && <span> • {item.timeDuration} mins</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination only for 'All' */}
          {selectedCategory === 'all' && (
            <div className="blog-pagination">
              <Pagination
                activePage={pagination.page}
                itemsCountPerPage={pagination.limit}
                totalItemsCount={filteredBlogs.length}
                pageRangeDisplayed={5}
                onChange={pageNumber => setPagination({ ...pagination, page: pageNumber })}
                innerClass="pagination-list"
                itemClass="pagination-item"
                linkClass="pagination-link"
              />
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="blog-newsletter-section">
          <div className="newsletter-box">
            <h3>Join Our Yoga Community</h3>
            <div className="newsletter-box-desc">
              <p>Subscribe to our newsletter and get the latest updates on yoga practices, wellness tips, and exclusive content delivered to your inbox.</p>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" className="newsletter-input" />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BlogPageNew

