import React   from 'react'
import Fetch   from 'isomorphic-fetch'
import Link    from 'next/prefetch'
import Meta    from '../components/meta'
import Product from '../components/product'

export default class Dashboard extends React.Component {

  static async getInitialProps () {
    const res = await Fetch('http://127.0.0.1:5984/preciosclaros/_design/productos/_view/relevado_en?limit=10&reduce=false&startkey=%2201-04-2017%22&endkey=%2201-04-2017%22')
    const json = await res.json()
    return { data: json }
  }

  render () {
    return (
      <div>
        <Meta/>
        <article>
          <div className="cf pa2">
            {
              this.props.data.rows.map(function(item, i) {
                return <Product key={ i } producto={ item.value['_id'] } precio={ item.value['precio'] } relevado_en={ item.value['relavado_en'] } />
              })
            }
          </div>
        </article>
      </div>
    )
  }

}
