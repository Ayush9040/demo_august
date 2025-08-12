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
import axios from 'axios';
import { cmsBaseDomain } from '../../../../../Constants/appSettings'
import Arrow_Left from './images/Arrow_Left.svg'
import Arrow_Right from './images/Arrow_Right.svg'
import blog_icon_inner from './images/blog_icon_inner.svg'
import Icon_mob_menu from './images/Icon_mob_menu.svg'
import icon_mob_back_custom from './images/icon_mob_back_custom.svg'
import read_article_mobile_icon from './images/read_article_mobile_icon.svg'




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
  const dropdownRefs = useRef({});
  const scrollRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [leafCategoryBlogs, setLeafCategoryBlogs] = useState([]);
const [leafCategoryBlogsLoading, setLeafCategoryBlogsLoading] = useState(false);

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

  // Add state for latest researches pagination
  const [latestResearchesBlogs, setLatestResearchesBlogs] = useState([]);
  const [latestResearchesTotal, setLatestResearchesTotal] = useState(0);
  const [latestResearchesPage, setLatestResearchesPage] = useState(1);
  const [latestResearchesLoading, setLatestResearchesLoading] = useState(false);

  // State for mobile menu
const [selectedMobileLeafCategory, setSelectedMobileLeafCategory] = useState(null);
const [mobileBlogs, setMobileBlogs] = useState([]);
const [mobileBlogsLoading, setMobileBlogsLoading] = useState(false);
const [searchQuery, setSearchQuery] = useState('');
const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // State for frontend search results
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const blogGridRef = useRef(null);


  // Add useEffect to handle clicking outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside any dropdown
      const isOutsideAllDropdowns = !Object.values(dropdownRefs.current).some(ref => 
        ref && ref.contains(event.target)
      );
      
      // Check if click is outside any menu button
      const isOutsideAllButtons = !menuBtnRefs.current.some(ref => 
        ref && ref.contains(event.target)
      );
      
      if (isOutsideAllDropdowns && isOutsideAllButtons && openMenuCatId) {
        setOpenMenuCatId(null);
        setActiveMenuSub(null);
        setActiveMenuLeaf(null);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenuCatId]);

  const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

  const handleSubmitSubscribe = async (e) => {
  e.preventDefault();
  setError('');
  setSuccess(false);
  
  // Validate email exists
  if (!email.trim()) {
    setError('Please enter your email');
    return;
  }
  
  // Validate email format
  if (!validateEmail(email)) {
    setError('Please enter a valid email address');
    return;
  }

  setIsSubmitting(true);
  
  try {
    const response = await axios.post(
      'https://tyi-test.theyogainstitute.org/auth-api/v2/ali/newslettermail',
      { email: email.toLowerCase() }, // Convert to lowercase before sending
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    if (response.data.success) {
      setSuccess(true);
      setEmail(''); // Clear input on success
    } else {
      setError(response.data.message || 'Subscription failed. Please try again.');
    }
  } catch (err) {
    setError(err.response?.data?.message || 'An error occurred. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};

// Function to fetch blogs for mobile subcategory
const fetchMobileSubcategoryBlogs2 = async (categoryId, subCategoryId) => {
  setMobileBlogsLoading(true);
  try {
    const response = await axios.get(
      `https://tyi-test.theyogainstitute.org/cms-api/v1/post?page=1&limit=10&category=${categoryId}&subCategory=${subCategoryId}`
    );
    setMobileBlogs(response.data.data || []);
  } catch (error) {
    console.error('Error fetching mobile subcategory blogs:', error);
    setMobileBlogs([]);
  } finally {
    setMobileBlogsLoading(false);
  }
};

// Function to fetch blogs for mobile leaf category
const fetchMobileLeafCategoryBlogs2 = async (categoryId, subCategoryId, leafCategoryId) => {
  setMobileBlogsLoading(true);
  try {
    const response = await axios.get(
      `https://tyi-test.theyogainstitute.org/cms-api/v1/post?page=1&limit=10&category=${categoryId}&subCategory=${subCategoryId}&leafCategory=${leafCategoryId}`
    );
    setMobileBlogs(response.data.data || []);
  } catch (error) {
    console.error('Error fetching mobile leaf category blogs:', error);
    setMobileBlogs([]);
  } finally {
    setMobileBlogsLoading(false);
  }
};

// Function to handle search
const handleMobileSearch2 = async (query) => {
  setSearchQuery(query);
  if (query.length > 2) {
    setMobileBlogsLoading(true);
    try {
      const response = await axios.get(
        `https://tyi-test.theyogainstitute.org/cms-api/v1/post/search?query=${query}`
      );
      setMobileBlogs(response.data.data || []);
      setMobileMenuView('blogs');
    } catch (error) {
      console.error('Error searching blogs:', error);
      setMobileBlogs([]);
    } finally {
      setMobileBlogsLoading(false);
    }
  }
};

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

  // Function to fetch blogs for "Latest Researches" with pagination
  const fetchLatestResearches = async (page = 1, limit = 10, categoryId = null) => {
    setLatestResearchesLoading(true);
    try {
      // Use the passed categoryId or fall back to selectedCategoryData
      const categoryToUse = categoryId || selectedCategoryData?._id || '';
      const response = await axios.get(
        `https://tyi-test.theyogainstitute.org/cms-api/v1/post?page=${page}&limit=${limit}&category=${categoryToUse}`
      );
      setLatestResearchesBlogs(response.data.data || []);
      setLatestResearchesTotal(response.data.total || 0);
    } catch (error) {
      setLatestResearchesBlogs([]);
      setLatestResearchesTotal(0);
    } finally {
      setLatestResearchesLoading(false);
    }
  };

  // Function to fetch blogs for a specific category
  const fetchCategoryBlogs = async (categoryId, page = 1, limit = 10) => {
    setCategoryBlogsLoading(true);
    try {
      const response = await axios.get(
        `https://tyi-test.theyogainstitute.org/cms-api/v1/post?page=${page}&limit=${limit}&category=${categoryId}`
      );
      setCategoryBlogs(response.data.data || []);
      setCategoryBlogsPagination({
        page,
        limit,
        total: response.data.total || 0,
      });
    } catch (error) {
      setCategoryBlogs([]);
      setCategoryBlogsPagination({
        page,
        limit,
        total: 0,
      });
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
      fetchCategoryBlogs(selectedCategoryData._id, pageNumber, 10);
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

  const truncateText = (text, maxLength) => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
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

  if (scrollRef.current.scrollWidth <= scrollRef.current.offsetWidth) {
    setCanScrollLeft(false);
    setCanScrollRight(false);
    return;
  }

  setCanScrollLeft(scrollRef.current.scrollLeft > 0);
  const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.offsetWidth;
  setCanScrollRight(scrollRef.current.scrollLeft < maxScrollLeft - 1); // add a small margin
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

  // Get all the visible category buttons
  const btns = scrollRef.current.querySelectorAll('.blog-header-menu-btn');
  if (!btns.length) return;

  // Calculate the width of a single category button (+gap if needed)
  const itemWidth = btns[0]?.offsetWidth || 0;
  const gapWidth = 17; // If you have gap between buttons, set here. If using grid/flex gap, adjust as needed.

  // Scroll one item at a time (+gap so alignment stays perfect)
  const scrollAmount = itemWidth + gapWidth;

  if (dir === 'right') {
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  } else {
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
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

  const fetchLeafCategoryBlogs = async (categoryId, subCategoryId, leafCategoryId) => {
  setLeafCategoryBlogsLoading(true);
  try {
    const response = await axios.get(
      `${cmsBaseDomain}/post?page=1&limit=10&category=${categoryId}&subCategory=${subCategoryId}&leafCategory=${leafCategoryId}`
    );

    if (!response.data.data || response.data.data.length === 0) {
      // No blogs — close dropdown and show category blogs below
      setOpenMenuCatId(null);
      setActiveMenuSub(null);
      setActiveMenuLeaf(null);
      setContentType('category-specific');

      // store selected category/subcategory for below page rendering
      setSelectedCategoryData(categoriesData.find(cat => cat._id === categoryId));
      setSelectedSubcategoryData(
        categoriesData
          .find(cat => cat._id === categoryId)
          ?.subcategories.find(sub => sub._id === subCategoryId)
      );

      // fetch and render category-level blogs
      fetchCategoryBlogs(categoryId, 1);
      return;
    }

    setLeafCategoryBlogs(response.data.data || []);
  } catch (error) {
    console.error('Error fetching leaf category blogs:', error);
    setLeafCategoryBlogs([]);
  } finally {
    setLeafCategoryBlogsLoading(false);
  }
};


  // const handleDropdownOpen = (catId, btnRef) => {
  //   setOpenMenuCatId(openMenuCatId === catId ? null : catId);
  //   setActiveMenuSub(null);
  //   setActiveMenuLeaf(null);
  //   setTimeout(() => {
  //     if (btnRef.current) {
  //       const btnRect = btnRef.current.getBoundingClientRect();
  //       const dropdownWidth = 900;
  //       if (btnRect.left + dropdownWidth > window.innerWidth) {
  //         setDropdownAlignRight(prev => ({ ...prev, [catId]: true }));
  //       } else {
  //         setDropdownAlignRight(prev => ({ ...prev, [catId]: false }));
  //       }
  //     }
  //   }, 0);
  // };

   const handleDropdownOpen = (catId, btnRef) => {
    // Close dropdown if clicking the same category
    if (openMenuCatId === catId) {
      setOpenMenuCatId(null);
      setActiveMenuSub(null);
      setActiveMenuLeaf(null);
      return;
    }

    // Open new dropdown
    setOpenMenuCatId(catId);
    setActiveMenuSub(null);
    setActiveMenuLeaf(null);
    
    // Calculate dropdown position
    setTimeout(() => {
      if (btnRef.current) {
        const btnRect = btnRef.current.getBoundingClientRect();
        const dropdownWidth = 900;
        setDropdownAlignRight(prev => ({
          ...prev,
          [catId]: btnRect.left + dropdownWidth > window.innerWidth
        }));
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

  if (subcategory.leafCategories?.length > 0) {
    setMobileMenuView('leafcategories');
  } else {
    // No leaf categories → close menu and load blogs in main page
    setIsMobileMenuOpen(false);
    setContentType('category-specific');
    setSelectedCategoryData(selectedMobileCategory);
    setSelectedSubcategoryData(subcategory);
    fetchSubcategoryBlogs(selectedMobileCategory._id, subcategory._id, 1, 10);
  }
};


  const handleMobileBackClick = () => {
  if (mobileMenuView === 'blogs') {
    if (selectedMobileLeafCategory) {
      setMobileMenuView('leafcategories');
      setSelectedMobileLeafCategory(null);
    } else {
      setMobileMenuView('subcategories');
      setSelectedMobileSubcategory(null);
    }
  } else if (mobileMenuView === 'leafcategories') {
    setMobileMenuView('subcategories');
    setSelectedMobileLeafCategory(null);
  } else if (mobileMenuView === 'subcategories') {
    setMobileMenuView('categories');
    setSelectedMobileCategory(null);
  } else if (mobileMenuView === 'search-results' || mobileMenuView === 'no-results') {
    setMobileMenuView('categories');
    setSearchQuery('');
    setSearchResults([]);
  }
};


  // Add this function before your return statement:
  const handleLatestResearchesPageChange = (pageNumber) => {
    setLatestResearchesPage(pageNumber);
    // If you want to fetch on page change, call fetchLatestResearches here:
    fetchLatestResearches(pageNumber, 10, selectedCategoryData?._id);
  };

  // Add this function to handle category click for categories without subcategories
  const handleCategoryClick = async (category) => {
    // Close all dropdowns
    setOpenMenuCatId(null);
    setActiveMenuSub(null);
    setActiveMenuLeaf(null);

    if (!category.subcategories || category.subcategories.length === 0) {
      setContentType('category-specific');
      setSelectedCategoryData(category);
      setSelectedCategory(category._id);
      setCategoryBlogsLoading(true);
      
      try {
        const response = await axios.get(
          `${cmsBaseDomain}/post?page=1&limit=10&category=${category._id}`
        );
        setCategoryBlogs(response.data.data || []);
        setCategoryBlogsPagination({
          page: 1,
          limit: 10,
          total: response.data.total || 0,
        });
      } catch (error) {
        setCategoryBlogs([]);
        setCategoryBlogsPagination({
          page: 1,
          limit: 10,
          total: 0,
        });
      } finally {
        setCategoryBlogsLoading(false);
      }
    }
  };


 const handleCategoryClickSeeAll = async (category) => {
    // Close all dropdowns
    setOpenMenuCatId(null);
    setActiveMenuSub(null);
    setActiveMenuLeaf(null);

    // Fetch blogs for the category
    setContentType('category-specific');
    setSelectedCategoryData(category);
    setSelectedCategory(category._id);
    setCategoryBlogsLoading(true);
    
    try {
      const response = await axios.get(
        `${cmsBaseDomain}/post?page=1&limit=10&category=${category._id}`
      );
      setCategoryBlogs(response.data.data || []);
      setCategoryBlogsPagination({
        page: 1,
        limit: 10,
        total: response.data.total || 0,
      });
    } catch (error) {
      setCategoryBlogs([]);
      setCategoryBlogsPagination({
        page: 1,
        limit: 10,
        total: 0,
      });
    } finally {
      setCategoryBlogsLoading(false);
    }
  };

  // Function to fetch blogs for mobile category
const fetchMobileCategoryBlogs = async (categoryId) => {
  setMobileBlogsLoading(true);
  try {
    const response = await axios.get(
      `https://tyi-test.theyogainstitute.org/cms-api/v1/post?page=1&limit=10&category=${categoryId}`
    );
    setMobileBlogs(response.data.data || []);
  } catch (error) {
    console.error('Error fetching mobile category blogs:', error);
    setMobileBlogs([]);
  } finally {
    setMobileBlogsLoading(false);
  }
};

// Function to fetch blogs for mobile subcategory
const fetchMobileSubcategoryBlogs = async (categoryId, subCategoryId) => {
  setMobileBlogsLoading(true);
  try {
    const response = await axios.get(
      `https://tyi-test.theyogainstitute.org/cms-api/v1/post?page=1&limit=10&category=${categoryId}&subCategory=${subCategoryId}`
    );
    setMobileBlogs(response.data.data || []);
  } catch (error) {
    console.error('Error fetching mobile subcategory blogs:', error);
    setMobileBlogs([]);
  } finally {
    setMobileBlogsLoading(false);
  }
};

// Function to fetch blogs for mobile leaf category
const fetchMobileLeafCategoryBlogs = async (categoryId, subCategoryId, leafCategoryId) => {
  setMobileBlogsLoading(true);
  try {
    const response = await axios.get(
      `https://tyi-test.theyogainstitute.org/cms-api/v1/post?page=1&limit=10&category=${categoryId}&subCategory=${subCategoryId}&leafCategory=${leafCategoryId}`
    );

    if (!response.data.data || response.data.data.length === 0) {
      // Close mobile drawer and load category blogs in below page
      setIsMobileMenuOpen(false);
      setContentType('category-specific');

      setSelectedCategoryData(categoriesData.find(cat => cat._id === categoryId));
      setSelectedSubcategoryData(
        categoriesData
          .find(cat => cat._id === categoryId)
          ?.subcategories.find(sub => sub._id === subCategoryId)
      );

      fetchSubcategoryBlogs(categoryId, subCategoryId, 1);
      return;
    }

    setMobileBlogs(response.data.data || []);
  } catch (error) {
    console.error('Error fetching mobile leaf category blogs:', error);
    setMobileBlogs([]);
  } finally {
    setMobileBlogsLoading(false);
  }
};


// Function to handle frontend-only search
// const handleMobileSearch = (query) => {
//   setSearchQuery(query);
  
//   if (query.length === 0) {
//     setSearchResults([]);
//     setIsSearching(false);
//     setMobileMenuView('categories');
//     return;
//   }
  
//   if (query.length < 2) {
//     setSearchResults([]);
//     setIsSearching(false);
//     return;
//   }
  
//   setIsSearching(true);
  
//   // Create a flat structure of all searchable items
//   const searchableItems = [];
  
//   // Add categories
//   menuData.forEach(category => {
//     searchableItems.push({
//       type: 'category',
//       id: category._id,
//       name: category.name,
//       category: category
//     });
    
//     // Add subcategories
//     if (category.subcategories && category.subcategories.length > 0) {
//       category.subcategories.forEach(subcategory => {
//         if (subcategory && subcategory.name) {
//           searchableItems.push({
//             type: 'subcategory',
//             id: subcategory._id,
//             name: subcategory.name,
//             category: category,
//             subcategory: subcategory
//           });
          
//           // Add leaf categories
//           if (subcategory.leafCategories && subcategory.leafCategories.length > 0) {
//             subcategory.leafCategories.forEach(leafCategory => {
//               if (leafCategory && leafCategory.name) {
//                 searchableItems.push({
//                   type: 'leafcategory',
//                   id: leafCategory._id,
//                   name: leafCategory.name,
//                   category: category,
//                   subcategory: subcategory,
//                   leafCategory: leafCategory
//                 });
//               }
//             });
//           }
//         }
//       });
//     }
//   });
  
//   // Filter items based on search query
//   const filteredItems = searchableItems.filter(item => 
//     item.name.toLowerCase().includes(query.toLowerCase())
//   );
  
//   setSearchResults(filteredItems);
//   setIsSearching(false);
  
//   if (filteredItems.length > 0) {
//     setMobileMenuView('search-results');
//   } else {
//     setMobileMenuView('no-results');
//   }
// };

const [allBlogs, setAllBlogs] = useState([]);

// Fetch all blogs when component mounts
useEffect(() => {
  const fetchAllBlogs = async () => {
    try {
      const response = await axios.get(
        'https://tyi-test.theyogainstitute.org/cms-api/v1/post?page=1&limit=100' // Increased limit to get more results
      );
      setAllBlogs(response.data.data || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setAllBlogs([]);
    }
  };
  
  fetchAllBlogs();
}, []);



// Filter categories, subcategories, and leaf categories from already loaded categoriesData
const handleMobileSearch = (query) => {
  setSearchQuery(query);

  // Trim and lower-case the query
  const trimmedQuery = query.trim().toLowerCase();

  // If search is empty → reset view
  if (!trimmedQuery) {
    setSearchResults([]);
    setMobileMenuView('categories');
    return;
  }

  // Filter categories only (no subcategories/leaf/blogs)
  const matches = categoriesData.filter(
    (cat) => cat && typeof cat.name === 'string' && cat.name.toLowerCase().includes(trimmedQuery)
  );

  // Update results + menu view
  setSearchResults(matches);
  setMobileMenuView(matches.length > 0 ? 'search-results' : 'no-results');
};



useEffect(() => {
  if (location.state) {
    const { selectedCategory, contentType, selectedCategoryData } = location.state;
    if (selectedCategory && contentType && selectedCategoryData) {
      setSelectedCategory(selectedCategory);
      setContentType(contentType);
      setSelectedCategoryData(selectedCategoryData);
      fetchCategoryBlogs(selectedCategoryData._id);
    }
  }
}, [location.state]);

// Add these state variables at the top of your component with other state declarations
const [selectedSubcategoryData, setSelectedSubcategoryData] = useState(null);

// Add this function with your other API call functions
const fetchSubcategoryBlogs = async (categoryId, subcategoryId, page = 1, limit = 10) => {
  setCategoryBlogsLoading(true);
  try {
    const response = await axios.get(
      `${cmsBaseDomain}/post?page=${page}&limit=${limit}&category=${categoryId}&subCategory=${subcategoryId}`
    );
    setCategoryBlogs(response.data.data || []);
    setCategoryBlogsPagination({
      page,
      limit,
      total: response.data.total || 0,
    });
  } catch (error) {
    setCategoryBlogs([]);
    setCategoryBlogsPagination({
      page: 1,
      limit: 10,
      total: 0,
    });
  } finally {
    setCategoryBlogsLoading(false);
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
    {/* Left scroll button */}
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
                  if (!cat.subcategories || cat.subcategories.length === 0) {
                    handleCategoryClick(cat);
                  } else if (cat.name === 'Latest Researches') {
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
                <div 
                  className="blog-header-menu-dropdown-content-centered"
                  ref={el => dropdownRefs.current[cat._id] = el}
                >
                  <div className="blog-header-menu-dropdown-content-inner">
                    <div className="blog-header-menu-subcat-col">
                      {cat.subcategories.filter(sub => sub && sub.name).slice().reverse().map(sub => {
                        const hasLeafCategories = sub.leafCategories && sub.leafCategories.length > 0;
                        
                        return (
                          <div
                            key={sub._id}
                            className={`blog-header-menu-sub-item${activeMenuSub === sub._id ? ' active' : ''}`}
                          onClick={async (e) => {
  e.stopPropagation();
  setActiveMenuSub(sub._id);
  setActiveMenuLeaf(null);
  
  // If subcategory has no leaf categories, fetch blogs directly and close dropdown
  if (!hasLeafCategories) {
    try {
      const response = await axios.get(
        `${cmsBaseDomain}/post?page=1&limit=10&category=${cat._id}&subCategory=${sub._id}`
      );
      setLeafCategoryBlogs(response.data.data || []);
      
      // Close dropdown and show category-specific view
      setOpenMenuCatId(null);
      setContentType('category-specific');
      setSelectedCategoryData(cat);
      setSelectedSubcategoryData(sub);
      fetchSubcategoryBlogs(cat._id, sub._id);
    } catch (error) {
      console.error('Error fetching subcategory blogs:', error);
      setLeafCategoryBlogs([]);
    }
  } else {
    setLeafCategoryBlogs([]);
  }
}}
                          >
                            <div className="blog-header-menu-sub-title">{sub.name}</div>
                            <div className="blog-header-menu-sub-desc">{sub.desc.length > 35 ? `${sub.desc.substring(0, 35)}...` : sub.desc}</div>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Show either leaf categories or blogs directly */}
                    {activeMenuSub && (
                      <>
                        {cat.subcategories.find(s => s._id === activeMenuSub)?.leafCategories?.length > 0 ? (
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
                                  fetchLeafCategoryBlogs(cat._id, activeMenuSub, leaf._id);
                                }}
                              >
                                {leaf.name}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="blog-header-menu-blogs-col">
                            <div className="blog-header-menu-blogs-title">
                              {cat.subcategories.find(s => s._id === activeMenuSub)?.name}
                            </div>
                            {leafCategoryBlogsLoading ? (
  <div className="blog-header-menu-loading">Loading blogs...</div>
) : leafCategoryBlogs.length === 0 ? (
  // No blogs → close dropdown and show category-specific
  (() => {
    setOpenMenuCatId(null);
    setActiveMenuSub(null);
    setActiveMenuLeaf(null);
    setContentType('category-specific');
    setSelectedCategoryData(cat);
    // set subcategory/leaf data accordingly here if needed
    return null;
  })()
) : (
  <>
    {leafCategoryBlogs.slice(0, 3).map(blog => (
      <Link
        to={`/${blog.slug}`}
        key={blog._id}
        className="blog-header-menu-blog-item"
        onClick={() => {
          setOpenMenuCatId(null);
          setActiveMenuSub(null);
          setActiveMenuLeaf(null);
        }}
      >
        <div className="blog-header-menu-blog-title">{truncateText(blog.title, 40)}</div>
        <div className="blog-header-menu-blog-excerpt">
          Read Article <img src={img_readArticle} style={{ marginLeft: '5px' }} alt="" />
        </div>
      </Link>
    ))}

    <div
      className="blog-header-menu-seeall"
      onClick={async e => {
        e.preventDefault();
        setOpenMenuCatId(null);
        setActiveMenuSub(null);
        setActiveMenuLeaf(null);
        setContentType('category-specific');
        setSelectedCategoryData(cat);
        // if this is subcategory level:
        setSelectedSubcategoryData(cat.subcategories.find(s => s._id === activeMenuSub));
        await fetchSubcategoryBlogs(cat._id, activeMenuSub, 1, 10);
        // if this is leaf category level, replace above with fetchLeafCategoryBlogs(...)
      }}
    >
      See all Blogs <img src={Arrow_Right} alt="" />
    </div>
  </>
)}

                          </div>
                        )}
                      </>
                    )}
                    
                    {/* Show blogs for leaf categories */}
                    {activeMenuLeaf && (
                      <div className="blog-header-menu-blogs-col">
                        <div className="blog-header-menu-blogs-title">
                          {cat.subcategories.find(s => s._id === activeMenuSub)?.leafCategories.find(l => l._id === activeMenuLeaf)?.name}
                        </div>
                        {leafCategoryBlogsLoading ? (
  <div className="blog-header-menu-loading">Loading blogs...</div>
) : leafCategoryBlogs.length === 0 ? (
  // No blogs → close dropdown and show category-specific
  (() => {
    setOpenMenuCatId(null);
    setActiveMenuSub(null);
    setActiveMenuLeaf(null);
    setContentType('category-specific');
    setSelectedCategoryData(cat);
    // set subcategory/leaf data accordingly here if needed
    return null;
  })()
) : (
  <>
    {leafCategoryBlogs.slice(0, 3).map(blog => (
      <Link
        to={`/${blog.slug}`}
        key={blog._id}
        className="blog-header-menu-blog-item"
        onClick={() => {
          setOpenMenuCatId(null);
          setActiveMenuSub(null);
          setActiveMenuLeaf(null);
        }}
      >
        <div className="blog-header-menu-blog-title">{truncateText(blog.title, 40)}</div>
        <div className="blog-header-menu-blog-excerpt">
          Read Article <img src={img_readArticle} style={{ marginLeft: '5px' }} alt="" />
        </div>
      </Link>
    ))}

    <div
      className="blog-header-menu-seeall"
      onClick={async e => {
        e.preventDefault();
        setOpenMenuCatId(null);
        setActiveMenuSub(null);
        setActiveMenuLeaf(null);
        setContentType('category-specific');
        setSelectedCategoryData(cat);
        // if this is subcategory level:
        setSelectedSubcategoryData(cat.subcategories.find(s => s._id === activeMenuSub));
        await fetchSubcategoryBlogs(cat._id, activeMenuSub, 1, 10);
        // if this is leaf category level, replace above with fetchLeafCategoryBlogs(...)
      }}
    >
      See all Blogs <img src={Arrow_Right} alt="" />
    </div>
  </>
)}

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
    
    {/* Right scroll button */}
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
     {/* Mobile Menu Modal/Drawer */}
{/* {isMobileMenuOpen && (
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
          {mobileMenuView === 'leafcategories' && selectedMobileLeafCategory?.name}
        </div>
        <button className="mobile-menu-close" onClick={handleMobileMenuClose}>
          ✕
        </button>
      </div>
      
      {mobileMenuView === 'categories' && (
        <div className="mobile-menu-search">
          <input 
            type="text" 
            placeholder="Search blogs" 
            className="mobile-search-input" 
            onChange={(e) => handleMobileSearch(e.target.value)}
          />
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
                        setContentType('latest-researches');
                        setSelectedCategoryData(cat);
                        setIsMobileMenuOpen(false);
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
                  {cat.subcategories && cat.subcategories.length > 0 && (
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
                onClick={() => {
                  if (sub.leafCategories && sub.leafCategories.length > 0) {
                    setSelectedMobileSubcategory(sub);
                    setMobileMenuView('leafcategories');
                  } else {
                    // If no leaf categories, fetch blogs directly for this subcategory
                    fetchMobileSubcategoryBlogs(selectedMobileCategory._id, sub._id);
                    setMobileMenuView('blogs');
                  }
                }}
              >
                <span className="mobile-subcategory-name">{sub.name}</span>
                {sub.leafCategories && sub.leafCategories.length > 0 && (
                  <span className="mobile-subcategory-arrow">→</span>
                )}
              </div>
            ))}
          </div>
        )}
        
        {mobileMenuView === 'leafcategories' && selectedMobileSubcategory && (
          <div className="mobile-leafcategories-list">
            {selectedMobileSubcategory.leafCategories.map(leaf => (
              <div
                key={leaf._id}
                className="mobile-leafcategory-item"
                onClick={() => {
                  fetchMobileLeafCategoryBlogs(selectedMobileCategory._id, selectedMobileSubcategory._id, leaf._id);
                  setSelectedMobileLeafCategory(leaf);
                  setMobileMenuView('blogs');
                }}
              >
                <span className="mobile-leafcategory-name">{leaf.name}</span>
                <span className="mobile-leafcategory-arrow">→</span>
              </div>
            ))}
          </div>
        )}
        
        {mobileMenuView === 'blogs' && (
          <div className="mobile-blogs-list">
            {mobileBlogsLoading ? (
              <div className="mobile-menu-loading">Loading blogs...</div>
            ) : mobileBlogs.length === 0 ? (
              <div className="mobile-no-blogs">No blogs found</div>
            ) : (
              mobileBlogs.map(blog => (
                <Link 
                  to={`/${blog.slug}`} 
                  key={blog._id} 
                  className="mobile-blog-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="mobile-blog-title">{blog.title}</div>
                  <div className="mobile-blog-link">Read Article →</div>
                </Link>
              ))
            )}
            {mobileBlogs.length > 0 && (
              <Link 
                to={
                  selectedMobileLeafCategory 
                    ? `/blogs?category=${selectedMobileCategory._id}&subCategory=${selectedMobileSubcategory._id}&leafCategory=${selectedMobileLeafCategory._id}`
                    : selectedMobileSubcategory
                      ? `/blogs?category=${selectedMobileCategory._id}&subCategory=${selectedMobileSubcategory._id}`
                      : `/blogs?category=${selectedMobileCategory._id}`
                } 
                className="mobile-see-all-blogs"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                See all Blogs →
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
)} */}

        {/* Mobile Menu Modal/Drawer */}
{isMobileMenuOpen && (
  <div className="mobile-menu-overlay" onClick={handleMobileMenuClose}>
    <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
      {/* Back button - show on all views except categories */}
      {mobileMenuView !== 'categories' && (
        <button 
          className="mobile-menu-back" 
          onClick={handleMobileBackClick}
          style={{
            marginBottom: mobileMenuView === 'leafcategories' ? '10px' : '0'
          }}
        >
          <img 
            src={icon_mob_back_custom} 
            alt="Back" 
            className="mobile-menu-back-icon"
          />
        </button>
      )}

      {/* Header with title and close button (only on categories view) */}
      <div className="mobile-menu-header">
        <div className="mobile-menu-title">
          {mobileMenuView === 'categories' && 'All Categories'}
          {mobileMenuView === 'subcategories' && selectedMobileCategory?.name}
          {mobileMenuView === 'leafcategories' && selectedMobileSubcategory?.name}
          {mobileMenuView === 'blogs' && (
            selectedMobileLeafCategory?.name || selectedMobileSubcategory?.name || selectedMobileCategory?.name
          )}
          {mobileMenuView === 'search-results' && 'Search Results'}
          {mobileMenuView === 'no-results' && 'No Results Found'}
        </div>
        
        {/* Close button - only shown on categories view */}
        {mobileMenuView === 'categories' && (
          <button className="mobile-menu-close" onClick={handleMobileMenuClose}>
            ✕
          </button>
        )}
      </div>

      {/* Search input with search button - only shown on categories view */}
      {mobileMenuView === 'categories' && (
        <div className="mobile-menu-search">
          <input 
            type="text" 
            placeholder="Search blogs..." 
            className="mobile-search-input" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleMobileSearch(searchQuery);
              }
            }}
          />
          <button 
            className="mobile-search-btn"
            onClick={() => handleMobileSearch(searchQuery)}
          >
            Search
          </button>
        </div>
      )}

      {/* Content area */}
      <div className="mobile-menu-content other_leaf_one">
        {/* Categories view */}
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
                      if (cat.subcategories?.length > 0) {
                        handleMobileCategoryClick(cat);
                      } else {
                        fetchLatestResearches(1, 10, cat._id);
                        setContentType('latest-researches');
                        setSelectedCategoryData(cat);
                        setIsMobileMenuOpen(false);
                      }
                    } else if (cat.subcategories?.length > 0) {
                      handleMobileCategoryClick(cat);
                    } else {
                       setIsMobileMenuOpen(false);
                        setContentType('category-specific');
                        setSelectedCategoryData(cat);
                        setSelectedCategory(cat._id);
                        fetchCategoryBlogs(cat._id, 1, 10);
                    }
                  }}
                >
                  <span className="mobile-category-name">{cat.name}</span>
                  {cat.subcategories?.length > 0 && (
                    <span className="mobile-category-arrow">
                      <img src={Icon_mob_menu} alt=">" />
                    </span>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {/* Subcategories view */}
      {mobileMenuView === 'subcategories' && selectedMobileCategory && (
  <div className="mobile-subcategories-list">
    {selectedMobileCategory.subcategories
      .filter(sub => sub && sub.name)
      .map(sub => (
        <div 
          key={sub._id} 
          className="mobile-subcategory-item"
          onClick={() => handleMobileSubcategoryClick(sub)}
        >
          <span className="mobile-subcategory-name">{sub.name}</span>
          {sub.leafCategories?.length > 0 && (
            <span className="mobile-subcategory-arrow">
              <img src={Icon_mob_menu} alt=">" />
            </span>
          )}
        </div>
      ))}
  </div>
)}


        {/* Leaf categories view */}
        {mobileMenuView === 'leafcategories' && selectedMobileSubcategory && (
          <div className="mobile-leafcategories-list">
            {/* <div className="mobile-leafcategories-header">
              {selectedMobileSubcategory.name}
            </div> */}
            {selectedMobileSubcategory.leafCategories.map(leaf => (
              <div
                key={leaf._id}
                className="mobile-leafcategory-item"
                onClick={() => {
                  fetchMobileLeafCategoryBlogs(
                    selectedMobileCategory._id, 
                    selectedMobileSubcategory._id, 
                    leaf._id
                  );
                  setSelectedMobileLeafCategory(leaf);
                  setMobileMenuView('blogs');
                }}
              >
                <span className="mobile-leafcategory-name">{leaf.name}</span>
                <span className="mobile-leafcategory-arrow">
                  <img src={Icon_mob_menu} alt=">" />
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Blogs view (used for both category blogs and search results) */}
       {(mobileMenuView === 'blogs') && (
  <div className="mobile-blogs-list">
    {mobileBlogsLoading ? (
      <div className="mobile-menu-loading">Loading blogs...</div>
    ) : mobileBlogs.length === 0 ? (
      <div className="mobile-no-blogs">No articles found</div>
    ) : (
      <>
        {/* Show only first 3 blogs */}
        {mobileBlogs.slice(0, 3).map(blog => (
          <Link 
            to={`/${blog.slug}`} 
            key={blog._id} 
            className="mobile-blog-item"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="mobile-blog-title">{blog.title}</div>
            <div className="mobile-blog-link">Read Article <img src={read_article_mobile_icon} alt="" /></div>
          </Link>
        ))}
        
        {/* Show "See all" link if more than 3 blogs */}
        {mobileBlogs.length > 3 && (
  <div 
    className="mobile-see-all-blogs"
    onClick={() => {
      setIsMobileMenuOpen(false);
      setContentType('category-specific');

      if (selectedMobileLeafCategory) {
        setSelectedCategoryData(selectedMobileCategory);
        setSelectedSubcategoryData(selectedMobileSubcategory);
        fetchLeafCategoryBlogs(
          selectedMobileCategory._id,
          selectedMobileSubcategory._id,
          selectedMobileLeafCategory._id
        );
      } else if (selectedMobileSubcategory) {
        setSelectedCategoryData(selectedMobileCategory);
        setSelectedSubcategoryData(selectedMobileSubcategory);
        fetchSubcategoryBlogs(
          selectedMobileCategory._id,
          selectedMobileSubcategory._id,
          1
        );
      } else if (selectedMobileCategory) {
        setSelectedCategoryData(selectedMobileCategory);
        fetchCategoryBlogs(selectedMobileCategory._id, 1);
      }
    }}
  >
    See all blogs <img src={Arrow_Right} />
  </div>
)}

      </>
    )}
  </div>
)}

{mobileMenuView === 'search-results' && (
  <div className="mobile-search-results-list">
    {searchResults.map((cat) => (
      <div
        key={cat._id}
        className="mobile-search-result-item"
        onClick={() => {
  setIsMobileMenuOpen(false);
  setContentType('category-specific');
  setSelectedCategoryData(cat);
  setSelectedCategory(cat._id);
  fetchCategoryBlogs(cat._id, 1, 10);
}}

      >
        {cat.name}
      </div>
    ))}
  </div>
)}



        

        {/* No results view */}
        {mobileMenuView === 'no-results' && (
  <div className="mobile-no-results-container">
    <div className="mobile-no-results-message">
      No category found for {searchQuery}
    </div>
    <div className="mobile-no-results-suggestion">
      Try searching with another category name
    </div>
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
    {/* First column: Main Card */}
    <div className="blog-featured-main-card">
      {featuredStories[0] && (
        <Link to={`/${featuredStories[0].slug}`}>
          <img className="blog-featured-main-img" src={featuredStories[0].coverImage} alt={featuredStories[0].title} />
          <div className="blog-featured-main-content">
            <h3 className="blog-featured-main-title">{featuredStories[0].title}</h3>
            <p className="blog-featured-main-excerpt">{featuredStories[0].excerpt}</p>
            <div className="blog-featured-main-meta">
              <span>{formatDate(featuredStories[0].createdAt)}</span>
              {featuredStories[0].timeDuration && <span> • {featuredStories[0].timeDuration} mins</span>}
            </div>
          </div>
        </Link>
      )}
    </div>
    {/* Second column: Side List */}
    <div className="blog-featured-side-list">
      {featuredStories.slice(1, 5).map((item, idx) => (
        <Link to={`/${item.slug}`} className="blog-featured-side-card" key={item._id || idx}>
          <img className="blog-featured-side-img" src={item.coverImage} alt={item.title} />
          <div className="blog-featured-side-content">
            <h4 className="blog-featured-side-title">
  {truncateText(item.title, 40)}
</h4>
<p className="blog-featured-side-desc">
  {truncateText(item.excerpt, 40)}
</p>
            <div className="blog-featured-side-meta">
              <span>{formatDate(item.createdAt)}</span>
              {item.timeDuration && <span> • {item.timeDuration} mins</span>}
            </div>
          </div>
        </Link>
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
        <Link to={`/${item.slug}`} className="blog-card blog-popular-card" key={item._id || idx}>
          <img className="blog-card-img" src={item.coverImage} alt={item.title} />
          <div className="blog-card-content">
            {/* {item.categories && item.categories[0] && (
              <span className="blog-card-category">{item.categories[0].name}</span>
            )} */}
            <h3 className="blog-card-title">{truncateText(item.title, 40)}</h3>
            <p className="blog-card-excerpt">{truncateText(item.excerpt, 40)}</p>
            <div className="blog-card-meta">
              <span>{formatDate(item.createdAt)}</span>
              {item.timeDuration && <span> • {item.timeDuration} mins</span>}
            </div>
          </div>
        </Link>
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
           <div className="blog-recent-list" ref={blogGridRef}>
  {recentBlogsLoading ? (
    <div>Loading...</div>
  ) : recentBlogs.length === 0 ? (
    <div>No articles found for this category.</div>
  ) : (
    recentBlogs.map((item, idx) => (
      <Link to={`/${item.slug}`} className="blog-card blog-recent-card" key={item._id || idx}>
        <img className="blog-card-img" src={item.coverImage} alt={item.title} />
        <div className="blog-card-content">
          {/* {item.categories && item.categories[0] && (
            <span className="blog-card-category">{item.categories[0].name}</span>
          )} */}
          <h3 className="blog-card-title">{truncateText(item.title, 40)}</h3>
          <p className="blog-card-excerpt">{truncateText(item.excerpt, 40)}</p>
          <div className="blog-card-meta">
            <span>{formatDate(item.createdAt)}</span>
            {item.timeDuration && <span> • {item.timeDuration} mins</span>}
          </div>
        </div>
      </Link>
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
        
          <form className="newsletter-form" onSubmit={handleSubmitSubscribe} noValidate>
  <div>
    <input 
      type="email" 
      className="newsletter-input" 
      placeholder="Enter your email address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      // Prevent default browser validation
      noValidate
    />
    <button 
      className="newsletter-btn" 
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Subscribing...' : 'Subscribe'}
    </button>
  </div>
  {error && <div className="newsletter-error">{error}</div>}
  {success && <div className="newsletter-success" style={{  fontSize: '14px', color: 'red', textAlign: 'left'}}>Subscription successful!</div>}
</form>
          
          
       
      </div>
    </div>
        </div>
      )}
      
      {/* Category-specific content */}
      {contentType === 'category-specific' && (
        <div className="latest-researches-container">
          <div className='Heading_guide'>
            <span onClick={() => {
            setContentType('regular'); // Reset to default view
            setSelectedCategory('all'); // Reset category filter (optional)
    }}
    style={{ cursor: 'pointer' }}>Home</span>
            <img src={blog_icon_inner} alt="" />
            <span>{selectedCategoryData?.name}</span>
          </div>
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
                <Link to={`/${blog?.slug}`} key={blog._id} className="latest-research-card">
                  <div className="latest-research-image">
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
                        . {blog.meta ? blog.meta.match(/content="(\d+) minutes"/)?.[1] || '10' : '10'} min
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
          
          {/* Pagination */}
          {categoryBlogsPagination.total > 10 && (
            <div className="pagination-container">
              <Pagination
                activePage={categoryBlogsPagination.page}
                itemsCountPerPage={10}
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
           <div className="blog-newsletter-section">
      <div className="newsletter-box">
        <h3>Join Our Yoga Community</h3>
        <div className="newsletter-box-desc">
          <p>Subscribe to our newsletter and get the latest updates on yoga practices, wellness tips, and exclusive content delivered to your inbox.</p>
        </div>
     
          <form className="newsletter-form" onSubmit={handleSubmitSubscribe} noValidate>
  <div>
    <input 
      type="email" 
      className="newsletter-input" 
      placeholder="Enter your email address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      // Prevent default browser validation
      noValidate
    />
    <button 
      className="newsletter-btn" 
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Subscribing...' : 'Subscribe'}
    </button>
  </div>
  {error && <div className="newsletter-error">{error}</div>}
  {success && <div className="newsletter-success" style={{textAlign: 'left', color: 'red'}}>Subscription successful!</div>}
</form>
       
      </div>
    </div>
        </div>
      )}

      {/* Latest Researches content */}
      {contentType === 'latest-researches' && (
        <div className="latest-researches-container">
          <div className='Heading_guide'>
            <span onClick={() => {
            setContentType('regular'); // Reset to default view
            setSelectedCategory('all'); // Reset category filter (optional)
    }}
    style={{ cursor: 'pointer' }}>Home</span>
            <img src={blog_icon_inner} alt="" />
            <span>{selectedCategoryData?.name}</span>
          </div>
          <div className="latest-researches-header">
            <h1 className="latest-researches-title">Latest Researches</h1>
          </div>
          
          {/* Research Cards Grid */}
          <div className="latest-researches-grid">
            {latestResearchesLoading ? (
              <div className="latest-researches-loading">Loading articles...</div>
            ) : latestResearchesBlogs.length === 0 ? (
              <div className="latest-researches-no-blogs">No articles found for this category.</div>
            ) : (
              latestResearchesBlogs.map((blog) => (
                <Link to={`/${blog?.slug}`} key={blog._id} className="latest-research-card">
                  <div className="latest-research-image">
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
                </Link>
              ))
            )}
          </div>
          {/* Pagination */}
          {latestResearchesTotal > 10 && (
            <div className="pagination-container">
              <Pagination
                activePage={latestResearchesPage}
                itemsCountPerPage={10}
                totalItemsCount={latestResearchesTotal}
                pageRangeDisplayed={5}
                onChange={handleLatestResearchesPageChange}
                itemClass="page-item"
                linkClass="page-link"
                activeClass="active"
                activeLinkClass="active-link"
              />
            </div>
          )}
          {/* Newsletter Subscription */}
           <div className="blog-newsletter-section">
      <div className="newsletter-box">
        <h3>Join Our Yoga Community</h3>
        <div className="newsletter-box-desc">
          <p>Subscribe to our newsletter and get the latest updates on yoga practices, wellness tips, and exclusive content delivered to your inbox.</p>
        </div>
        
          <form className="newsletter-form" onSubmit={handleSubmitSubscribe} noValidate>
  <div>
    <input 
      type="email" 
      className="newsletter-input" 
      placeholder="Enter your email address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      // Prevent default browser validation
      noValidate
    />
    <button 
      className="newsletter-btn" 
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Subscribing...' : 'Subscribe'}
    </button>
  </div>
  {error && <div className="newsletter-error">{error}</div>}
  {success && <div className="newsletter-success" style={{textAlign: 'left', color: 'red'}}>Subscription successful!</div>}
</form>
      
      </div>
    </div>
        </div>
      )}
      
      <Footer />
    </>
  );
}

export default BlogPageNew;