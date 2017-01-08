import React       from 'react'
import Meta        from '../components/meta'
import ProductList from '../components/products-list'
import getProducts from '../lib/get-products'

export default class extends React.Component {

  static async getInitialProps () {
    const productos = await getProducts()
    return { productos }
  }

  render () {
    return (
      <div>
        <Meta/>
        <ProductList startkey="0" endkey="0" limit="0" offset="0" productos={ this.props.productos.data.rows } />
      </div>
    )
  }
}
