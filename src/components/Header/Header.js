import React from 'react'
import { Icon } from '../Icons/'
import avatar from '@images/image-avatar.png'
import { Card } from '../Utils/Card'
import { Product as Api } from '../api/'
import { ScreenContext } from '../Context/'
import { Menu } from './Menu'

function CartItem({ cartProduct: { id, amount }, removeItemCart }) {
  const api = new Api()
  const { name, price, discount, thumbnail } = api.getItem(id)
  const priceTotal = discount > 0 ? price - (price * discount) / 100 : price
  const removeItem = () => {
    removeItemCart(id)
  }
  return (
    <div className="cartItem">
      <div className="cartItem-info">
        <img src={`./images/${thumbnail[0]}`} />

        <p>
          {name}
          <br />
          {priceTotal.toFixed(2)} x {amount}&nbsp;
          <b>${priceTotal * amount}</b>
        </p>

        <Icon name="delete" addClass="c-pointer" onClick={removeItem} />
      </div>
      <div>
        <button className="btn">Checkout</button>
      </div>
    </div>
  )
}
function Cart({ setOpenCart, openCart, cartProduct }) {
  const onClick = () => {
    setOpenCart(!openCart)
  }
  const num = cartProduct.length
  return (
    <span
      className="cart"
      style={{ margin: '0 1em', cursor: 'pointer' }}
      onClick={onClick}
    >
      <Icon name="cart" />
      {!!num && <span className="cart-amount">{cartProduct[0].amount}</span>}
    </span>
  )
}
function UserAvatar() {
  return (
    <span className="inline-block imgAvatar">
      <img className="imgAvatar--img" src={avatar} />
    </span>
  )
}

function Header({ setOpenMenu, cartProduct, removeItemCart }) {
  const [openCart, setOpenCart] = React.useState(false)
  const contextScreen = React.useContext(ScreenContext)
  const desktop = contextScreen.screenSize === 'desktop'
  const openMenu = () => {
    setOpenMenu(true)
  }
  return (
    <div className={`header ${desktop ? 'header_desktop' : ''}`}>
      <div className="header-section_left">
        {!desktop && (
          <Icon
            name="menu"
            styles={{
              paddingTop: '4px',
              marginRight: '10px',
              cursor: 'pointer',
            }}
            onClick={openMenu}
          />
        )}
        <Icon name="logo" styles={{}} />
        {desktop && <Menu addClass="menu_desktop" />}
      </div>
      <div className="header-section_right">
        <Cart
          openCart={openCart}
          setOpenCart={setOpenCart}
          cartProduct={cartProduct}
        />
        <UserAvatar />
      </div>
      {openCart && (
        <div className={`cartCard ${desktop ? 'cartCard_desktop' : ''}`}>
          <Card title="Cart">
            {cartProduct.length > 0 ? (
              <CartItem
                cartProduct={cartProduct[0]}
                removeItemCart={removeItemCart}
              />
            ) : null}
          </Card>
        </div>
      )}
    </div>
  )
}

export { Header }
