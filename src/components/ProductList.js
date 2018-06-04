import React, { Component } from 'react'

class ProductList extends Component {
  render() {
    const { products } = this.props
    return <div>{products.length}</div>
  }
}

export default ProductList
