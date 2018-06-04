import React, { Component } from 'react'

class Cart extends Component {
  render() {
    const { cart, products } = this.props
    const cartList = cart.addId.length
      ? products.find(t => t.id === cart.addId[0])
      : 'please buy'
    return <div>{cartList.title}</div>
  }
}

export default Cart
