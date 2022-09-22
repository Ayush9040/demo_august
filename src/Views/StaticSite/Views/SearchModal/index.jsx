import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { cross, Search } from '../../assets/icons/icon'
import './style.scss'

const SearchModal = () => {
  const [search, setSearch] = useState('')
  const [content, setContent] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  console.log(content)

  const searchContent = () => {
    if( search==='' ) return
    try {
      setIsLoading(true)
      axios
        .get(
          `https://cms-dev-be.theyogainstituteonline.org/v1/misc/search/${search}`
        )
        .then((res) => setContent(res.data.data))
        .then(()=>{setIsLoading(false)})
    } catch (err) {
      console.log(err)
    }
  }

  console.log(isLoading, 'sdfdsa')

  return (
    <div className='search-modal'>
      <Link to='/' >
        <div className='close-search' >{ cross }</div>
      </Link>
      <h2 style={{ fontWeight:'bold',textAlign:'center' }} >Search</h2>
      <label className='search-bar'>
        <input
          type='text'
          placeholder='Search'
          name='search'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
        <span className='search-btn' onClick={searchContent}>
          {Search}
        </span>
      </label>

      {isLoading ? (
        <div className='search-loader'><div className='loader' >Fetching Results....</div><div>Fetching Results....</div></div>
      ) : (
        <div className='search-results'>
          { content?.posts && <div className='blog-results'>
            <h3>Blogs</h3>
            <div className='result-blogs' >
              {content.posts &&
              content?.posts.map((item) => (
                <>
                  <div className='result-item'>
                    <div className='result-img'>
                      <img src={item?.coverImage} />
                    </div>
                    <div className='result-content'>
                      <h4
                        style={{ fontWeight: 'bold' }}
                        dangerouslySetInnerHTML={{ __html: `${item.title}` }}
                      ></h4>
                      <p
                        dangerouslySetInnerHTML={{ __html: `${item.excerpt}` }}
                      ></p>
                      <Link to={`/${item?.slug}`}>
                        <button>Read More</button>
                      </Link>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>}
          { content?.courses && content?.courses?.length!==0 && <div className='blog-results'>
            <h3>Courses</h3>
            <div className='course-results' >
              {content.posts &&
              content?.posts.map((item) => (
                <>
                  <div className='result-item'>
                    <div className='result-img'>
                      <img src={item?.coverImage} />
                    </div>
                    <div className='result-content'>
                      <h4
                        style={{ fontWeight: 'bold' }}
                        dangerouslySetInnerHTML={{ __html: `${item.title}` }}
                      ></h4>
                      <p
                        dangerouslySetInnerHTML={{ __html: `${item.excerpt}` }}
                      ></p>
                      <Link to={`/${item?.slug}`}>
                        <button>Read More</button>
                      </Link>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>}
          { content?.pages && content?.pages?.length!==0 && <div className='blog-results'>
            <h3>Pages</h3>
            <div className='page-results' >
              {content.posts &&
              content?.posts.map((item) => (
                <>
                  <div className='result-item'>
                    <div className='result-img'>
                      <img src={item?.coverImage} />
                    </div>
                    <div className='result-content'>
                      <h4
                        style={{ fontWeight: 'bold' }}
                        dangerouslySetInnerHTML={{ __html: `${item.title}` }}
                      ></h4>
                      <p
                        dangerouslySetInnerHTML={{ __html: `${item.excerpt}` }}
                      ></p>
                      <Link to={`/${item?.slug}`}>
                        <button>Read More</button>
                      </Link>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>}
        </div>
      )}
    </div>
  )
}

export default SearchModal
