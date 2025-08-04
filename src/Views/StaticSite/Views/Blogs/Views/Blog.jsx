import React, { useEffect, useState, useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom' // <-- add useNavigate
import './style.scss'
import Heading from '../../../Components/Heading'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { useDispatch } from 'react-redux'
import { fetchBlogData } from '../Blogs.action'
import { Helmet } from 'react-helmet'
import './BlogPageDesktop.css'
import axios from 'axios'
import { courseCardData } from '../../../utils/courseCardData'
import SliderCourses from '../../../Components/CourseSections/SliderCourses'
import SliderJoin from './SliderJoin'
import SliderModile from './SliderModile'  // <-- import your mobile slider component
import Footer from '../../../Components/Footer'
import Heart from './images/Heart.svg'
import fb_icon from './images/fb_icon.svg' // Add your Facebook icon image to the images folder
import HeartRed from './images/HeartRed.png' // Add a red heart SVG image to your images folder
import Modal from '@mui/material/Modal'; // If you use MUI, or use your own modal implementation
import in_icon from './images/in_icon.svg' // Add your LinkedIn icon image to the images folder 
import whatsapp_icon from './images/whatsapp_icon.svg' // Add your WhatsApp icon image to the images folder
import icon_courses from './images/icon_courses.svg' // Add your courses icon image to the images folder
import back_to_blogs from './images/back_to_blog.svg'
import fb_below from './images/fb_below.svg'
import below_in from './images/linkedin_below.svg'
import below_wa from './images/below_wa.svg'

const BlogAnother = () => {
  const dispatch = useDispatch()
  const { contentId } = useParams()
  const { blog } = useSelector(state => state.blogs)
  const [categories, setCategories] = useState([])
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);
  const [likedComments, setLikedComments] = useState({});
  const [showCommentModal, setShowCommentModal] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth)
  const [commentForm, setCommentForm] = useState({
    content: '',
    name: '',
    email: '',
    country: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [saveDetails, setSaveDetails] = useState(false);
  const activeButtonRef = useRef(null)
  const navigate = useNavigate(); // <-- initialize useNavigate

  // Social sharing functions
  const handleFacebookShare = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(blog?.title || 'Check out this blog post');
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(blog?.title || 'Check out this blog post');
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
  };

  const handleWhatsAppShare = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(blog?.title || 'Check out this blog post');
    const text = encodeURIComponent(`${title} - ${url}`);
    const whatsappUrl = `https://wa.me/?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  // Fetch all categories for the top bar
  useEffect(() => {
    axios.get('https://tyi-test.theyogainstitute.org/cms-api/v1/category')
      .then(res => setCategories(res.data?.data || res.data || []))
      .catch(() => setCategories([]))
  }, [])
  // Fetch blog data
  useEffect(() => {
    dispatch(fetchBlogData(contentId))
    window.scrollTo(0, 0)
  }, [dispatch, contentId])
  // Fetch related blogs (limit 3)
  useEffect(() => {
    axios
      .get('https://tyi-test.theyogainstitute.org/cms-api/v1/post?page=1&limit=3')
      .then(res => setRelatedBlogs(res.data?.data || []))
      .catch(() => setRelatedBlogs([]));
  }, []);
  // Parse meta tags for Helmet
  const blogParseAlgo = useCallback((data = '', title) => {
    let headers = {
      title: '',
      links: [],
      metaData: [],
      script: '',
    }
    headers.h1Tag = title
    data = data.replace(/\\n/g, '')
    data = data.split('\n')
    data.forEach((el) => {
      if (el.includes('<meta') || el.includes('<link')) {
        let obj = {}
        let regExp = /(\S+)="[^"]*/g
        let regexMatches = el.match(regExp)
        regexMatches && regexMatches.map(el => {
          let partition = el.split('="')
          obj[partition[0]] = partition[1]?.replace(/"/g, '')
        })
        if (el.includes('<meta'))
          headers.metaData.push(obj)
        if (el.includes('<link'))
          headers.links.push(obj)
      }
      else if (el.includes('<title>')) {
        headers.title = el.replace('<title>', '').replace('</title>', '')
      }
      else if (el.includes('<script'))
        headers.script = el
    })
    return <Helmet title={headers?.title.trim()} meta={headers?.metaData} />
  }, [blog?.meta, blog?.title])
  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }
  const blogData = blog || {}
  const activeCategoryId = blogData.categories && blogData.categories[0]?._id
  useEffect(() => {
    if (activeButtonRef.current) {
      activeButtonRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
      })
    }
  }, [activeCategoryId])
  // Like comment handler
  const handleLikeComment = async (commentId) => {
    if (!isLoggedIn) {
      navigate('/user/sign-in?location=blog_comment');
      return;
    }
    const token = localStorage.getItem('authorizationToken') || '';
    try {
      if (likedComments[commentId]) {
        // Unlike API
        await axios.put(
          `https://tyi-test.theyogainstitute.org/cms-api/v1/comment/unlikeComment/${commentId}`,
          {},
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );
        setLikedComments(prev => ({ ...prev, [commentId]: false }));
      } else {
        // Like API
        await axios.put(
          `https://tyi-test.theyogainstitute.org/cms-api/v1/comment/likeComment/${commentId}`,
          {},
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );
        setLikedComments(prev => ({ ...prev, [commentId]: true }));
      }
    } catch (err) {
      // Optionally handle error
    }
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    if (!commentForm.content.trim()) errors.content = 'Comment is required';
    if (!commentForm.name.trim()) errors.name = 'Name is required';
    if (!commentForm.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(commentForm.email)) {
      errors.email = 'Invalid email';
    }
    if (!commentForm.country.trim()) errors.country = 'Country is required';
    return errors;
  };

  // Load saved details from localStorage when modal opens
  useEffect(() => {
    if (showCommentModal) {
      const saved = localStorage.getItem('tyi_comment_details');
      if (saved) {
        const details = JSON.parse(saved);
        setCommentForm(form => ({
          ...form,
          name: details.name || '',
          email: details.email || '',
          country: details.country || ''
        }));
        setSaveDetails(true);
      }
    }
  }, [showCommentModal]);

  // Submit comment
  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      navigate('/user/sign-in?location=blog_comment');
      return;
    }
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    if (saveDetails) {
      localStorage.setItem('tyi_comment_details', JSON.stringify({
        name: commentForm.name,
        email: commentForm.email,
        country: commentForm.country
      }));
    } else {
      localStorage.removeItem('tyi_comment_details');
    }

    setSubmitting(true);
    const token = localStorage.getItem('authorizationToken') || '';
    try {
      await axios.post(
        `https://tyi-test.theyogainstitute.org/cms-api/v1/comment?postId=${blogData._id}`,
        {
          content: commentForm.content,
          user: {
            name: commentForm.name,
            email: commentForm.email,
            location: commentForm.country,
          },
          createdAt: new Date().toISOString(),
          isAdmin: true,
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      setShowCommentModal(false);
      setCommentForm({ content: '', name: '', email: '', country: '' });
      setFormErrors({});
      dispatch(fetchBlogData(contentId));
    } catch (err) {
      setFormErrors({ submit: 'Failed to submit comment. Please try again.' });
    }
    setSubmitting(false);
  };

  return (
    <div className='blog_detailing_wrapped'>
      {blogParseAlgo(blogData.meta, blogData.title)}
      
      {/* Navigation */}
      <div>
        <InnerNavComponent abc={{
          title: 'blogs',
          color: 'orange',
          menuColor: 'orange',
          menuItems: categories.map(cat => ({
            name: cat.name,
            url: cat.name === "Latest Researches" ? "/blogs/latest-researches" : `/blogs/category/${cat.slug || cat._id}`,
            innerTitle: cat.name?.toLowerCase?.() || '',
            title: cat.name
          }))
        }}/>
      </div>
      {/* Category Scroll Bar */}
      <div className="category-scroll-container">
        <div className="category-scroll-wrapper">
          <h3 className='heading_tyi_category'>TYI Blog Category</h3>
         <div className='category-scroll-buttons'>
           {categories.map(cat => (
            <button
              key={cat._id}
              ref={activeCategoryId === cat._id ? activeButtonRef : null}
              disabled={activeCategoryId === cat._id}
              className={`category-scroll-btn${activeCategoryId === cat._id ? ' active' : ''}`}
            >
              {cat.name}
            </button>
          ))}
         </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="blog-container">
      <div className='back_to_blogs_wrapper'>
        <Link to='/blogs' className='back_to_blogs_link'> <img src={back_to_blogs} alt="" style={{width: '18px', height: '15px', marginRight: '3px'}} />Back to blogs</Link>

      </div>
        {/* Left Content */}
        <div className="blog-content">
          {/* Blog Header */}
          <div className="blog-header">
            <h1 className="blog-title">{blogData.title}</h1>

            
            <div className="blog-card">
              {/* Other blog content */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="blog-tags">
                  {blog.tags && blog.tags.map((tag, index) => (
                  <span key={tag._id || index} className="blog-tag-item">
                    {tag.name}  {/* Access the name property */}
                  </span>
                ))}
                </div>
              )}
            </div>

            
<div className="blog-header-section">
  <div className="author-info-container">
    {blogData?.author?.[0]?.profilePicture && (
      <img 
        src={blogData.author[0].profilePicture} 
        alt={blogData.author[0].name} 
        className="author-avatar"
      />
    )}
    <div>
      <div className="author-name">
        {blogData?.author?.[0]?.name || 'Unknown Author'}
      </div>
      <div className="post-update-date">
        Updated on: {new Date(blogData?.createdAt).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        })}
      </div>
    </div>
  </div>
  <div className='sharing_wrapper'>
    <button className="share-post-button">
    Share this post
  </button>
  <div className='icons_wrapper_list'>
    <img 
      src={fb_icon} 
      alt="Share on Facebook" 
      onClick={handleFacebookShare}
      style={{ cursor: 'pointer' }}
    />
    <img 
      src={in_icon} 
      alt="Share on LinkedIn" 
      onClick={handleLinkedInShare}
      style={{ cursor: 'pointer' }}
    />
    <img 
      src={whatsapp_icon} 
      alt="Share on WhatsApp" 
      onClick={handleWhatsAppShare}
      style={{ cursor: 'pointer' }}
    />
  </div>
  </div>
