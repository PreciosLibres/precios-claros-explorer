import React from 'react'
import Link from 'next/prefetch'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush, ResponsiveContainer } from 'recharts'
import GetProducts from '../api/get-products'
import Page from '../components/layout/inner'
import Divider from '../components/ui/divider'

export default class extends React.Component {
  static async getInitialProps ({ query }) {
    const { id } = query
    const product = await GetProducts(0, 1, false, 0, id, id)

    return { product }
  }

  render () {
    const { product } = this.props
    const baseImgURL = 'https://imagenes.preciosclaros.gob.ar/productos/'

    const data = [
      { name: '09/2016', uv: 4000, pv: 2400, amt: 2400 },
      { name: '10/2016', uv: 4000, pv: 2400, amt: 2400 },
      { name: '11/2016', uv: 3000, pv: 1398, amt: 2210 },
      { name: '12/2016', uv: 2000, pv: 9800, amt: 2290 },
      { name: '01/2017', uv: 2780, pv: 3908, amt: 2000 },
      { name: '02/2017', uv: 1890, pv: 4800, amt: 2181 }
    ]

    return (
      <div>
        <Page title={ product.data.rows[0].value.nombre.split(' x ')[0] }>
          <article className="cf mt5">
            <header className="fn fl-ns w-30-ns pr4-ns">
            <div className="fl w-90 pa2">
              <Link href="/explorer">
                <a title="Galletitas Sabor Vainilla Con Relleno De Frambuesa Bagley Sonrisas" className="db link dim tc">
                <div className="aspect-ratio aspect-ratio--1x1 mb4">
                  <div className="aspect-ratio--object cover" style={{ background: "url(" + baseImgURL + product.data.rows[0].key.split("-")[1] + ".jpg) center" }}></div>
                </div>
                  <dl className="mt2 f6 lh-copy">
                    <dt className="clip">Codigo de barras</dt>
                    <dd className="ml0 code black w-100">
                      <i className="f1 fa fa-barcode mr2" aria-hidden="true"></i>
                      { product.data.rows[0].key.split("-")[1] }
                    </dd>
                  </dl>
                </a>
              </Link>
            </div>
            </header>
            <div className="fn fl-ns w-70-ns">
            <article className="mb5" data-name="slab-stat-small">
              <h3 className="f6 ttu tracked">Estadisticas</h3>
              <div className="cf">
                <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
                  <dd className="f6 fw4 ml0 gray">Marca</dd>
                  <dd className="f3 fw6 ml0">
                    { product.data.rows[0].value.marca }
                  </dd>
                </dl>
                <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
                  <dd className="f6 fw4 ml0 gray">Presentacion</dd>
                  <dd className="f3 fw6 ml0">
                    { product.data.rows[0].value.presentacion }
                  </dd>
                </dl>
                <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
                  <dd className="f6 fw4 ml0 gray">Precio Promedio</dd>
                  <dd className="f3 fw6 ml0">$10.50 - $22.50</dd>
                </dl>
                <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
                  <dd className="f6 fw4 ml0 gray">Relevado en</dd>
                  <dd className="f3 fw6 ml0">1,024 sucursales</dd>
                </dl>
                <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
                  <dd className="f6 fw4 ml0 gray">Último precio relevado</dd>
                  <dd className="f3 fw6 ml0">hace 6 días</dd>
                </dl>
              </div>
            </article>
            <h3 className="f6 ttu tracked mb5">Variación de precio en los últimos 12 meses</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart width={600} height={300} data={data}>
               <XAxis dataKey="name" axisLine={false} tickLine={0}/>
               <YAxis axisLine={false} tickLine={0}/>
               <CartesianGrid strokeDasharray="1 1" vertical={false} />
               <Tooltip/>
               <Line type='monotone' dataKey='pv' stroke='#19a974' strokeWidth={4}/>
               <Brush dataKey='name' height={ 30 } stroke="#CCC"/>
              </LineChart>
            </ResponsiveContainer>
            <Divider />
            <h3 className="f6 ttu tracked mb5">Productos relacionados</h3>
            <section className="">
              <article className="mw8 center br2 ba b--light-blue bg-lightest-blue">
                <div className="dt-ns dt--fixed-ns w-100">
                  <div className="pa3 pa4-ns dtc-ns v-mid">
                    <div>
                      <h2 className="fw4 blue mt0 mb3">No hay productos relacionados</h2>
                      <p className="black-70 measure lh-copy mv0">
                        No encontramos ningún producto relacionado pero podes
                        ayudarnos agregando los que tenes en tu casa.
                      </p>
                    </div>
                  </div>
                  <div className="pa3 pa4-ns dtc-ns v-mid">
                    <a href="#" className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">¡Registrate como voluntario y ayudanos!</a>
                  </div>
                </div>
              </article>
            </section>
            </div>
          </article>
        </Page>
      </div>
    )
  }
}
