import React from 'react'

function Card({ title, children, styles }) {
  let childrenCard
  if (children) {
    childrenCard = children
  } else {
    childrenCard = (
      <div className="emptyBodyCard">You {title.toLowerCase()} is empty.</div>
    )
  }
  return (
    <div className="card" style={styles}>
      <h5 className="card-title">{title}</h5>
      <div className="card-body">{childrenCard}</div>
    </div>
  )
}

export { Card }
