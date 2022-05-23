import React, { useEffect, useState } from 'react'
import PublicationCard from '../../Components/PublicationCard'
import PublicationNav from '../../Components/PublicationNav'
import axios from 'axios'
import './style.scss'

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
  return (
    <div className='e-books-container'>
      <div className='background'>
        <PublicationNav title={'ebooks'} />
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
