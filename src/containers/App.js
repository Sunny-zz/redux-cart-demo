import React, { Component } from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Shopping-Cart Demo</h1>
        <hr />
        <ProductsContainer />
        <hr />
        <CartContainer />
      </div>
    )
  }
}

export default App
