import React,{ useState } from 'react'
import './style.scss'
import CommonBtn from '../commonbtn'
import Carousel from 'react-gallery-carousel'
import 'react-gallery-carousel/dist/index.css'

const AlumniGrid = ({ notEvent, images=[] }) => {

  const [viewCarousel, setViewCarousel] = useState()
  const [modalData, setModalData] = useState()

  const disableCarousel = () => {
    setViewCarousel(false)
  }
  return (
    <>
      <div className='alumni-grid'> 
        {!notEvent && <p>Alumni Day</p>}
        {!notEvent && <h4>01/01/22</h4>}
        <div className='alumni-event-grid'>
          <div className='grid-element-1'>
            <div className='event-1'>
              {images[0] &&<img src={images[0]} />}
            </div>
            <div className='event-2'>
              {images[1] && <img src={images[1]} />}
            </div>
          </div>
          <div className='grid-element-2'>
            <div className='event-3'>
              {images[2] && <img src={images[2]} />}
            </div>
          </div>
          <div className='grid-element-3'>
            <div className='event-4'>
              {images[3] && <img src={images[3]} />}
            </div>
            <div className='event-5'>
              {images[4] && <img src={images[4]} />}
            </div>
          </div>
        </div>
        {!notEvent && <div onClick={()=>{setModalData(images.map((number) => ({ src: number })));setViewCarousel(true)}} ><CommonBtn text={'View Album'} /></div>}
      </div>
      {viewCarousel&& (
        <>
          <div
            style={{
              position: 'absolute',
              top: '57%',
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
              top: '62%',
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
    </>
  )
}

export default AlumniGrid
