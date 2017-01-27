import React from 'react'
import GetProducts from '../lib/get-products'
import Page from '../components/inner-page'
import ProductList from '../components/products-list'

export default class extends React.Component {
  static async getInitialProps ({ query }) {
    const { p, l } = query
    const page = Number(p || 0)
    const limit = Number(l || 100)
    const products = await GetProducts(page, limit, false, 0, "", "")

    return { page, products }
  }

  render () {
    const { page, products } = this.props

    return (
      <div>
        <Page title="Catalogo de productos" >
          <ProductList
            page={ page }
            products={ products.data.rows }
          />
        </Page>
      </div>
    )
  }
}
