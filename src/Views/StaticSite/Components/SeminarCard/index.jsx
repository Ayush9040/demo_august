import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
//import { share1 } from '../../assets/icons/icon'

const SeminarCard = ({
  title,
  bgImage,
  desc,
  url = '',
  btnText = 'View Story',
  date
}) => {


  // let description = desc
  //   ? desc
  //   : `Lorem ipsum dolor sit amet, consectetur adipiscing
  //   elit. Nullam nec ante id nunc vehicula pharetra nec
  //   vitae est. Sed diam dui, luctus sed velit quis,
  //   placerat consequat felis. Vivamus cursus in mauris
  //   at dignissim. Etiam venenatis semper pharetra.
  //   Duis ut diam eros. In hac habitasse platea
  //   dictumst. Nam tincidunt nisi metus, et dignissim
  //   ligula cursus ut.`

  // const [textTitle, setTextTitle] = useState(false)
  // useEffect(() => {
  //   description.split('').length > 80
  //     ? setTextTitle(description.substring(0, 80) + '...')
  //     : setTextTitle(description)
  // })

  // let heading = title
  //   ? title
  //   : `Lorem ipsum dolor sit amet, consectetur adipiscing
  //   elit. Nullam nec ante id nunc vehicula pharetra nec
  //   vitae est. Sed diam dui, luctus sed velit quis,
  //   placerat consequat felis. Vivamus cursus in mauris
  //   at dignissim. Etiam venenatis semper pharetra.
  //   Duis ut diam eros. In hac habitasse platea
  //   dictumst. Nam tincidunt nisi metus, et dignissim
  //   ligula cursus ut.`

  // const [blogHeading, setBlogHeading] = useState(false)
  // useEffect(() => {
  //   heading.split('').length > 25
  //     ? setBlogHeading(heading.substring(0, 25) + '...')
  //     : setBlogHeading(heading)
  // })

  let formatDate = new Date( date )

  let blogDate = formatDate.getDate() + '/'+ (formatDate.getMonth()+1)+'/'+formatDate.getFullYear() 

  return (
    <div className={'seminar-card'}>
      { bgImage && <div className="seminar-card-image">
        <img src={bgImage} />
      </div>}
      <div className="seminar-card-content">
        <h2>
          <span className="seminar-title" dangerouslySetInnerHTML={{ __html:`${title}` }}  ></span>
          <span className="seminar-date">{ blogDate }</span>
        </h2>
        <p dangerouslySetInnerHTML={{ __html:`${desc}` }} className='seminar-card-desc' ></p>
        <div className="options">
          <Link to={url}>
            <button>{btnText}</button>
          </Link>
          {/* <div className="share-icon">{share1}</div> */}
        </div>
      </div>
    </div>
  )
}

export default SeminarCard
