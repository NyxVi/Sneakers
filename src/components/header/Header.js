import React from 'react'
import Logo from '../../assets/icons/logo.svg'

function Header() {
  return (
    <div className="header">
      <span>
        <Logo className="logo" fill="green" />
      </span>
    </div>
  )
}

export { Header }
