import React from 'react'
// import PublicationNav from '../../Components/PublicationNav'
import baseDomain, { publicationAssests } from '../../assets/images/imageAsset'
import InnerNavComponent from '../../Components/InnerNavComponent'

const library = () => {
  const yogaLibrary = {
    title:'library',
    color:'white',
    menuColor:'white',
    menuItems:[
      {
        innerTitle:'yoga-health',
        url:'/publication',
        name:'Yoga and Total Health'
      },
      {
        innerTitle:'yogasttav',
        url:'/publication/yogasattva',
        name:'Yogasattava'
      },
      {
        innerTitle:'books',
        url:'/publication/books',
        name:'Books'
      },
      {
        innerTitle:'ebooks',
        url:'/publication/e-books',
        name:'E-books'
      },
      {
        innerTitle:'library',
        url:'/publication/library',
        name:'Library'
      }
    ]
  } 
  return (
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
                  src={baseDomain + publicationAssests.libraryAsset}
                  alt=""
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
                src={baseDomain + publicationAssests.publicationAssests1}
                alt=""
              />
            </div>
            <div className="card-1">
              <img
                src={baseDomain + publicationAssests.publicationAssests2}
                alt=""
              />
            </div>
            <div className="card-1">
              <img
                src={baseDomain + publicationAssests.publicationAssests3}
                alt=""
              />
            </div>
            <div className="card-1">
              <img
                src={baseDomain + publicationAssests.publicationAssests4}
                alt=""
              />
            </div>
            <div className="card-1">
              <img
                src={baseDomain + publicationAssests.publicationAssests5}
                alt=""
              />
            </div>
            <div className="card-1">
              <img
                src={baseDomain + publicationAssests.publicationAssests6}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default library
