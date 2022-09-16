import axios from 'axios'
import React,{ useState } from 'react'
import { Search } from '../../assets/icons/icon'
import BlogCard from '../../Components/BlogSection/BlogCard'
import './style.scss'

const SearchModal = () => {

  const [search,setSearch] = useState('')
  const [ content, setContent ] = useState([])


  console.log(content)

  const searchContent = ( )=>{
    axios.get(`https://cms-dev-be.theyogainstituteonline.org/v1/misc/search/${ search }`).then(res=>setContent(res.data.data))
  }

  return (
    <div className='search-modal' >
      <div className='close-search' >X</div>
      <label className='search-bar' >
        <input type='text' placeholder='Search' name='search' value={search} onChange={(e)=>{ setSearch(e.target.value)}} />
        <span className='search-btn' onClick={searchContent} > { Search } </span>
      </label>

      <div className='search-results' >
        <h2>Blogs</h2>
        {
          content.posts && [content?.posts].map( item=><>
            <BlogCard blogs={item}  />
          </> )
        }
      </div>
    </div>
  )
}

export default SearchModal