import React, { useState } from 'react'
import { arrowIcon } from '../../assets/icons/icon'
import './styles.css'

const MenuToolTip = ({ setKey }) => {
  const [open, setOpen] = useState(false)
  const options = [
    {
      name: 'All Categories',
    },
    {
      name: 'Books',
    },
    {
      name: 'T-shirts',
    },
    {
      name: 'Mats',
    },
    {
      name: 'Bags',
    },
    {
      name: 'Snacks',
    },
  ]

  return (
    <div className="tooltip">
      <span className="heading-1" onClick={() => setOpen(!open)}>
        All Categories <span className="change-svg-width">{arrowIcon}</span>
      </span>
      <div
        className="tooltiptext"
        style={{ visibility: open ? 'visible' : 'hidden' }}
      >
        {options.map((ele,i) => (
          <h3
            onClick={() => {
              setKey(ele.name)
            }}
            className="menu-options"
            key={i}
          >
            {ele.name}
          </h3>
        ))}
      </div>
    </div>
  )
}

export default MenuToolTip
