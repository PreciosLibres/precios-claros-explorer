import React from 'react'
import Page from '../components/inner-page'
import ProductList from '../components/products-list'
import getProducts from '../lib/get-products'

export default class extends React.Component {
  static async getInitialProps ({ query }) {

    return query
  }

  render () {

    return (
      <div>
        <Page title="Precios Claros Explorer" >
          <ProductList />
        </Page>
      </div>
    )
  }
}