</div>

            {/* <div className="blog-meta">
              {blogData.author && blogData.author[0] && (
                <div className="author-info">
                  <img 
                    src={blogData.author[0].profileImage || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(blogData.author[0].name)}
                    alt={blogData.author[0].name}
                    className="author-avatar"
                  />
                  <span className="author-name">{blogData.author[0].name}</span>
                </div>
              )}
              <span className="blog-date">{formatDate(blogData.createdAt)}</span>
              {blogData.timeDuration && (
                <span className="blog-duration">• {blogData.timeDuration} mins</span>
              )}
            </div> */}
          </div>
          {/* Cover Image */}
          {blogData.coverImage && (
            <img 
              src={blogData.coverImage} 
              alt={blogData.altTag || blogData.title} 
              className="blog-cover-image"
            />
          )}
          {/* Blog Content Sections */}
          <div className="blog-sections">
  {Array.isArray(blogData?.content) && blogData.content.map((section, idx) => (
    <div key={section._id || idx} className="blog-section">
      {/* Render title if it exists */}
      {section.title && <h2 className="section-title">{section.title}</h2>}
      
      {/* Render content if it exists */}
      {section.content && (
        <div 
          className="section-content" 
          dangerouslySetInnerHTML={{ __html: section.content }} 
        />
      )}
    </div>
  ))}
