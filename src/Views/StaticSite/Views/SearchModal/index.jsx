import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { cross, Search } from '../../assets/icons/icon'
import Pagination from 'react-js-pagination'
import './style.scss'
import { useEffect } from 'react'
import { cmsBaseDomain } from '../../../../Constants/appSettings'

const SearchModal = ({ setIsModalOpen }) => {
  const [search, setSearch] = useState('')
  const [content, setContent] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
  })
  const [count,setCount] = useState(0)



  const searchContent = (page,limit) => {
    if (search === '') return
    try {
      setIsLoading(true)
      axios
        .get(
          `${ cmsBaseDomain }/misc/search/?title=${search}&page=${page}&limit=${limit}`
        )
        .then((res) => {
          setContent(res.data)
          setCount(res.data.count)
        })
        .then(() => {
          setIsLoading(false)
        })
    } catch (err) {
      console.log(err)
    }
  }

  const handlePageChange = (pageNumber) => {
    setPagination({ ...pagination,page:pageNumber, limit:10 })
  }

  useEffect(()=>{
    searchContent( pagination.page,pagination.limit )
  },[pagination])

  

  return (
    <div className='search-modal' onKeyDown={ (e)=>{ if(e.key === 'Enter'){ searchContent(1,10) } } } >
      <div onClick={()=>{ setIsModalOpen(false) }}  className='close-search'>{cross}</div>
      <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Search</h2>
      <label className='search-bar'>
        <input
          type='text'
          placeholder='Search blogs'
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
        <div className='search-loader'>
          <div className='loader'>Fetching Results....</div>
          <div>Fetching Results....</div>
        </div>
      ) : (
        <>
          <div className='search-results'>
            { content?.data && ( content?.data.length>0 ? (
              <div className='blog-results'>
                <h3>Blogs</h3>
                <div className='result-blogs'>
                  {content.data &&
                    content?.data.map((item) => (
                      <>
                        <div className='result-item'>
                          <div className='result-img'>
                            <img src={item?.coverImage} />
                          </div>
                          <div className='result-content'>
                            <h4
                              style={{ fontWeight: 'bold' }}
                              dangerouslySetInnerHTML={{
                                __html: `${item.title}`,
                              }}
                            ></h4>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: `${item.excerpt}`,
                              }}
                            ></p>
                            <Link to={`/${item?.slug}`}>
                              <button>Read More</button>
                            </Link>
                          </div>
                        </div>
                      </>
                    ))}
                </div>
              </div>
            ):<div className='no-result-found' > No Result Found</div>)}
            {/* {content?.courses && content?.courses?.length !== 0 && (
              <div className='blog-results'>
                <h3>Courses</h3>
                <div className='course-results'>
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
                              dangerouslySetInnerHTML={{
                                __html: `${item.title}`,
                              }}
                            ></h4>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: `${item.excerpt}`,
                              }}
                            ></p>
                            <Link to={`/${item?.slug}`}>
                              <button>Read More</button>
                            </Link>
                          </div>
                        </div>
                      </>
                    ))}
                </div>
              </div>
            )}
            {content?.pages && content?.pages?.length !== 0 && (
              <div className='blog-results'>
                <h3>Pages</h3>
                <div className='page-results'>
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
                              dangerouslySetInnerHTML={{
                                __html: `${item.title}`,
                              }}
                            ></h4>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: `${item.excerpt}`,
                              }}
                            ></p>
                            <Link to={`/${item?.slug}`}>
                              <button>Read More</button>
                            </Link>
                          </div>
                        </div>
                      </>
                    ))}
                </div>
              </div>
            )} */}
          </div>
          { content?.data?.length>0 && <div className='pagination-container'>
            <Pagination
              activePage={pagination.page}
              itemsCountPerPage={pagination.limit}
              totalItemsCount={count}
              pageRangeDisplayed={3}
              onChange={(e) => handlePageChange(e)}
            />
          </div>}
        </>
      )}
    </div>
  )
}

export default SearchModal
