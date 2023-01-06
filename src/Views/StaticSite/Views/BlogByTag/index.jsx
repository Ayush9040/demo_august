import { useState,useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import { getBlogsByTag } from './Api'
import Pagination from 'react-js-pagination'
import './style.scss'

const BlogsByTag = () => {

  const { tagId } = useParams()
  const [ blogs,setBlogs ] = useState([])
  const [isLoading,setIsLoading] = useState()
  const [pagination,setPagination] = useState({
    page:1,
    limit:10
  })
  // const [count,setCount] = useState(0)

  const getBlogs = async(page,limit)=>{
    try{
      setIsLoading(true)
      const { data } = await getBlogsByTag( tagId, page, limit )
      setBlogs(data.data)
      setIsLoading(false)
      //setCount(data.count)
    }catch(err){
      setIsLoading(false)
      console.log(err)
    }
  }
  const handlePageChange = (pageNumber) => {
    setPagination({ ...pagination,page:pageNumber, limit:10 })
  }

  useEffect(()=>{
    getBlogs(pagination.page,pagination.limit)
  },[ pagination ])

  return (
    <div className='blogs-by-tag' >
      {isLoading ? (
        <div className='search-loader'>
          <div className='loader'>Fetching Results....</div>
          <div>Fetching Results....</div>
        </div>
      ) : (
        <>
          <div className='search-results'>
            { blogs && ( blogs?.length>0 ? (
              <div className='blog-results'>
                <h2>Blogs</h2>
                <div className='result-blogs'>
                  {
                    blogs?.map((item) => (
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
         
          </div>
          { blogs?.length>0 && <div className='pagination-container'>
            <Pagination
              activePage={pagination.page}
              itemsCountPerPage={pagination.limit}
              totalItemsCount={blogs.length || 1}
              pageRangeDisplayed={3}
              onChange={(e) => handlePageChange(e)}
            />
          </div>}
        </>
      )}
    </div>)
}

export default BlogsByTag