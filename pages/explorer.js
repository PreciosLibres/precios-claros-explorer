import React from 'react'
import Page from '../components/inner-page'
import ProductList from '../components/products-list'
import getProducts from '../lib/get-products'

export default class extends React.Component {
  static async getInitialProps ({ query }) {
    const { p, l } = query
    const page = Number(p || 0)
    const limit = Number(l || 100)
    const products = await getProducts(page, limit)

    return { page, products }
  }

  render () {
    const { page, products } = this.props

    return (
      <div>
        <Page title="Precios Claros Explorer" >
          <ProductList
            page={ page }
            products={ products.data.rows }
          />
        </Page>
      </div>
    )
  }
}
