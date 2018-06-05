import React, { Component } from 'react'

class Cart extends Component {
  render() {
    const { cart, products } = this.props
    const productsObj = products.reduce((obj, t) => {
      obj[t.id] = t
      return obj
    }, {})
    const cartList = cart.addId.length ? (
      cart.addId.map(t => (
        <div key={t} style={{ margin: '20px' }}>
          <span>{productsObj[t].title}</span>
          <span> - </span>
          <span>${productsObj[t].price}</span>
          <span> x {cart.quantityById[t]}</span>
        </div>
      ))
    ) : (
      <div style={{ margin: '20px' }}>Please add some products to cart.</div>
    )
    return <div>{cartList}</div>
  }
}

export default Cart
