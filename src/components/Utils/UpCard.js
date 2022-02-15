import React from 'react'
import { Modal } from '../Modal'
import { Card } from './Card'

function UpCard({ children, bgc = 'transparent', setTextAlert, time = 1800 }) {
  React.useEffect(() => {
    setTimeout(() => {
      setTextAlert('')
    }, time)
  })
  return (
    <Modal bgc={bgc} addClass="modal-upCard">
      <Card>{children}</Card>
    </Modal>
  )
}

export { UpCard }
