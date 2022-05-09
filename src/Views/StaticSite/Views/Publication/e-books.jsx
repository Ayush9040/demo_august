import React from 'react'
import PublicationCard from '../../Components/PublicationCard'
import PublicationNav from '../../Components/PublicationNav'
import './style.scss'

const EBooks = () => {
  let ebooks = [1, 1, 1, 1, 1, 1, 1, 1, 1]
  return (
    <div className="e-books-container">
      <div className="background">
        <PublicationNav title={'ebooks'} />
        <p>
          With just one click, get free access to these deeply rooted and
          knowledgeable e-books. These books can transport you to another era or
          assist you to grow as a person.
        </p>
      </div>
      <div className="books-grid">
        {ebooks.map((item,i) => {
          return <PublicationCard key={i} color={'#61829D'} />
        })}
      </div>
    </div>
  )
}

export default EBooks
