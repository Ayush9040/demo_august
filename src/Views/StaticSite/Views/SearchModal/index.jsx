import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { cross, Search } from '../../assets/icons/icon'
import Pagination from 'react-js-pagination'
import './style.scss'
import { useEffect } from 'react'
import { cmsBaseDomain } from '../../../../Constants/appSettings'

const SearchModal = () => {
  const [search, setSearch] = useState('')
  const [content, setContent] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
  })
  const [count,setCount] = useState(0)
  const [Params] = useSearchParams()  

  const navigate = useNavigate()
  const getSearchData = ()=>{
    if(Params.get('search')){
      try {
        setIsLoading(true)
        setSearch(Params.get('search'))
        axios
          .get(
            `https://cms-dev-be.theyogainstituteonline.org/v1/misc/search/?search=${Params.get('search')}&page=${pagination.page}&limit=${pagination.limit}`
          )
          .then((res) => {
            setContent(res.data)
            setCount(res.data.count)
          })
          .then(() => {
            setIsLoading(false)
          })
        Params.set('search',search)
      } catch (err) {
        console.log(err)
      }
      return
    }
  }
  const searchContent = (page,limit) => {
    if (search === '') {
      setSearch('')
      setContent([])
      navigate('/search')
      return
    }
    navigate(`/search/?search=${search}`)
    try {
      setIsLoading(true)
      axios
        .get(
          `${ cmsBaseDomain }/misc/search/?search=${search}&page=${page}&limit=${limit}`
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
    searchContent( pageNumber,10)
  }

  useEffect(()=>{
    getSearchData()
  },[])

  

  return (
    <div className='search-modal' onKeyDown={ (e)=>{ if(e.key === 'Enter'){ searchContent(1,10) } } } >
      <div onClick={()=>{ navigate('/') }}  className='close-search'>{cross}</div>
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