</div>

<div className='blog_sharing_below_container'>
  <div className="social-sharing-box">
    <div className="sharing-content">
      <div className="sharing-text">
        <h3>Like what you see? Share with a friend.</h3>
      </div>
      <div className="social-icons">
        <div 
          className="social-icon facebook-icon" 
          onClick={handleFacebookShare}
          title="Share on Facebook"
        >
          <img src={fb_below} alt="Share on Facebook" />
        </div>
        <div 
          className="social-icon linkedin-icon" 
          onClick={handleLinkedInShare}
          title="Share on LinkedIn"
        >
          <img src={below_in} alt="Share on LinkedIn" />
        </div>
        <div 
          className="social-icon whatsapp-icon" 
          onClick={handleWhatsAppShare}
          title="Share on WhatsApp"
        >
          <img src={below_wa} alt="Share on WhatsApp" />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="author-comments-section">
  {/* About Author Section */}
  <div className="about-author">
    <h2 className="section-heading">About Author</h2>
    <div className="author-card">
      {blogData?.author?.[0]?.profilePicture ? (
        <img 
          src={blogData.author[0].profilePicture} 
          alt={blogData.author[0].name} 
          className="author-avatar"
        />
      ) : (
        <div className="author-avatar-placeholder">
          {blogData?.author?.[0]?.name?.charAt(0) || 'A'}
        </div>
      )}
      <div className="author-details">
        <h3 className="author-name">
          {blogData?.author?.[0]?.name || 'Unknown Author'}
        </h3>
        {blogData?.author?.[0]?.desc ? (
          <p className="author-bio">{blogData.author[0].desc}</p>
        ) : (
          <p className="author-bio no-bio">No description available</p>
        )}
      </div>
    </div>
  </div>

  {/* Comments Section */}
  <div className="comments-section">
    <div className="comments-header">
      <h2 className="section-heading">
        {blogData?.comments?.length || 0} Comments
      </h2>
      <button className="add-comment-btn" onClick={() => setShowCommentModal(true)}>
        <span className='plus_comment'>+</span> Add a Comment
      </button>
    </div>

    {blogData?.comments?.length > 0 ? (
      <>
        {(showAllComments ? blogData.comments : blogData.comments.slice(0, 3)).map(comment => (
          <div key={comment._id} className="comment-card">
            <div className="comment-header">
              <div className='comment-user-info_wrapper'>
                    {comment.user?.image ? (
              <img 
                src={comment.user.image} 
                alt={comment.user.name} 
                className="comment-avatar"
              />
            ) : (
              <div className="comment-avatar-placeholder">
                {comment.user?.name?.charAt(0) || 'U'}
              </div>
            )}
            <div className="comment-user-info">
              <span className="comment-user-name">
                {comment.user?.name || 'Anonymous'}
              </span>
              <span className="comment-date">
                {new Date(comment.createdAt).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })} | {comment.user?.location || 'Unknown Location'}
              </span>
              </div>
            </div>

            <div className='comment-like_wrapper' style={{ cursor: 'pointer' }} onClick={() => handleLikeComment(comment._id)}>
              <img
                src={likedComments[comment._id] ? HeartRed : Heart}
                alt="Like"
                style={{ verticalAlign: 'middle', width: '16px', height:'16px' }}
              />
              <span style={{ color: likedComments[comment._id] ? '#d32f2f' : 'inherit', marginLeft: 4 }}>Like</span>
            </div>
          </div>
          <div className="comment-content">
            <p>{comment.content}</p>
          </div>
        </div>
      ))}
      {blogData.comments.length > 3 && !showAllComments && (
        <div style={{ textAlign: 'center', marginTop: 8 }}>
          <button
            className="add-comment-btn"
            onClick={() => setShowAllComments(true)}
          >
            See all comments
          </button>
        </div>
      )}
      </>
    ) : (
      <p className="no-comments">No comments yet. Be the first to comment!</p>
    )}
  </div>
