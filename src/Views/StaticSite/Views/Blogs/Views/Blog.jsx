import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import './style.scss'
import Heading from '../../../Components/Heading'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogData } from '../Blogs.action'
import { Helmet } from 'react-helmet'
import { useCallback } from 'react'


const BlogAnother = () => {
  let text =''

  const dispatch = useDispatch()
  const navigate = useNavigate();


  const { contentId } = useParams()
  const { blog } = useSelector(state=>state.blogs)

  const blogParseAlgo = useCallback((data='', title) => {
    let headers = {
      title: '',
      links: [],
      metaData: [],
      script: '',
    }
    headers.h1Tag = title
    data = data.replace(/\\n/g, '')
    data = data.split('\n')
    data.forEach((el) =>{
      if(el.includes('<meta') || el.includes('<link')){
        let obj = {}
        let regExp = /(\S+)="[^"]*/g
        let regexMatches = el.match(regExp)
                  
        regexMatches.map(el=>{
          let partition = el.split('="')
          obj[partition[0]] = partition[1].replace(/"/g,'')
        })
                  
        if(el.includes('<meta'))
          headers.metaData.push(obj)
        if(el.includes('<link'))
          headers.links.push(obj)
      }
      else if(el.includes('<title'))
        // headers.title = el.replace('<title>','').replace('</title>','')
      if (headers) {
        headers.title = el.replace('<title>', '').replace('</title>', '');
      }
      else if(el.includes('<script'))
        headers.script = el
              
    })
    text = headers?.title.trim()
    return <Helmet title={`${headers?.title.trim()}`} meta={ headers?.metaData } />
    
  },[blog?.meta, blog?.title ])

  useEffect(() => {
    dispatch(fetchBlogData(contentId))
    window.scrollTo(0,0)
  },[ document?.title ])

  const viewBlog = {
    title: 'Blogs',
    color: 'white',
    menuColor: 'white',
    menuItems: [],
  }

  return (
    <>
      { blogParseAlgo( blog?.meta, blog?.title ) }
      <div className='blog-page-container'>
        
        <InnerNavComponent abc={viewBlog}/>
        <Heading largeText={'Blog'} />
        
      </div>
      
      
    
      { Object.keys(blog).length===0 ? <div className='global-loader' >Loading...</div> : <div className='blog-container' id='blog-container' >
        <h1  dangerouslySetInnerHTML={{ __html:`${blog?.title}` }} ></h1>
        <h2 className='meta-heading'> {text} </h2>
        <br/>
        { blog?.coverImage &&  <div className='blog_img' >
          <img src={`${blog?.coverImage}`} alt={`${blog?.altTag}`} loading='lazy' />
        </div> }
        <div className='blog-grid' dangerouslySetInnerHTML={{ __html:`${blog?.content}` }} >
         
        </div>
        {/* <div className='tagsInput'> */}
          {/* <p style={{ display:'inline-block' }} ><b >Tags:&ensp;</b></p> */}
         <div className='tagsInput'>
  <p style={{ display: 'inline-block' }}><b>Tags:&ensp;</b></p>
  {blog?.tags
  ?.filter(el => el.objectType !== 'CATEGORY' && typeof el.name === 'string' && el.name.trim() !== '')
  .map((el, i, arr) => {
    const normalizedName = el.name.replace(/\s+/g, ' ').trim().toLowerCase();

    const tagElement =
      normalizedName === 'the yoga institute' ? (
        <span
          key={i}
          style={{ cursor: 'pointer', textDecoration: 'underline', color: '#ca4625' }}
          onClick={() => {
  navigate('/');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}}
        >
          {el.name}
        </span>
      ) : (
        <span key={i} style={{cursor: 'pointer', textDecoration: 'underline', color: '#ca4625'}}>{el.name}</span>
      );

    // Add comma and space after tag, except the last one
    return (
      <React.Fragment key={i} style={{cursor: 'pointer', textDecoration: 'underline', color: '#ca4625'}}>
        {tagElement}
        {i < arr.length - 1 ? ', ' : ''}
      </React.Fragment>
    );
  })}

{/* </div> */}
</div>
      </div> }
  
    </>
  )
}

export default BlogAnother
