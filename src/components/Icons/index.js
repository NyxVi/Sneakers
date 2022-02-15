import React from 'react'

import Logo from '@icons/logo.svg'
import Previous from '@icons/icon-previous.svg'
import Next from '@icons/icon-next.svg'
import Plus from '@icons/icon-plus.svg'
import Minus from '@icons/icon-minus.svg'
import Menu from '@icons/icon-menu.svg'
import Delete from '@icons/icon-delete.svg'
import Close from '@icons/icon-close.svg'
import Cart from '@icons/icon-cart.svg'

const allIcons = {
  logo: (color = '#1D2026') => <Logo fill={color} />,
  previous: (color = '#1D2026') => <Previous stroke={color} />,
  next: (color = '#1D2026') => <Next stroke={color} />,
  plus: (color = '#FF7E1B') => <Plus fill={color} />,
  minus: (color = '#FF7E1B') => <Minus fill={color} />,
  menu: (color = '#69707D') => <Menu fill={color} />,
  delete: (color = '#C3CAD9') => <Delete fill={color} />,
  close: (color = '#69707D') => <Close fill={color} />,
  cart: (color = '#69707D') => <Cart fill={color} />,
}

function Icon({ name, color, styles, onClick, addClass = '' }) {
  return (
    <span className={`span-icon ${addClass}`} style={styles} onClick={onClick}>
      {allIcons[name](color)}
    </span>
  )
}

export { Icon }
