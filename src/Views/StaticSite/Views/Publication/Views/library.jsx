import React from 'react'
import './style.scss'
// import PublicationNav from '../../Components/PublicationNav'
import baseDomain, { publicationAssests } from '../../../assets/images/imageAsset'
import InnerNavComponent from '../../../Components/InnerNavComponent'
import { Helmet } from 'react-helmet'
import metaDataObj from '../../../../../Constants/metaData.json'
import { useLocation } from 'react-router-dom'

const library = () => {

  const location = useLocation()

  const yogaLibrary = {
    title:'library',
    color:'white',
    menuColor:'white',
    menuItems:[
      {
        innerTitle:'yoga-health',
        url:'/yoga-and-total-health',
        name:'Yoga and Total Health'
      },
      {
        innerTitle:'yogasattva',
        url:'/yogasattva',
        name:'Yogasattva'
      },
      // {
      //   innerTitle:'books',
      //   url:'/publication/books',
      //   name:'Books'
      // },
      // {
      //   innerTitle:'ebooks',
      //   url:'/publication/e-books',
      //   name:'E-books'
      // },
      {
        innerTitle:'library',
        url:'/library',
        name:'Library'
      }
    ]
  } 
  return (
    <>      { metaDataObj[location.pathname] && 
      <Helmet
        title={metaDataObj[location.pathname || '']?.title || ''}
      /> }
    <div className="library-container">
      <div className="background">
        {/* <PublicationNav title={'library'} /> */}
        <InnerNavComponent abc={yogaLibrary}/>
      </div>
      <div className="library-grid">
        <div className="library-cards">
          <div className="cardDesc">
            <div className="cardImg">
              <div>
                <img
                  src={`${baseDomain}${publicationAssests.publicationAssests6}`}
                  alt="library"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '20px',
                  }}
                />
              </div>
            </div>
            <div className="cardTxt">
              <p>
                A treasure of priceless books. The Yoga Institute contains a
                magnificent selection of books by famous authors from all
                domains. It has a wide range of books, from 1000 years old
                authored books to modern publications. Philosophy, health &
                wellness, yoga & mind, spirituality, and ancient scriptures are
                just a few of the categories available in the extensive
                collection.
              </p>
            </div>
          </div>
          <div className="more-cards">
            <div className="card-1">
              <img
                src={`${baseDomain}${publicationAssests.publicationAssests1}`}
                alt="library"
              />
            </div>
            <div className="card-1">
              <img
                src={`${baseDomain}${publicationAssests.publicationAssests2}`}
                alt="library"
              />
            </div>
            <div className="card-1">
              <img
                src={`${baseDomain}${publicationAssests.publicationAssests3}`}
                alt="library"
              />
            </div>
            <div className="card-1">
              <img
                src={`${baseDomain}${publicationAssests.publicationAssests4}`}
                alt="library"
              />
            </div>
            <div className="card-1">
              <img
                src={`${baseDomain}${publicationAssests.publicationAssests5}`}
                alt="library"
              />
            </div>
            <div className="card-1">
              <img
                src={`${baseDomain}${publicationAssests.publicationAssests6}`}
                alt="library"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default library
