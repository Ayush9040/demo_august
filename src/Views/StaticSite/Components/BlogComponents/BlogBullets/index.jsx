import React from 'react'
import './style.scss'

const BlogBullets = ({ title,bullets=[] }) => {
  return (
    <div className='bullets' >
      <p>{title}</p>
      <ul>
        {bullets.map((item,i)=>{
          return <li className='u_list' key={i} >{item}</li>
        })}
      </ul>
    </div>
  )
}

export default BlogBullets