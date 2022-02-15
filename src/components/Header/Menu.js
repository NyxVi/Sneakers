import React from 'react'
import { Icon } from '../Icons'

function Menu({ setOpenMenu, addClass }) {
  const onCloseMenu = () => {
    setOpenMenu(false)
  }
  return (
    <ul className={`menu ${addClass || ''}`}>
      <li>
        <Icon name="close" addClass="menu-close" onClick={onCloseMenu} />
      </li>
      <li>
        Collections <span></span>
      </li>
      <li>
        Men <span></span>
      </li>
      <li>
        Women <span></span>
      </li>
      <li>
        About <span></span>
      </li>
      <li>
        Contact <span></span>
      </li>
    </ul>
  )
}

export { Menu }
