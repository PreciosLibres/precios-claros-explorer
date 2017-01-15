import React            from 'react'
import SingleDatePicker from 'react-dates';
import Meta             from '../components/meta'
import ProductList      from '../components/products-list'
import getProducts      from '../lib/get-products'

export default class extends React.Component {

  static async getInitialProps ({ query }) {
    const { p, l } = query
    const page     = Number(p || 0)
    const limit    = Number(l || 100)
    const products = await getProducts(page, limit)

    return { page, products }
  }

  render () {
    const { page, products } = this.props
    return (
      <div>
        <Meta/>
        <ProductList
          page={ page }
          products={ products.data.rows }
        />
      </div>
    )
  }
}
