import React, { useEffect, useState } from 'react'
import './style.scss'
import MediaSection from '../../Components/MediaSection'
// import MediaNav from '../../Components/MediaNav'
import GridComponent from '../../Components/GridComponent'
// import { FondationDayGridComponent } from '../../Components/GridComponent'
import CommonBtn from '../../Components/commonbtn'
import Carousel from 'react-gallery-carousel'
import 'react-gallery-carousel/dist/index.css'
// import { harmonyImagesData } from '../../assets/images/media/mediaAsset'
import { mediaData } from '../../utils/mediaData'
import InnerNavComponent from '../../Components/InnerNavComponent'

const MediaGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [viewCarousel, setViewCarousel] = useState()
  const [modalData, setModalData] = useState()

  const disableCarousel = () => {
    setViewCarousel(false)
  }
  console.log(viewCarousel,'abc')
  console.log(modalData,'xyz')
  // const images = harmonyImagesData.map((number) => ({
  //   src: number,
  // }))
  const Gallery = {
    title: 'gallery',
    color: 'white',
    menuColor: 'white',
    menuItems: [
      {
        innerTitle: 'gallery',
        url: '/media',
        name: 'Gallery',
      },
      {
        innerTitle: 'news',
        url: '/media/news',
        name: 'News',
      },
      {
        innerTitle: 'events',
        url: '/media/events',
        name: 'Events',
      },
    ],
  }
  return (
    <div className="media-gallery-section">
      <div className="media-gallery">
        {/* <MediaNav title={'Gallery'} /> */}
        <InnerNavComponent abc={Gallery}/>
        <MediaSection
          upcomingEvents={false}
          subHeading={''}
          invert={true}
          sectionColor={'#D58173'}
          title={mediaData[0]?.title}
          description={mediaData[0]?.description}
          image={mediaData?.[0]?.images?.[0]}
          setModalData={setModalData}
          setViewCarousel={setViewCarousel}
          itemId={mediaData[0]?.id}
          itemImages={mediaData[0]?.images}
        />
      </div>
      {mediaData?.map((item, index) => {
        if (index >= 1) {
          return (
            <div
              className="albums"
              key={item.id}
              style={{ position: 'relative' }}
            >
              <div className="view-album">
                <h3>
                  {item.title}
                  <p>1 Albums</p>
                </h3>
                <div
                  onClick={() => {
                    setViewCarousel(item.id)
                    setModalData(
                      item?.images.map((number) => ({ src: number }))
                    )
                  }}
                >
                  <CommonBtn text={'View Album'} />
                </div>
              </div>
              <GridComponent imgs={item.images} />

              {(viewCarousel === item.id)  && (
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
        }
      })}
      {(viewCarousel ===  mediaData[0]?.id)  && (
        <>
          <div
            style={{
              position: 'absolute',
              top: '0%',
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
              top: '30px',
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
}

export default MediaGallery