</div>
          
        </div>
        {/* Right Sidebar */}
        <div className="blog-sidebar">
          {/* Table of Contents */}
          <div className="toc-section">
            <h3 className="sidebar-heading">Table of contents</h3>
            <ul className="toc-list">
             {Array.isArray(blogData.content) && blogData.content.map((section, idx) =>
        section.title ? (
          <li key={idx} className="toc-item">
            <span className="toc-text">{section.title}</span>
          </li>
        ) : null
      )}
            </ul>
          </div>

           {/* Newsletter */}
          <div className="newsletter-section">
            <p className='newsletter_quote'>Feel Better Every Day with Yoga Tips</p>
            <h3 className="sidebar-heading">Get Our Weekly Yoga & Wellness Newsletter</h3>
            <p className="newsletter-description">
              Discover the transformative power of yoga and holistic living. Our weekly newsletter is crafted for yoga lovers, wellness seekers, and anyone on a journey toward better mind-body balance.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
          </div>


          {/* Related Articles */}
          <div className="related-articles">
            <h3 className="sidebar-heading">Related Article</h3>
            <div className="related-list">
              {relatedBlogs.length === 0 ? (
      <div style={{ padding: 12, color: '#888' }}>No related articles found.</div>
    ) : (
      relatedBlogs.map(blog => (
        <Link to={`/${blog.slug}`} className="related-card" key={blog._id}>
          <img
            src={blog.coverImage || 'https://via.placeholder.com/100'}
            alt={blog.title}
            className="related-image"
          />
          <div className="related-content">
            <h4 className="related-title">
  {blog.title.length > 30 ? blog.title.slice(0, 30) + '...' : blog.title}
</h4>
            <p className="related-meta">
              {formatDate(blog.createdAt)}{blog.timeDuration ? ` • ${blog.timeDuration} mins` : ''}
            </p>
          </div>
        </Link>
      ))
    )}
            </div>
          </div>

         
        </div>

        
      </div>

      {/* Course Sections Slider - New Addition */}
          <div className='course_section_slider_wrapper'>
            <div className="course-sections-slider">
            <div className='course_above section'>
              <h3 className='course_slider_outer_heading'>Join Our Yoga Course</h3>
            </div>
            <div className='course_below_section'>
              <h3 className="sidebar-heading">Yoga Teacher Training Courses (YTTC)</h3>
            {window.innerWidth > 768 ? (
  <SliderJoin data={courseCardData[0].cardData} title={courseCardData[0].title} />
) : (
  <SliderModile data={courseCardData[0].cardData} title={courseCardData[0].title} />
)}

            <div
  className='view_courses_button'
 
  // <-- use useNavigate here
