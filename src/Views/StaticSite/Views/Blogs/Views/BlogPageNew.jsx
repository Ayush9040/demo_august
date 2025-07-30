import React, { useEffect, useState, useRef } from 'react'
import Heading from '../../../Components/Heading'
import { useSelector,useDispatch } from 'react-redux'
import './style.scss'
import SeminarCard from '../../../Components/SeminarCard'
import { Link, useLocation } from 'react-router-dom'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { fetchBlogsData } from '../Blogs.action'
import Pagination from 'react-js-pagination'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import './BlogPageNew.css'
import './latestResearches.css'
import Footer from '../../../Components/Footer'
import dropdown_blog from './images/dropdown_blog.svg'
import img_readArticle from './images/img_readArticle.svg'
import axios from 'axios'
import { cmsBaseDomain } from '../../../../../Constants/appSettings'
import Arrow_Left from './images/Arrow_Left.svg'
import Arrow_Right from './images/Arrow_Right.svg'

const BlogPageNew = () => {
  const [pagination, setPagination] = useState({ page: 1, limit: 10 }); // page 1 = 10 items
  const { blogs, count, blog } = useSelector(state => state.blogs);
  const location = useLocation();
  const dispatch = useDispatch();

  // Category state
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [contentType, setContentType] = useState('regular');
  const [selectedCategoryData, setSelectedCategoryData] = useState(null);
  
  // New state for categories from API
  const [categoriesData, setCategoriesData] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  // Dynamic blog fetching state
  const [categoryBlogs, setCategoryBlogs] = useState([]);
  const [categoryBlogsLoading, setCategoryBlogsLoading] = useState(false);
  const [categoryBlogsPagination, setCategoryBlogsPagination] = useState({ page: 1, limit: 10, total: 0 }); // page 1 = 10 items

  // Header menu state
  const [openMenuCatId, setOpenMenuCatId] = useState(null);
  const [activeMenuSub, setActiveMenuSub] = useState(null);
  const [activeMenuLeaf, setActiveMenuLeaf] = useState(null);
  const [dropdownAlignRight, setDropdownAlignRight] = useState({});
  
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileMenuView, setMobileMenuView] = useState('categories');
  const [selectedMobileCategory, setSelectedMobileCategory] = useState(null);
  const [selectedMobileSubcategory, setSelectedMobileSubcategory] = useState(null);

  const menuBtnRefs = useRef([]);
  const scrollRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Add state for recent articles blogs and loading
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [recentBlogsLoading, setRecentBlogsLoading] = useState(false);
  const [recentBlogsTotal, setRecentBlogsTotal] = useState(0);
  const [recentBlogsPage, setRecentBlogsPage] = useState(1);

  // Add state for featured stories
  const [featuredStories, setFeaturedStories] = useState([]);
  const [featuredStoriesLoading, setFeaturedStoriesLoading] = useState(false);

  // Add state for popular articles
  const [popularArticles, setPopularArticles] = useState([]);
  const [popularArticlesLoading, setPopularArticlesLoading] = useState(false);

  // Extract unique categories, subcategories, and leafcategories from API data
  const menuData = React.useMemo(() => {
    if (categoriesLoading || !categoriesData.length) {
      return [];
    }
    
    return categoriesData.map(cat => {
      const validSubcategories = (cat.subcategories || []).filter(sub => {
        return sub && sub.name; // Only check if subcategory has a name
      });
      
      return {
        ...cat,
        subcategories: validSubcategories
      };
    });
  }, [categoriesData, categoriesLoading]);

  // Helper function to check if a category should have dropdown functionality
  const hasValidSubcategories = (category) => {
    if (!category.subcategories || category.subcategories.length === 0) {
      return false;
    }
    
    // Check if there's at least one subcategory with a name
    return category.subcategories.some(sub => sub && sub.name);
  };

  // Function to fetch blogs for a specific category
  const fetchCategoryBlogs = async (categoryId, page = 1) => {
    setCategoryBlogsLoading(true);
    try {
      // Calculate progressive limit: page 1 = 10, page 2 = 20, page 3 = 30, etc.
      const response = await axios.get(`${cmsBaseDomain}/cms-api/v1/post?page=${page}&limit=${page * 10}&category=${categoryId}`);
      setCategoryBlogs(response.data.data || []);
      setCategoryBlogsPagination({ 
        page, 
        limit: page * 10,
        total: response.data.total || 0
      });
    } catch (error) {
      console.error('Error fetching category blogs:', error);
      setCategoryBlogs([]);
    } finally {
      setCategoryBlogsLoading(false);
    }
  };

  // Function to handle category selection for non-dropdown categories
  const handleCategorySelection = (category) => {
    setContentType('category-specific');
    setSelectedCategoryData(category);
    setSelectedCategory(category._id);
    fetchCategoryBlogs(category._id, 1);
  };

  // Handle pagination for category-specific blogs
  const handleCategoryPageChange = (pageNumber) => {
    if (selectedCategoryData) {
      fetchCategoryBlogs(selectedCategoryData._id, pageNumber);
    }
  };

  // Fetch blogs for selected category (Recent Articles section)
  const fetchRecentBlogs = async (categoryId = null, page = 1, limit = 10) => {
    setRecentBlogsLoading(true);
    try {
      let url = `${cmsBaseDomain}/post?page=${page}&limit=${limit}`;
      if (categoryId && categoryId !== 'all') {
        url += `&category=${categoryId}`;
      }
      const response = await axios.get(url);
      setRecentBlogs(response.data.data || []);
      setRecentBlogsTotal(response.data.count || 0); // Use count from response
    } catch (error) {
      setRecentBlogs([]);
      setRecentBlogsTotal(0);
    } finally {
      setRecentBlogsLoading(false);
    }
  };

  // Fetch featured stories from API
  const fetchFeaturedStories = async () => {
    setFeaturedStoriesLoading(true);
    try {
      const response = await axios.get(
        'https://tyi-test.theyogainstitute.org/cms-api/v1/post?page=1&limit=5&feature=true'
      );
      setFeaturedStories(response.data.data || []);
    } catch (error) {
      setFeaturedStories([]);
    } finally {
      setFeaturedStoriesLoading(false);
    }
  };

  // Fetch popular blogs from API
  const fetchPopularArticles = async () => {
    setPopularArticlesLoading(true);
    try {
      const response = await axios.get(
        'https://tyi-test.theyogainstitute.org/cms-api/v1/post?page=1&limit=3&popular=true'
      );
      setPopularArticles(response.data.data || []);
    } catch (error) {
      setPopularArticles([]);
    } finally {
      setPopularArticlesLoading(false);
    }
  };

  // Fetch on category or page change
  useEffect(() => {
    fetchRecentBlogs(selectedCategory, recentBlogsPage, 10);
  }, [selectedCategory, recentBlogsPage]);

  // When category changes, reset to page 1
  useEffect(() => {
    setRecentBlogsPage(1);
  }, [selectedCategory]);

  useEffect(() => {
  fetchFeaturedStories();
}, []);

  useEffect(() => {
    fetchPopularArticles();
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      if (!scrollRef.current) return;
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft + scrollRef.current.offsetWidth < scrollRef.current.scrollWidth
      );
    };
    checkScroll();
    scrollRef.current?.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      scrollRef.current?.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [menuData]);

  const scrollByOne = (dir) => {
    if (!scrollRef.current) return;
    const btns = scrollRef.current.querySelectorAll('.blog-header-menu-btn');
    if (!btns.length) return;
    
    const container = scrollRef.current;
    const currentScroll = container.scrollLeft;
    const itemWidth = btns[0]?.offsetWidth || 0;
    const gapWidth = 32;
    const scrollAmount = (itemWidth + gapWidth) * 6;
    
    if (dir === 'right') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const fetchCategories = async () => {
    try {
      setCategoriesLoading(true);
      const response = await axios.get(`${cmsBaseDomain}/category`);
      const categories = response.data;
      
      const sortedCategories = categories.sort((a, b) => {
        if (a.name === 'Philosophy') return -1;
        if (b.name === 'Philosophy') return 1;
        if (a.name === 'Latest Researches') return 1;
        if (b.name === 'Latest Researches') return -1;
        return 0;
      });
      
      const philosophy = sortedCategories.find(cat => cat.name === 'Philosophy');
      const latestResearches = sortedCategories.find(cat => cat.name === 'Latest Researches');
      const otherCategories = sortedCategories.filter(cat => cat.name !== 'Philosophy' && cat.name !== 'Latest Researches').reverse();
      
      const finalCategories = [philosophy, ...otherCategories, latestResearches].filter(Boolean);
      setCategoriesData(finalCategories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setCategoriesData([]);
    } finally {
      setCategoriesLoading(false);
    }
  };

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

  const getBlogsForLeaf = (leafId, categoryId, subcategoryId) =>
    (blogs || []).filter(blog => {
      const hasCategory = (blog.categories || []).some(cat => cat._id === categoryId);
      const hasSubcategory = (blog.subcategories || []).some(sub => sub._id === subcategoryId);
      const hasLeafCategory = (blog.leafCategories || []).some(leaf => leaf._id === leafId);
      return hasCategory && hasSubcategory && hasLeafCategory;
    });

  useEffect(() => {
    dispatch(fetchBlogsData(pagination));
  }, [dispatch, pagination]);

  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch all blogs for "All" on mount and when category changes
  useEffect(() => {
    fetchRecentBlogs(selectedCategory, 1, 10);
  }, [selectedCategory]);

  // const featuredStories = blogs?.slice(0, 5) || [];
  // const popularArticles = blogs?.slice(5, 8) || [];
  
  const filteredBlogs = selectedCategory === 'all'
    ? blogs
    : blogs.filter(blog =>
        (blog.categories || []).some(cat => cat._id === selectedCategory)
      );
  const paginatedBlogs = filteredBlogs.slice((pagination.page - 1) * pagination.limit, pagination.page * pagination.limit);

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
  };

  const handlePageChange = (pageNumber) => {
    // Calculate progressive limit: page 1 = 10, page 2 = 20, page 3 = 30, etc.
    const progressiveLimit = pageNumber * 10;
    setPagination({ ...pagination, page: pageNumber, limit: progressiveLimit });
  };
  
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handleDropdownOpen = (catId, btnRef) => {
    setOpenMenuCatId(openMenuCatId === catId ? null : catId);
    setActiveMenuSub(null);
    setActiveMenuLeaf(null);
    setTimeout(() => {
      if (btnRef.current) {
        const btnRect = btnRef.current.getBoundingClientRect();
        const dropdownWidth = 900;
        if (btnRect.left + dropdownWidth > window.innerWidth) {
          setDropdownAlignRight(prev => ({ ...prev, [catId]: true }));
        } else {
          setDropdownAlignRight(prev => ({ ...prev, [catId]: false }));
        }
      }
    }, 0);
  };

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
          <button
            className="blog-header-menu-scroll-btn left"
            onClick={() => scrollByOne('left')}
            aria-label="Scroll left"
            style={{ display: canScrollLeft && menuData.length > 0 ? 'inline-flex' : 'none' }}
          >
            <img src={Arrow_Left} alt="arrow-left" />
          </button>
          <div className="blog-header-menu-desktop-scroll" ref={scrollRef}>
            <div className="blog-header-menu-desktop">
              {categoriesLoading ? (
                <div className="blog-header-menu-loading">Loading categories...</div>
              ) : (
                menuData.map((cat, idx) => (
                  <div
                    className={`blog-header-menu-dropdown${dropdownAlignRight[cat._id] ? ' open-right' : ''}`}
                    key={cat._id}
                  >
                    <button
                      ref={el => menuBtnRefs.current[idx] = el}
                      className={`blog-header-menu-btn${openMenuCatId === cat._id ? ' active' : ''}${cat.subcategories && cat.subcategories.length > 0 ? ' has-dropdown' : ''}`}
                      onClick={e => {
                        e.preventDefault();
                        if (cat.name === 'Latest Researches') {
                          if (cat.subcategories && cat.subcategories.length > 0) {
                            handleDropdownOpen(cat._id, { current: menuBtnRefs.current[idx] });
                          } else {
                            setContentType('latest-researches');
                            setSelectedCategoryData(cat);
                            setOpenMenuCatId(null);
                          }
                        } else if (cat.subcategories && cat.subcategories.length > 0) {
                          handleDropdownOpen(cat._id, { current: menuBtnRefs.current[idx] });
                        } else {
                          handleCategorySelection(cat);
                        }
                      }}
                    >
                      {cat.name}
                      {cat.subcategories && cat.subcategories.length > 0 && (
                        <span className="dropdown-arrow">
                          <img src={dropdown_blog} alt="arrow-down" />
                        </span>
                      )}
                    </button>
                    {openMenuCatId === cat._id && cat.subcategories && cat.subcategories.length > 0 && (
                      <div className="blog-header-menu-dropdown-content-centered">
                        <div className="blog-header-menu-dropdown-content-inner">
                          <div className="blog-header-menu-subcat-col">
                            {cat.subcategories.filter(sub => sub && sub.name).slice().reverse().map(sub => (
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
                          {activeMenuSub && cat.subcategories.find(s => s._id === activeMenuSub)?.leafCategories?.length > 0 && (
                            <div className="blog-header-menu-leafcat-col">
                              <div className="blog-header-menu-leafcat-title">
                                {cat.subcategories.find(s => s._id === activeMenuSub)?.name}
                              </div>
                              {cat.subcategories.find(s => s._id === activeMenuSub).leafCategories.slice().reverse().map(leaf => (
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
                          {activeMenuLeaf && (
                            <div className="blog-header-menu-blogs-col">
                              <div className="blog-header-menu-blogs-title">
                                {cat.subcategories.find(s => s._id === activeMenuSub)?.leafCategories.find(l => l._id === activeMenuLeaf)?.name}
                              </div>
                              {getBlogsForLeaf(activeMenuLeaf, cat._id, activeMenuSub).slice().reverse().map(blog => (
                                <div key={blog._id} className="blog-header-menu-blog-item">
                                  <div className="blog-header-menu-blog-title">{blog.title}</div>
                                  <div className="blog-header-menu-blog-excerpt">Read Article<img src={img_readArticle} style={{marginLeft: '5px'}} /></div>
                                </div>
                              ))}
                              <div className="blog-header-menu-seeall">See all Blogs <img src={Arrow_Right} /></div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
          <button
            className="blog-header-menu-scroll-btn right"
            onClick={() => scrollByOne('right')}
            aria-label="Scroll right"
            style={{ display: canScrollRight && menuData.length > 0 ? 'inline-flex' : 'none' }}
          >
            <img src={Arrow_Right} alt="arrow-right" />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="blog-header-menu-mobile">
        <button className="blog-header-menu-mobile-btn" onClick={handleMobileMenuOpen}>
          All category <span className="dropdown-arrow"><img src={dropdown_blog} alt="arrow-down" /></span>
        </button>
      </div>
      
      {/* Mobile Menu Modal/Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={handleMobileMenuClose}>
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            {mobileMenuView !== 'categories' && (
              <button className="mobile-menu-back" onClick={handleMobileBackClick}>
                ← Back
              </button>
            )}
            
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
            
            {mobileMenuView === 'categories' && (
              <div className="mobile-menu-search">
                <input type="text" placeholder="Search blogs" className="mobile-search-input" />
                <button className="mobile-search-btn">Search</button>
              </div>
            )}
            
            <div className="mobile-menu-content">
              {mobileMenuView === 'categories' && (
                <div className="mobile-categories-list">
                  {categoriesLoading ? (
                    <div className="mobile-menu-loading">Loading categories...</div>
                  ) : (
                    menuData.map(cat => (
                      <div 
                        key={cat._id} 
                        className="mobile-category-item"
                        onClick={() => {
                          if (cat.name === 'Latest Researches') {
                            if (cat.subcategories && cat.subcategories.length > 0) {
                              handleMobileCategoryClick(cat);
                            } else {
                              window.location.href = '/latest-researches';
                            }
                          } else if (cat.subcategories && cat.subcategories.length > 0) {
                            handleMobileCategoryClick(cat);
                          } else {
                            handleCategorySelection(cat);
                            setIsMobileMenuOpen(false);
                          }
                        }}
                      >
                        <span className="mobile-category-name">{cat.name}</span>
                        {cat.name !== 'Latest Researches' && cat.subcategories && cat.subcategories.length > 0 && (
                          <span className="mobile-category-arrow">→</span>
                        )}
                        {cat.name === 'Latest Researches' && cat.subcategories && cat.subcategories.length > 0 && (
                          <span className="mobile-category-arrow">→</span>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
              
                             {mobileMenuView === 'subcategories' && selectedMobileCategory && (
                 <div className="mobile-subcategories-list">
                   {selectedMobileCategory.subcategories.filter(sub => sub && sub.name).map(sub => (
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
                  {selectedMobileCategory.subcategories.find(sub => sub._id === selectedMobileSubcategory._id)?.leafCategories?.map(leaf => 
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
      
      {/* Hero Section: Only show on main blog home page */}
      {contentType === 'regular' && (
        <div className={`blog-hero-section`}>
          <div className="blog-hero-overlay">
            <h1 className="blog-hero-title">
              Yoga Resources and insights
            </h1>
            <div className="blog-hero-desc">
              <p>
                Explore insightful articles, timeless practices, and wellness wisdom to elevate your daily life.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Regular content */}
      {contentType === 'regular' && (
        <div className="blog-page-new">
          {/* Featured Stories Section */}
          <div className="blog-featured-section">
            <h2 className="blog-section-title">Featured Stories</h2>
            <div className="blog-featured-grid">
              <div className="blog-featured-main-card">
                {featuredStories[0] && (
                  <>
                    <img className="blog-featured-main-img" src={featuredStories[0].coverImage} alt={featuredStories[0].title} />
                    <div className="blog-featured-main-content">
                      <h3 className="blog-featured-main-title">{featuredStories[0].title}</h3>
                      <p className="blog-featured-main-excerpt">{featuredStories[0].excerpt}</p>
                      <div className="blog-featured-main-meta">
                        <span>{formatDate(featuredStories[0].createdAt)}</span>
                        {featuredStories[0].timeDuration && <span> • {featuredStories[0].timeDuration} mins</span>}
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="blog-featured-side-list">
                {featuredStories.slice(1, 5).map((item, idx) => (
                  <div className="blog-featured-side-card" key={item._id || idx}>
                    <img className="blog-featured-side-img" src={item.coverImage} alt={item.title} />
                    <div className="blog-featured-side-content">
                      <h4 className="blog-featured-side-title">{item.title}</h4>
                      <p className="blog-featured-side-desc">{item.excerpt}</p>
                      <div className="blog-featured-side-meta">
                        <span>{formatDate(item.createdAt)}</span>
                        {item.timeDuration && <span> • {item.timeDuration} mins</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Popular Articles Section */}
          <div className="blog-popular-section">
            <h2 className="blog-section-title">Popular Articles</h2>
            <div className="blog-popular-list">
              {popularArticlesLoading ? (
                <div>Loading...</div>
              ) : (
                popularArticles.map((item, idx) => (
                  <div className="blog-card blog-popular-card" key={item._id || idx}>
                    <img className="blog-card-img" src={item.coverImage} alt={item.title} />
                    <div className="blog-card-content">
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
                ))
              )}
            </div>
          </div>
          
          {/* Recent Articles Section */}
          <div className="blog-recent-section">
            <h2 className="blog-section-title" style={{borderBottom: '0px'}}>Recent Articles</h2>
            <div className="blog-tags">
              <button
                className={`blog-tag${selectedCategory === 'all' ? ' active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                All
              </button>
              {categoriesData.map(cat => (
                <button
                  key={cat._id}
                  className={`blog-tag${selectedCategory === cat._id ? ' active' : ''}`}
                  onClick={() => setSelectedCategory(cat._id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <div className="blog-recent-list">
              {recentBlogsLoading ? (
                <div>Loading...</div>
              ) : recentBlogs.length === 0 ? (
                <div>No articles found for this category.</div>
              ) : (
                recentBlogs.map((item, idx) => (
                  <div className="blog-card blog-recent-card" key={item._id || idx}>
                    <img className="blog-card-img" src={item.coverImage} alt={item.title} />
                    <div className="blog-card-content">
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
                ))
              )}
            </div>
            {/* Pagination */}
            <div className="blog-pagination">
              <Pagination
                activePage={recentBlogsPage}
                itemsCountPerPage={10}
                totalItemsCount={recentBlogsTotal}
                pageRangeDisplayed={5}
                onChange={setRecentBlogsPage}
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
              <div className="newsletter-form">
                <input type="email" className="newsletter-input" placeholder="Enter your email address" />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Category-specific content */}
      {contentType === 'category-specific' && (
        <div className="latest-researches-container">
          <div className="latest-researches-header">
            <h1 className="latest-researches-title">{selectedCategoryData?.name}</h1>
          </div>
          
          {/* Research Cards Grid */}
          <div className="latest-researches-grid">
            {categoryBlogsLoading ? (
              <div className="latest-researches-loading">Loading articles...</div>
            ) : categoryBlogs.length === 0 ? (
              <div className="latest-researches-no-blogs">No articles found for this category.</div>
            ) : (
              categoryBlogs.map((blog) => (
                <div className="latest-research-card" key={blog._id}>
                  <div className="latest-research-image">
                    <div className="latest-research-category">
                      {blog.categories && blog.categories[0] ? blog.categories[0].name : selectedCategoryData?.name}
                    </div>
                    <img
                      src={blog.coverImage || `https://source.unsplash.com/random/600x400/?yoga,${blog._id}`}
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
              ))
            )}
          </div>
          
          {/* Pagination */}
          {categoryBlogsPagination.total > categoryBlogsPagination.limit && (
            <div className="pagination-container">
              <Pagination
                activePage={categoryBlogsPagination.page}
                itemsCountPerPage={categoryBlogsPagination.limit}
                totalItemsCount={categoryBlogsPagination.total}
                pageRangeDisplayed={5}
                onChange={handleCategoryPageChange}
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
      )}
      
      {/* Latest Researches content */}
      {contentType === 'latest-researches' && (
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
          {filteredBlogs.length > pagination.limit && (
            <div className="pagination-container">
              <Pagination
                activePage={pagination.page}
                itemsCountPerPage={pagination.limit}
                totalItemsCount={filteredBlogs.length}
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
      )}
      
      <Footer />
    </>
  );
}

export default BlogPageNew;