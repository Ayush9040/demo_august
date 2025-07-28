import React, { useEffect, useState, useRef } from 'react'
import Heading from '../../../Components/Heading'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { fetchBlogsData } from '../Blogs.action'
import Pagination from 'react-js-pagination'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import Footer from '../../../Components/Footer'
import dropdown_blog from './images/dropdown_blog.svg'
import img_readArticle from './images/img_readArticle.svg'
import './latestResearches.css'

const latestResearches = () => {
  const [pagination, setPagination] = useState({ page: 1, limit: 1000 })
  const { blogs, count } = useSelector(state => state.blogs)
  const location = useLocation()
  const dispatch = useDispatch()

  // Navigation state
  const [activeNav, setActiveNav] = useState('Latest Researches')
  
  // Header menu state (same as BlogPageNew.jsx)
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
  
  // Extract unique categories, subcategories, and leafcategories from blogs (same as BlogPageNew.jsx)
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

  // Extract unique categories from blogs
  const categories = React.useMemo(() => {
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

  // Fetch blogs data on mount or pagination change
  useEffect(() => {
    dispatch(fetchBlogsData(pagination));
    window.scrollTo(0, 0);
  }, [dispatch, pagination]);

  // Debug: Log menuData to see what categories are being extracted
  useEffect(() => {
    console.log('MenuData in latestResearches:', menuData);
    console.log('Categories found:', menuData.map(cat => cat.name));
    console.log('Total blogs fetched:', blogs?.length || 0);
    console.log('Blogs with categories:', blogs?.filter(blog => blog.categories && blog.categories.length > 0).length || 0);
    console.log('Sample blog categories:', blogs?.slice(0, 3).map(blog => blog.categories?.map(cat => cat.name) || []));
  }, [menuData, blogs]);

  // Filter blogs that belong to Latest Researches category
  const latestResearchesBlogs = React.useMemo(() => {
    const filtered = (blogs || []).filter(blog => 
      (blog.categories || []).some(cat => cat.name === 'Latest Researches')
    );
    console.log('Latest Researches blogs found:', filtered.length);
    console.log('Sample Latest Researches blogs:', filtered.slice(0, 3).map(blog => ({ title: blog.title, categories: blog.categories?.map(cat => cat.name) })));
    return filtered;
  }, [blogs]);

  // Get paginated blogs
  const paginatedBlogs = React.useMemo(() => {
    return latestResearchesBlogs.slice(
      (pagination.page - 1) * 9, 
      pagination.page * 9
    );
  }, [latestResearchesBlogs, pagination]);

  const handlePageChange = (pageNumber) => {
    setPagination({ ...pagination, page: pageNumber, limit: 1000 });
  }
  
  // Helper to format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

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

  // Navigation items
  const navItems = [
    { name: 'Philosophy', hasDropdown: true },
    { name: 'Yoga Techniques', hasDropdown: true },
    { name: 'Yoga Therapy', hasDropdown: true },
    { name: 'Diet & Nutrition', hasDropdown: true },
    { name: 'Mental Wellness', hasDropdown: true },
    { name: 'Latest Researches', hasDropdown: false },
  ];

  const viewBlog = {
    title: 'Latest Researches',
    color: 'orange',
    menuColor: 'orange',
    menuItems: menuData.map(cat => ({
      name: cat.name,
      url: cat.name === "Latest Researches" ? "/blogs/latest-researches" : `/blogs/category/${cat.slug || cat._id}`,
      innerTitle: cat.name.toLowerCase(),
      title: cat.name
    }))
  }

  return (
    <>
      {metaDataObj[location.pathname] && (
        <Helmet title={metaDataObj[location.pathname || '']?.title || ''} />
      )}
      
      {/* Inner Navigation Component */}
      <div>
        <InnerNavComponent abc={viewBlog}/>
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
            ))}
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
      
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="breadcrumb-separator">/</span>
        <span>Latest Researches</span>
      </div>
      
      {/* Latest Researches Content */}
      <div className="latest-researches-container">
        <div className="latest-researches-header">
          <h1 className="latest-researches-title">Latest Researches</h1>
        </div>
        
        {/* Research Cards Grid */}
        <div className="latest-researches-grid">
          {paginatedBlogs.map((blog) => (
            <div className="latest-research-card" key={blog._id}>
              <div className="latest-research-image">
                <div className="latest-research-category">
                  {blog.categories && blog.categories[0] ? blog.categories[0].name : 'Research'}
                </div>
                <img 
                  src={`https://source.unsplash.com/random/600x400/?yoga,${blog._id}`} 
                  alt={blog.title} 
                />
              </div>
              <div className="latest-research-content">
                <h3 className="latest-research-title">{blog.title}</h3>
                <p className="latest-research-excerpt">{blog.excerpt}</p>
                <div className="latest-research-meta">
                  <div className="latest-research-date">
                    {formatDate(blog.createdAt || new Date())}
                  </div>
                  <div className="latest-research-read-time">
                    {blog.meta ? blog.meta.match(/content="(\d+) minutes"/)?.[1] || '10' : '10'} min read
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
                 {/* Pagination */}
         {latestResearchesBlogs.length > 9 && (
           <div className="pagination-container">
             <Pagination
               activePage={pagination.page}
               itemsCountPerPage={9}
               totalItemsCount={latestResearchesBlogs.length}
               pageRangeDisplayed={5}
               onChange={handlePageChange}
               itemClass="page-item"
               linkClass="page-link"
               activeClass="active"
               activeLinkClass="active-link"
             />
           </div>
         )}
        
        {/* Newsletter Subscription */}
        <div className="newsletter-section">
          <h2 className="newsletter-title">Join Our Yoga Community</h2>
          <p className="newsletter-description">
            Subscribe to our newsletter and get the latest updates on yoga practices, wellness tips, and exclusive content delivered to your inbox.
          </p>
          <div className="newsletter-form">
            <input 
              type="email" 
              className="newsletter-input" 
              placeholder="Enter your email address" 
            />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default latestResearches;

