import React, { useEffect, useState } from 'react'
import PublicationCard from '../../../Components/PublicationCard'
// import PublicationNav from '../../Components/PublicationNav'
import axios from 'axios'
import './style.scss'
import InnerNavComponent from '../../../Components/InnerNavComponent'

const EBooks = () => {
  const [product, setProduct] = useState([])
  const [categories, setCategories] = useState([])
  console.log(categories)

  useEffect(() => {
    axios
      .get(
        'https://ecom-dev-be.theyogainstituteonline.org/v1/product/publishedproduct'
      )
      .then((data) => data.data)
      .then((data) => {
        setProduct(data.data)
        return data.data
      })
    axios
      .get('https://ecom-dev-be.theyogainstituteonline.org/v1/category')
      .then((data) => data.data)
      .then((data) => {
        setCategories(data.data)
      })
  }, [])
  const yogaEbooks = {
    title:'ebooks',
    color:'white',
    menuColor:'white',
    menuItems:[
      {
        innerTitle:'yoga-health',
        url:'/publication/yoga-health',
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
    <div className='e-books-container'>
      <div className='background'>
        {/* <PublicationNav title={'ebooks'} /> */}
        <InnerNavComponent abc={yogaEbooks} />
        <p>
          With just one click, get free access to these deeply rooted and
          knowledgeable e-books. These books can transport you to another era or
          assist you to grow as a person.
        </p>
      </div>
      <div className='books-grid'>
        {product.map((item, i) => {
          if (item.categoryId === '626bb3a23916070012713dd1') {
            return (
              <PublicationCard
                key={i}
                productImg={item.productThumbnail}
                name={item.name}
                price={item.price}
                currency={item.currency}
                color={'#82729D'}
              />
            )
          }
          return
        })}
      </div>
    </div>
  )
}

export default EBooks