>
 <span onClick={() => navigate('/courses')}  style={{ cursor: 'pointer' }} >
   View all Course <img src={icon_courses} style={{width: '15px', height: '15px'}} alt="" />
 </span>
</div>
            </div>
          </div>
          </div>

          {
            window.innerWidth < 768 && (
              <div className="blog-sidebar_show">
          {/* Table of Contents */}
          {/* <div className="toc-section">
            <h3 className="sidebar-heading">Table of contents</h3>
            <ul className="toc-list">
              {Array.isArray(blogData.content) && blogData.content.map((section, idx) =>
                section.title ? (
                  <li key={idx} className="toc-item">
                    <a href={`#${section.title.replace(/\s+/g, '-').toLowerCase()}`} className="toc-link">{section.title}</a>
                  </li>
                ) : null
              )}
            </ul>
          </div> */}

           {/* Newsletter */}
          <div className="newsletter-section">
            <p className='newsletter_quote'>Feel Better Every Day with Yoga Tips</p>
            <h3 className="sidebar-heading">Get Our Weekly Yoga & Wellness Newsletter</h3>
            <p className="newsletter-description">
              Discover the transformative power of yoga and holistic living. Our weekly newsletter is crafted for yoga lovers, wellness seekers, and anyone on a journey toward better mind-body balance.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
          </div>


          {/* Related Articles */}
          <div className="related-articles">
            <h3 className="sidebar-heading">Related Article</h3>
            <div className="related-list">
              {relatedBlogs.length === 0 ? (
      <div style={{ padding: 12, color: '#888' }}>No related articles found.</div>
    ) : (
      relatedBlogs.map(blog => (
        <Link to={`/${blog.slug}`} className="related-card" key={blog._id}>
          <img
            src={blog.coverImage || 'https://via.placeholder.com/100'}
            alt={blog.title}
            className="related-image"
          />
          <div className="related-content">
            <h4 className="related-title">
  {blog.title.length > 30 ? blog.title.slice(0, 30) + '...' : blog.title}
</h4>
            <p className="related-meta">
              {formatDate(blog.createdAt)}{blog.timeDuration ? ` • ${blog.timeDuration} mins` : ''}
            </p>
          </div>
        </Link>
      ))
    )}
            </div>
          </div>

         
        </div>
            )
          }

          <Footer />

      {/* Comment Modal */}
      <Modal
        open={showCommentModal}
        onClose={() => setShowCommentModal(false)}
        aria-labelledby="comment-modal-title"
        aria-describedby="comment-modal-description"
      >
        <div
          className="comment-modal-box"
          style={{
            background: '#fff',
            padding: 32,
            borderRadius: 20,
            maxWidth: 500,
            width: '95vw',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 2px 24px rgba(0,0,0,0.18)',
            zIndex: 9999,
          }}
        >
          <button
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              background: 'none',
              border: 'none',
              fontSize: 22,
              cursor: 'pointer'
            }}
            onClick={() => setShowCommentModal(false)}
          >×</button>
          <h2 className='leave_comment_heading' style={{ marginBottom: 8 }}>Leave a Comment</h2>
          <p style={{ fontSize: 14, fontFamily: 'Open Sans', color: '#888', marginBottom: 24, fontWeight: '400' }}>Required fields are marked*</p>
          <form onSubmit={handleSubmitComment}>
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="comment-content" style={{ display: 'block', marginBottom: 4, fontWeight: 500, fontFamily: 'Open Sans', fontSize: '16px' }}>Comment*</label>
              <textarea
                id="comment-content"
                rows={4}
                placeholder="Write your comment here"
                value={commentForm.content}
                onChange={e => setCommentForm({ ...commentForm, content: e.target.value })}
                style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #D6D6D6', fontSize: 15 }}
              />
              {formErrors.content && <div style={{ color: 'red', fontSize: 12 }}>{formErrors.content}</div>}
            </div>
            <div
              style={{
                display: 'flex',
                gap: 12,
                marginBottom: 14,
                flexWrap: 'wrap'
              }}

              className="comment-form-fields_custom_mob"
            >
              <div style={{ flex: 1, minWidth: 120 }}>
                <label htmlFor="comment-name" style={{ display: 'block', marginBottom: 4, fontWeight: 500,fontFamily: 'Open Sans', fontSize: '16px' }}>Name*</label>
                <input
                  id="comment-name"
                  type="text"
                  placeholder="Name"
                  value={commentForm.name}
                  onChange={e => setCommentForm({ ...commentForm, name: e.target.value })}
                  style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #D6D6D6', fontSize: 15 }}
                />
                {formErrors.name && <div style={{ color: 'red', fontSize: 12 }}>{formErrors.name}</div>}
              </div>
              <div style={{ flex: 1, minWidth: 120 }}>
                <label htmlFor="comment-email" style={{ display: 'block', marginBottom: 4, fontWeight: 500, fontFamily: 'Open Sans', fontSize: '16px' }}>Email*</label>
                <input
                  id="comment-email"
                  type="email"
                  placeholder="Email"
                  value={commentForm.email}
                  onChange={e => setCommentForm({ ...commentForm, email: e.target.value })}
                  style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #D6D6D6', fontSize: 15 }}
                />
                {formErrors.email && <div style={{ color: 'red', fontSize: 12 }}>{formErrors.email}</div>}
              </div>
              <div style={{ flex: 1, minWidth: 120 }}>
                <label htmlFor="comment-country" style={{ display: 'block', marginBottom: 4, fontWeight: 500, fontFamily: 'Open Sans', fontSize: '16px' }}>Country*</label>
                <input
                  id="comment-country"
                  type="text"
                  placeholder="Country"
                  value={commentForm.country}
                  onChange={e => setCommentForm({ ...commentForm, country: e.target.value })}
                  style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #D6D6D6', fontSize: 15 }}
                />
                {formErrors.country && <div style={{ color: 'red', fontSize: 12 }}>{formErrors.country}</div>}
              </div>
            </div>
            <div style={{ marginBottom: 20, marginTop: 20 }}>
        <label style={{ fontSize: 13, color: '#888', display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={saveDetails}
            onChange={e => setSaveDetails(e.target.checked)}
            style={{ marginRight: 6,  }}
          />
          <span style={{fontWeight: 400, fontFamily: 'Open Sans', fontSize: '9px'}}>Save my Name, email, and website in this browser for the next time i comment.</span>
        </label>
      </div>
            {formErrors.submit && <div style={{ color: 'red', marginBottom: 8 }}>{formErrors.submit}</div>}
            <button
              type="submit"
              className="submit-comment-btn"
              disabled={submitting}
              style={{
                width: '40%',
                padding: '10px 0',
                background: '#67A1ED',
                color: '#fff',
                fontFamily: 'Open Sans',
                border: 'none',
                borderRadius: 6,
                fontWeight: 600,
                fontSize: 18,
                cursor: submitting ? 'not-allowed' : 'pointer'
              }}
            >
              {submitting ? 'Submitting...' : 'Submit Form'}
            </button>
          </form>
        </div>
      </Modal>

    </div>
  )
}

export default BlogAnother