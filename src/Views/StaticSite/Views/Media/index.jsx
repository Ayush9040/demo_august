import React, { useState } from 'react'
import './style.scss'
import MediaSection from '../../Components/MediaSection'
import MediaNav from '../../Components/MediaNav'
import GridComponent from '../../Components/GridComponent'
// import { FondationDayGridComponent } from '../../Components/GridComponent'
import CommonBtn from '../../Components/commonbtn'
import Carousel from 'react-gallery-carousel'
import 'react-gallery-carousel/dist/index.css'
// import { harmonyImagesData } from '../../assets/images/media/mediaAsset'
import { mediaData } from '../../utils/mediaData'

const MediaGallery = () => {
  const [viewCarousel, setViewCarousel] = useState()
  const [modalData, setModalData] = useState()

  const disableCarousel = () => {
    setViewCarousel(false)
  }

  // const images = harmonyImagesData.map((number) => ({
  //   src: number,
  // }))

  return (
    <div className='media-gallery-section'>
      <div className='media-gallery'>
        <MediaNav title={'Gallery'} />
        <MediaSection
          upcomingEvents={false}
          subHeading={''}
          invert={true}
          sectionColor={'#D58173'}
          title='Harmony Fest'
          description={
            '“World Harmony Begins Within” Glimpses of The Yoga Institute\'s most exciting and social event ‘Harmony Fest’, held to commemorate 100 years of transforming lives. The event was graced by the president of India, Shri Ram Nath Kovind. The chief guest and other personnel shared their insightful thoughts with the massive audiences who attended the event, spreading a wave of encouragement and optimism.'
          }
          image={mediaData?.[0]?.images?.[0]}
        />
      </div>
      {mediaData?.map((item) => {
        return (
          <div
            className='albums'
            key={item.id}
            style={{ position: 'relative' }}
          >
            <div className='view-album'>
              <h3 >
                {item.title}
                <br />
                <p>1 Albums</p>
              </h3>
              <div
                onClick={() => {
                  setViewCarousel(item.id)
                  setModalData(item?.images.map((number) => ({ src: number })))
                }}
              >
                <CommonBtn text={'View Album'} />
              </div>
            </div>
            <GridComponent imgs={item.images} />
            
            {viewCarousel === item.id && (
              <>
                <div
                  style={{
                    position: 'absolute',
                    top: '-8%',
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
                    height: 800,
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    boxShadow: 'rgb(0 0 0 / 94%) 248px 161px 327px 383px',
                    zIndex: '9999',
                  }}
                >
                  <Carousel
                    images={modalData}
                    style={{ height: '100%', width: '100%' }}
                  />
                </div>
              </>
            )}
          </div>
        )
      })}

      {/* <div className='albums' style={{ position: 'relative' }}>
        <GridComponent />
        <div className='view-album'>
          <h3>
            Harmony Fest
            <br />
            <p>1 Albums</p>
          </h3>
          <div onClick={() => setViewCarousel(!viewCarousel)}>
            <CommonBtn text={'View Album'} />
          </div>
        </div>
        {viewCarousel && (
          <>
            <div
              style={{
                position: 'absolute',
                top: '-8%',
                right: '10px',
                zIndex: '999',
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
                height: 800,
                width: '100%',
                position: 'absolute',
                top: 0,
                boxShadow: 'rgb(0 0 0 / 94%) 248px 161px 327px 383px',
              }}
            >
              <Carousel
                images={images}
                style={{ height: '100%', width: '100%' }}
              />
            </div>
          </>
        )}
      </div>
      <div className='albums'>
        <FondationDayGridComponent />
        <div className='view-album'>
          <h3>
            99th Foundation
            <br />
            <p>1 Albums</p>
          </h3>
          <div onClick={() => setViewCarousel(!viewCarousel)}>
            <CommonBtn text={'View Album'} />
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default MediaGallery
