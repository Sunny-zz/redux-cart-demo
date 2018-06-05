import React, { Component } from 'react'
import { getProductsById, getTotal, getCartProducts } from '../selectors'
class Cart extends Component {
  hanelClick = () => {
    this.props.checkOut()
  }
  render() {
    const { cart, products } = this.props
    const hasProduct = Boolean(cart.addId.length)
    const productsObj = getProductsById(products)
    const cartProducts = getCartProducts(cart, products)
    const cartList = hasProduct ? (
      cartProducts.map(t => (
        <div key={t} style={{ margin: '20px 0' }}>
          <span>{t.title}</span>
          <span> - </span>
          <span>${t.price.toFixed(2)}</span>
          <span> x {cart.quantityById[t.id]}</span>
        </div>
      ))
    ) : (
      <div>Please add some products to cart.</div>
    )
    const total = hasProduct ? getTotal(cart, products) : 0
    return (
      <div style={{ margin: '20px' }}>
        {cartList}
        <div>Total: ${total.toFixed(2)}</div>
        <button onClick={this.hanelClick} disabled={!hasProduct}>
          Checkout
        </button>
      </div>
    )
  }
}

export default Cart
