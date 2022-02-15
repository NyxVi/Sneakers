import React from 'react'
import ReactDOM from 'react-dom'

function Modal({ children, bgc = 'hsla(0, 0%, 0%, 75%)', addClass = '' }) {
  return ReactDOM.createPortal(
    <div className={`modal ${addClass}`} style={{ backgroundColor: bgc }}>
      {children}
    </div>,
    document.getElementById('modal')
  )
}
export { Modal }
