import React, { useState } from 'react'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import Carousel from 'react-gallery-carousel'
import 'react-gallery-carousel/dist/index.css'
import printMedia from '../../Constants/media'
import './style.scss'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../../Constants/metaData.json'
import { useLocation } from 'react-router-dom'

const PrintMedia = () => {
  const location = useLocation()

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

  const [viewCarousel, setViewCarousel] = useState()
  const [modalData, setModalData] = useState()
  const disableCarousel = () => {
    setViewCarousel(false)
  }


  return (
    <>
      {metaDataObj[location.pathname] &&
        <Helmet
          title={metaDataObj[location.pathname || '']?.title || ''}
        />}
      <div className='print-media-container'>
        {/* <MediaNav title={'News'} /> */}
        <InnerNavComponent abc={MediaNews} />
        <h1>
          Print Media
          <div className='bottom-line'></div>
        </h1>
        {[...printMedia].reverse().map((item, id) => {
          return (
            <div key={id} className='news-card-container'>
              <h2>{item?.year}</h2>
              <div className='news-articles'>
                {item.media.map((image, idx) => {
                  if (image.url !== '') {
                    return (
                      <a href={`${image.url}`} target='_blank' rel='noreferrer'>
                        <div key={idx} className='news-card'>
                          <img src={image.img} alt={image.alt} />
                          <div className='news-details'>
                            <p>{image.alt}</p>
                          </div>
                        </div>
                      </a>
                    )
                  } else {
                    return (
                      <>
                        <div key={idx} className='news-card'
                          onClick={() => {
                            setViewCarousel(idx)
                            setModalData(
                              item?.media?.map((number) => ({ src: number.img }))
                            )
                          }}
                        >
                          <img
                            src={image.img}
                            alt={image.alt}
                          />
                          <div className='news-details'>
                            <p>{image.alt}</p>
                          </div>
                        </div>
                        {viewCarousel === idx && (
                          <>
                            <div
                              style={{
                                position: 'fixed',
                                top: '2%',
                                right: '10px',
                                zIndex: '10000',
                              }}
                            >
                              <p
                                style={{ cursor: 'pointer', color: 'white' }}
                                onClick={disableCarousel}
                              >
                                Close
                              </p>
                            </div>
                            <div
                              style={{
                                height: '100%',
                                padding: '2rem',
                                width: '100%',
                                position: 'fixed',
                                top: '5%',
                                background: '#00000080',
                                boxShadow:
                                  'rgb(0 0 0 / 94%) 248px 161px 327px 383px',
                                zIndex: '9999',
                              }}
                            >
                              <Carousel
                                images={modalData}
                                style={{ height: '100%', width: '100%' }}
                                index={idx}
                              />
                            </div>
                          </>
                        )}
                      </>
                    )
                  }
                })}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default PrintMedia
