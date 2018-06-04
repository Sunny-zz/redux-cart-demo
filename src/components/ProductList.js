import React, { Component } from 'react'

class ProductList extends Component {
  handelClick = id => {
    this.props.addToCart(id)
  }
  render() {
    const { products } = this.props
    const productList = products.map(product => (
      <div key={product.id} style={{ margin: '20px' }}>
        <span>{product.title}</span>
        <span> - </span>
        <span>${product.price}</span>
        {product.inventory ? <span> x {product.inventory}</span> : ''}
        <div>
          <button
            onClick={() => this.handelClick(product.id)}
            disabled={!Boolean(product.inventory)}
          >
            {product.inventory ? 'add to cart' : 'sold out'}
          </button>
        </div>
      </div>
    ))
    return <div>{productList}</div>
  }
}

export default ProductList
