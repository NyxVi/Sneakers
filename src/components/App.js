import { ScreenProvider, ScreenContext } from './Context/'
import React from 'react'
import '../styles/main.scss'
import { Header } from './Header/Header'
import { Modal } from './Modal'
import { Menu } from './Header/Menu'
import { Product as Api } from './api'
import { Carousel } from './Utils/Carousel'
import { Counter } from './Utils/Counter'
import { Icon } from './Icons/'
import { useLocalStorage } from './Hook/useLocalStorage'
import { UpCard } from './Utils/UpCard'
import { Gallery } from './Utils/Gallery'

function App(props) {
  const [openMenu, setOpenMenu] = React.useState(false)
  const [counter, setCounter] = React.useState('')
  const { items: cartProduct, saveItems: saveProduct } = useLocalStorage({
    name: 'CART',
    initialValue: [],
  })
  const [textAlert, setTextAlert] = React.useState('')
  // const valueex = window.matchMedia('(min-width: 768px  )')
  // valueex.addEventListener('change', () => {
  //   console.log('Cambiando el tamaño de la ventana')
  // })
  const ProductApi = new Api()
  const {
    id: productId,
    images: productImages,
    description: productDescription,
    name: productName,
    price: productPrice,
    discount: productDiscount,
    company: productCompany,
    thumbnail: productThumbnail,
  } = ProductApi.getItem(1)
  const boolDiscount = Boolean(productDiscount)
  const totalDiscount = productPrice - (productPrice * productDiscount) / 100

  const addCart = id => {
    const numCounter = Number(counter)
    if (numCounter === 0) {
      setTextAlert('Aumenta la cantidad del producto')
      return false
    }
    const indexItemExist = cartProduct.findIndex(product => product.id === id)
    const newItems = [...cartProduct]
    let text
    if (indexItemExist >= 0) {
      newItems[indexItemExist] = { id, amount: numCounter }
      text = 'Se actualizó el producto'
    } else {
      newItems.push({ id, amount: counter })
      text = 'Se agrego correctamente'
    }
    saveProduct(newItems)
    setTextAlert(text)
  }
  const removeItemCart = id => {
    const newItem = [...cartProduct]
    const indexItemRemove = newItem.findIndex(product => product.id === id)
    newItem.splice(indexItemRemove, 1)
    saveProduct(newItem)
  }
  return (
    <ScreenProvider>
      <React.Fragment>
        <Header
          setOpenMenu={setOpenMenu}
          cartProduct={cartProduct}
          removeItemCart={removeItemCart}
        />
        <div className="productBoddy">
          <ScreenContext.Consumer>
            {value =>
              value.screenSize === 'mobile' ? (
                <Carousel images={productImages} />
              ) : (
                <Gallery images={productImages} thumbnail={productThumbnail} />
              )
            }
          </ScreenContext.Consumer>
          <div className="productBoddy-text">
            <ScreenContext.Consumer>
              {value => {
                const screen = value.screenSize
                const desktop = screen === 'desktop'
                return (
                  <React.Fragment>
                    <div className="product-details">
                      <h4 className="product-company">
                        {productCompany.toUpperCase()}
                      </h4>
                      <h1
                        className={`product-name ${
                          desktop && 'product-name_desktop'
                        }`}
                      >
                        {productName}
                      </h1>
                      <p
                        className={`product-description ${
                          desktop ? 'product-description_desktop' : ''
                        }`}
                      >
                        {productDescription}
                      </p>
                      <div
                        className={
                          'product-price' +
                          (desktop ? ' product-price_desktop' : '')
                        }
                      >
                        <span className="product-price_discount">
                          ${totalDiscount.toFixed(2)}
                        </span>
                        {boolDiscount && (
                          <span className="product-discount">
                            {productDiscount}%
                          </span>
                        )}
                        {boolDiscount && (
                          <span className="product-price_normal">
                            ${productPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                    <div
                      className={`product-actions ${
                        desktop ? 'product-actions_desktop' : ''
                      }`}
                    >
                      <Counter counter={counter} setCounter={setCounter} />
                      <button
                        className="btn"
                        onClick={() => addCart(productId)}
                      >
                        <Icon
                          name="cart"
                          color="white"
                          styles={{ marginRight: '1em' }}
                        />
                        <span>Add to cart</span>
                      </button>
                    </div>
                  </React.Fragment>
                )
              }}
            </ScreenContext.Consumer>
          </div>
        </div>
        {!!textAlert && (
          <UpCard setTextAlert={setTextAlert}>
            <p>{textAlert}</p>
          </UpCard>
        )}
        <ScreenContext.Consumer>
          {values => {
            const desktop = values.screenSize === 'desktop'
            let menuUse

            if (!!openMenu && !desktop) {
              menuUse = (
                <Modal>
                  <Menu setOpenMenu={setOpenMenu} />
                </Modal>
              )
            }
            return menuUse
          }}
        </ScreenContext.Consumer>
      </React.Fragment>
    </ScreenProvider>
  )
}

export default App
