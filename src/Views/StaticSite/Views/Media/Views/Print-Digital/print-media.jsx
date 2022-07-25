import React, { useState } from 'react'
import CommanModal from '../../../../Components/CommanModal'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import printMedia from '../../Constants/media'
import './style.scss'

const PrintMedia = () => {
  const [openModal, setOpenModal] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const MediaNews = {
    title: 'news',
    color: 'black',
    menuColor: 'black',
    menuItems: [
      // {
      //   innerTitle: 'gallery',
      //   url: '/media/media-gallery',
      //   name: 'Gallery',
      // },
      // {
      //   innerTitle: 'news',
      //   url: '/media/news',
      //   name: 'News',
      // },
      // {
      //   innerTitle: 'events',
      //   url: '/media/events',
      //   name: 'Events',
      // },
    ],
  }

  

  return (
    <>
      <div className='print-media-container'>
        {/* <MediaNav title={'News'} /> */}
        <InnerNavComponent abc={MediaNews} />
        <h1>
          Print Media
          <div className='bottom-line'></div>
        </h1>
        {[...printMedia].reverse().map((item, idx) => {
          return (
            <div key={idx} className='news-card-container'>
              <h2>{item?.year}</h2>
              <div className='news-articles' >
                { item.media.map((item,idx)=>{
                  if(item.url!==''){
                    return <div key={idx} className='news-card'>
                      <img src={ item.img } alt={item.alt} />
                      <div className='news-details'>
                        <p>{item.alt}</p>
                        <h3>{item.alt}</h3>
                      </div>
                    </div>
                  }else{
                    return <div key={idx} className='news-card'>
                      <img src={ item.img }                 onClick={() => {
                        setOpenModal(true)
                        setImageUrl(item.img)
                      }} alt={item.alt} />
                      <div className='news-details'>
                        <p>{item.alt}</p>
                        <h3>{item.alt}</h3>
                      </div>
                    </div>
                  }
                }) }
              </div>
            </div>
          )
        })}
      </div>
      {openModal && <CommanModal image={imageUrl} closeModal={setOpenModal} />}
    </>
  )
}

export default PrintMedia
