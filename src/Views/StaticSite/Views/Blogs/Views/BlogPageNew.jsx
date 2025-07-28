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
import img_readArticle from './images/img_readArticle.svg'

const BlogPageNew = () => {

  const [ pagination,setPagination ] = useState({ page:1,limit:1000 })
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
  
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileMenuView, setMobileMenuView] = useState('categories'); // 'categories', 'subcategories', 'blogs'
  const [selectedMobileCategory, setSelectedMobileCategory] = useState(null);
  const [selectedMobileSubcategory, setSelectedMobileSubcategory] = useState(null);

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
    // Convert to array structure and sort with Philosophy first, then reverse the rest
    const categoriesArray = Array.from(catMap.values()).map(cat => ({
      ...cat,
      subcategories: Array.from(cat.subcategories.values()).map(sub => ({
        ...sub,
        leafcategories: Array.from(sub.leafcategories.values())
      }))
    }));
    
    // Sort to put Philosophy first, Latest Researches last, then reverse the rest
    const sortedArray = categoriesArray.sort((a, b) => {
      if (a.name === 'Philosophy') return -1;
      if (b.name === 'Philosophy') return 1;
      if (a.name === 'Latest Researches') return 1;
      if (b.name === 'Latest Researches') return -1;
      return 0;
    });
    
    // Reverse everything except Philosophy and Latest Researches
    const philosophy = sortedArray.find(cat => cat.name === 'Philosophy');
    const latestResearches = sortedArray.find(cat => cat.name === 'Latest Researches');
    const otherCategories = sortedArray.filter(cat => cat.name !== 'Philosophy' && cat.name !== 'Latest Researches').reverse();
    
    return [philosophy, ...otherCategories, latestResearches].filter(Boolean);
  }, [blogs]);

  // Extract blogs for a given leafcategory id with complete hierarchy filtering
  const getBlogsForLeaf = (leafId, categoryId, subcategoryId) =>
    (blogs || []).filter(blog => {
      // Check if blog has the selected category
      const hasCategory = (blog.categories || []).some(cat => cat._id === categoryId);
      
      // Check if blog has the selected subcategory
      const hasSubcategory = (blog.subcategories || []).some(sub => sub._id === subcategoryId);
      
      // Check if blog has the selected leaf category
      const hasLeafCategory = (blog.leafcategories || []).some(leaf => leaf._id === leafId);
      
      // Return true only if blog has ALL three: category, subcategory, and leaf category
      return hasCategory && hasSubcategory && hasLeafCategory;
    });

  // Extract unique categories for blog tags (no dropdowns)
  const uniqueCategories = React.useMemo(() => {
    const map = new Map();
    (blogs || []).forEach(blog => {
      (blog.categories || []).forEach(cat => {
        if (cat && cat._id && !map.has(cat._id)) {
          map.set(cat._id, cat);
        }
      });
    });
    return Array.from(map.values());
  }, [blogs]);

  // Only call fetchBlogsData on mount or pagination change
  useEffect(() => {
    dispatch(fetchBlogsData(pagination));
    // Only scroll to top on pagination change, not on category change
  }, [dispatch, pagination]);

  // Featured and Popular always use the full blogs array
  const featuredStories = blogs?.slice(0, 5) || [];
  const popularArticles = blogs?.slice(5, 8) || [];

  // Recent Articles uses filteredBlogs - show only 12 items per page
  const filteredBlogs = selectedCategory === 'all'
    ? blogs
    : blogs.filter(blog =>
        (blog.categories || []).some(cat => cat._id === selectedCategory)
      );
  const paginatedBlogs = filteredBlogs.slice((pagination.page - 1) * 12, pagination.page * 12);

  // useEffect(()=>{
  //   window.innerWidth<900 ? setPageRange(1):setPageRange(5)
  // },[ window.innerWidth ])

  const innerNavProps = {
    title: 'blogs',
    color: 'orange',
    menuColor: 'orange',
    menuItems: menuData.map(cat => ({
      name: cat.name,
      url: cat.name === "Latest Researches" ? "/blogs/latest-researches" : `/blogs/category/${cat.slug || cat._id}`,
      innerTitle: cat.name.toLowerCase(),
      title: cat.name
    }))
  }

  const handlePageChange = (pageNumber) => {
    setPagination({ ...pagination, page: pageNumber, limit: 1000 })
  }
  
  // Helper to format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  // Split blogs for sections (mock logic, adjust as needed)
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

  // Mobile menu handlers
  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
    setMobileMenuView('categories');
    setSelectedMobileCategory(null);
    setSelectedMobileSubcategory(null);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    setMobileMenuView('categories');
    setSelectedMobileCategory(null);
    setSelectedMobileSubcategory(null);
  };

  const handleMobileCategoryClick = (category) => {
    setSelectedMobileCategory(category);
    setMobileMenuView('subcategories');
  };

  const handleMobileSubcategoryClick = (subcategory) => {
    setSelectedMobileSubcategory(subcategory);
    setMobileMenuView('blogs');
  };

  const handleMobileBackClick = () => {
    if (mobileMenuView === 'blogs') {
      setMobileMenuView('subcategories');
      setSelectedMobileSubcategory(null);
    } else if (mobileMenuView === 'subcategories') {
      setMobileMenuView('categories');
      setSelectedMobileCategory(null);
    }
  };

  return (
    <>
      {metaDataObj[location.pathname] && (
        <Helmet title={metaDataObj[location.pathname || '']?.title || ''} />
      )}
      <div>
      <InnerNavComponent abc={innerNavProps}/>
      <div></div>
      </div>
             {/* Header Menu Bar */}
       <div className="blog-header-menu-bar-centered">
         <div className="blog-header-menu-bar-inner">
           {/* Desktop Navigation (above 768px) */}
           <div className="blog-header-menu-desktop">
             {menuData.map((cat, idx) => (
               <div
                 className={`blog-header-menu-dropdown${dropdownAlignRight[cat._id] ? ' open-right' : ''}`}
                 key={cat._id}
               >
                 <button
                   ref={el => menuBtnRefs.current[idx] = el}
                   className={`blog-header-menu-btn${openMenuCatId === cat._id ? ' active' : ''}${cat.name !== 'Latest Researches' ? ' has-dropdown' : ''}`}
                   onClick={e => {
                     e.preventDefault();
                     cat.name === 'Latest Researches' 
                       ? window.location.href = '/latest-researches'
                       : handleDropdownOpen(cat._id, { current: menuBtnRefs.current[idx] });
                   }}
                 >
                   {cat.name} {cat.name !== 'Latest Researches' && <span className="dropdown-arrow"><img src={dropdown_blog} alt="arrow-down" /></span>}
                 </button>
                 {openMenuCatId === cat._id && cat.subcategories.length > 0 && (
                   <div className="blog-header-menu-dropdown-content-centered">
                     <div className="blog-header-menu-dropdown-content-inner">
                       {/* Subcategories column */}
                       <div className="blog-header-menu-subcat-col">
                         {cat.subcategories.slice().reverse().map(sub => (
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
                            <div className="blog-header-menu-leafcat-title">
                              {cat.subcategories.find(s => s._id === activeMenuSub)?.name}
                            </div>
                            {cat.subcategories.find(s => s._id === activeMenuSub).leafcategories.slice().reverse().map(leaf => (
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
                            <div className="blog-header-menu-blogs-title">
                              {cat.subcategories.find(s => s._id === activeMenuSub)?.leafcategories.find(l => l._id === activeMenuLeaf)?.name}
                            </div>
                            {getBlogsForLeaf(activeMenuLeaf, cat._id, activeMenuSub).slice().reverse().map(blog => (
                              <div key={blog._id} className="blog-header-menu-blog-item">
                                <div className="blog-header-menu-blog-title">{blog.title}</div>
                                <div className="blog-header-menu-blog-excerpt">Read Article<img src={img_readArticle} style={{marginLeft: '5px'}} /></div>
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
             )}
           </div>
           
                       {/* Mobile Navigation (below 768px) */}
            <div className="blog-header-menu-mobile">
              <button className="blog-header-menu-mobile-btn" onClick={handleMobileMenuOpen}>
                All category <span className="dropdown-arrow"><img src={dropdown_blog} alt="arrow-down" /></span>
              </button>
            </div>
                  </div>
       </div>
       
       {/* Mobile Menu Modal/Drawer */}
       {isMobileMenuOpen && (
         <div className="mobile-menu-overlay" onClick={handleMobileMenuClose}>
           <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
             {/* Back Button (not in categories view) */}
             {mobileMenuView !== 'categories' && (
               <button className="mobile-menu-back" onClick={handleMobileBackClick}>
                 ← Back
               </button>
             )}
             
             {/* Header */}
             <div className="mobile-menu-header">
               <div className="mobile-menu-title">
                 {mobileMenuView === 'categories' && 'All category'}
                 {mobileMenuView === 'subcategories' && selectedMobileCategory?.name}
                 {mobileMenuView === 'blogs' && selectedMobileSubcategory?.name}
               </div>
               <button className="mobile-menu-close" onClick={handleMobileMenuClose}>
                 ✕
               </button>
             </div>
             
             {/* Search Bar (only in categories view) */}
             {mobileMenuView === 'categories' && (
               <div className="mobile-menu-search">
                 <input type="text" placeholder="Search blogs" className="mobile-search-input" />
                 <button className="mobile-search-btn">Search</button>
               </div>
             )}
             
             {/* Content */}
             <div className="mobile-menu-content">
               {mobileMenuView === 'categories' && (
                 <div className="mobile-categories-list">
                   {menuData.map(cat => (
                     <div 
                       key={cat._id} 
                       className="mobile-category-item"
                       onClick={() => cat.name === 'Latest Researches' 
                         ? window.location.href = '/latest-researches'
                         : handleMobileCategoryClick(cat)
                       }
                     >
                       <span className="mobile-category-name">{cat.name}</span>
                       {cat.name !== 'Latest Researches' && (
                         <span className="mobile-category-arrow">→</span>
                       )}
                     </div>
                   ))}
                 </div>
               )}
               
               {mobileMenuView === 'subcategories' && selectedMobileCategory && (
                 <div className="mobile-subcategories-list">
                   {selectedMobileCategory.subcategories.map(sub => (
                     <div 
                       key={sub._id} 
                       className="mobile-subcategory-item"
                       onClick={() => handleMobileSubcategoryClick(sub)}
                     >
                       <span className="mobile-subcategory-name">{sub.name}</span>
                       <span className="mobile-subcategory-arrow">→</span>
                     </div>
                   ))}
                 </div>
               )}
               
               {mobileMenuView === 'blogs' && selectedMobileSubcategory && (
                 <div className="mobile-blogs-list">
                   {selectedMobileCategory.subcategories.find(sub => sub._id === selectedMobileSubcategory._id)?.leafcategories?.map(leaf => 
                     getBlogsForLeaf(leaf._id, selectedMobileCategory._id, selectedMobileSubcategory._id).map(blog => (
                       <div key={blog._id} className="mobile-blog-item">
                         <div className="mobile-blog-title">{blog.title}</div>
                         <div className="mobile-blog-link">Read Article →</div>
                       </div>
                     ))
                   ).flat() || []}
                   <div className="mobile-see-all-blogs">See all Blogs →</div>
                 </div>
               )}
             </div>
           </div>
         </div>
       )}
       
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
              type="button"
              onClick={e => {
                e.preventDefault();
                setSelectedCategory('all');
                setPagination({ ...pagination, page: 1 });
              }}
            >
              All
            </button>
            {uniqueCategories.slice().reverse().map(cat => (
              <button
                key={cat._id}
                className={`blog-tag${selectedCategory === cat._id ? ' active' : ''}`}
                type="button"
                onClick={e => {
                  e.preventDefault();
                  setSelectedCategory(cat._id);
                  setPagination({ ...pagination, page: 1 });
                }}
              >
                {cat.name}
              </button>
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
          {/* Pagination for all categories */}
          <div className="blog-pagination">
            <Pagination
              activePage={pagination.page}
              itemsCountPerPage={12}
              totalItemsCount={filteredBlogs.length}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              innerClass="pagination-list"
              itemClass="pagination-item"
              linkClass="pagination-link"
            />
          </div>
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

