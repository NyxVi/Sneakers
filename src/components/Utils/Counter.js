import React from 'react'
import { Icon } from '../Icons/'

function Counter({ counter, setCounter }) {
  const addCart = () => {
    const num = Number(counter) + 1
    setCounter(num)
  }
  const subtractCart = () => {
    const num = Number(counter) - 1
    if (num <= 0) setCounter('')
    else setCounter(num)
  }
  const onChange = e => {
    const value = e.target.value
    if (/^[0-9]+$/.test(value)) setCounter(value)
    else if (value === '') setCounter('')
  }
  return (
    <div className="counter">
      <Icon
        name="minus"
        addClass="counter-minus c-pointer"
        onClick={subtractCart}
      />
      <input
        type="text"
        placeholder="0"
        value={counter}
        className="counter-num"
        onChange={onChange}
      />
      <Icon name="plus" addClass="counter-plus c-pointer" onClick={addCart} />
    </div>
  )
}

export { Counter }
