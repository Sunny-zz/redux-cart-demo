import React from 'react'
import { connect } from 'react-redux'

const ProductsContainer = props => <div>{props.products[0].title}</div>

const mapStateToProps = state => ({
  products: state.products
})

export default connect(mapStateToProps)(ProductsContainer)
