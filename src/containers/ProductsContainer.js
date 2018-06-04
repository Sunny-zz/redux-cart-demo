import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import ProductList from '../components/ProductList'

const ProductsContainer = props => <ProductList {...props} />

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps, { addToCart })(ProductsContainer)
