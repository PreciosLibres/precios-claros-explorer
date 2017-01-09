import React       from 'react'
import Meta        from '../components/meta'
import ProductList from '../components/products-list'
import getProducts from '../lib/get-products'

export default class extends React.Component {

  static async getInitialProps ({ query }) {
    const { limit, offset } = query
    const productos = await getProducts(limit, offset)

    return { productos }
  }

  render () {

    const { page, limit } = this.props

    return (
      <div>
        <Meta/>
        <ProductList productos={ this.props.productos.data.rows } />
      </div>
    )
  }

}
