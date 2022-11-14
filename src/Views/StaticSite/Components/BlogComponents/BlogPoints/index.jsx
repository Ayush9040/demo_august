import React from 'react'
import './style.scss'

const BlogPoints = ({ points }) => {
  return (
    <div className='blog-points'>
      <ol>
        {points.map((item, i) => {
          return (
            <li key={i}>
              {item.map((para, i) => {
                if (typeof para !== 'object') {
                  return <p key={i}>{para}</p>
                } else {
                  if (para.type === 'unordered') {
                    return (
                      <ul key={i} >
                        {para?.list?.map((item, i) => {
                          return (
                            <li className='u_list' key={i}>
                              {item}
                            </li>
                          )
                        })}
                      </ul>
                    )
                  } else if (para.type === 'ordered') {
                    <ol className='o_list' >
                      {para?.list?.map((item, i) => {
                        return (
                          <li className='u_list' key={i}>
                            {item}
                          </li>
                        )
                      })}
                    </ol>
                  } else if (para.type === 'iframe') {
                    return (
                      <iframe
                        width={'100%'}
                        height={'500px'}
                        src={para?.url}
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        key={i}
                      ></iframe>
                    )
                  }
                }
              })}
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default BlogPoints
