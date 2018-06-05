import React, { Component } from 'react'

class Cart extends Component {
  render() {
    const { cart, products } = this.props
    const productsObj = products.reduce((obj, t) => {
      obj[t.id] = t
      return obj
    }, {})
    const hasProduct = Boolean(cart.addId.length)
    const cartList = hasProduct ? (
      cart.addId.map(t => (
        <div key={t} style={{ margin: '20px 0' }}>
          <span>{productsObj[t].title}</span>
          <span> - </span>
          <span>${productsObj[t].price.toFixed(2)}</span>
          <span> x {cart.quantityById[t]}</span>
        </div>
      ))
    ) : (
      <div>Please add some products to cart.</div>
    )
    const total = hasProduct
      ? cart.addId.reduce((total, t) => {
          return total + productsObj[t].price * cart.quantityById[t]
        }, 0)
      : 0
    return (
      <div style={{ margin: '20px' }}>
        {cartList}
        <div>Total: ${total.toFixed(2)}</div>
        <button disabled={!hasProduct}>Checkout</button>
      </div>
    )
  }
}

export default Cart
