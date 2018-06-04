import React from 'react'
import Cart from '../components/Cart'
import { addToCart } from '../actions'
import { connect } from 'react-redux'
const CartContainer = props => <Cart {...props} />
const mapStateToProps = state => ({
  cart: state.cart,
  products: state.products
})

export default connect(mapStateToProps, { addToCart })(CartContainer)
