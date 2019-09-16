// @flow

import React from 'react'
import './style.css'
import { Link } from 'react-router-dom' 

type Props = {
    listMenu: Object
}

const Menu = (props: Props) => {
    const { listMenu } = props

  return (
      <div className="menu">
        <ul>
        { Object.values(listMenu).map((item, index) => {
            return <Link to={`/pages/${item.slice(0, 4)}`} key={index}>{item}</Link>
            }) }
        </ul>
      </div>
  )
}

export default Menu