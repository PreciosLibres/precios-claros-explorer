import React from 'react'
import Meta from '../components/meta'
import ProductList from '../components/products-list'
import getProducts from '../lib/get-products'
import { SingleDatePicker } from 'react-dates';


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
        <Meta />
        <article className="pa3 pa5-ns">
          <h1 className="f2 f1-l"><span className="fw3">Precios</span> Libres.</h1>
          <p className="measure lh-copy">
            Es una plataforma web y una aplicación para teléfonos inteligentes
            que facilita el relevamiento de precios y ayuda a encontrar mejores
            ofertas.
          </p>
          <p className="measure lh-copy">
            A diferencia de otras aplicaciones existentes, no limita la
            información a precios de productos bajo acuerdo y enfatiza la
            participación de los usuarios para mantener la información
            actualizada, esto es, inteligencia colectiva contra la inflación.
          </p>
          <div className="mt4 mb4 mb0-ns w-100 w-50-l" >
            <p className="f4 fw6 mb3 f6 mt0">
              Subscribite a nuestra lista de correo para más info
            </p>
            <input placeholder="tu-direccion@internet.com" className="mw-100 w-100 w5-ns f5 input-reset ba b--black-20 pv3 ph4 border-box" />
            <input value="Subscribirse" type="submit" className="input-reset w-100 w-auto-ns bg-black-80 white f5 pv2 pv3-ns ph4 ba b--black-80 bg-hover-mid-gray" />
          </div>
        </article>

        <hr className="mw5 ml5 bb bw1 b--black-10" />

        <article className="pa3 pa5-ns" data-name="slab-stat-large">
          <h3 className="f6 ttu tracked">Algunos números</h3>
          <div className="cf">
            <dl className="db dib-l w-auto-l lh-title mr6-l">
              <dd className="f6 fw4 ml0">Productos Únicos</dd>
              <dd className="f2 f-subheadline-l fw6 ml0">1,024</dd>
            </dl>
            <dl className="db dib-l w-auto-l lh-title mr6-l">
              <dd className="f6 fw4 ml0">Sucursales relevadas en todo el País</dd>
              <dd className="f2 f-subheadline-l fw6 ml0">993</dd>
            </dl>
            <dl className="db dib-l w-auto-l lh-title mr6-l">
              <dd className="f6 fw4 ml0">Total de Empresas</dd>
              <dd className="f2 f-subheadline-l fw6 ml0">10-22</dd>
            </dl>
            <dl className="db dib-l w-auto-l lh-title mr6-l">
              <dd className="f6 fw4 ml0">Total de Marcas</dd>
              <dd className="f2 f-subheadline-l fw6 ml0">400</dd>
            </dl>
            <dl className="db dib-l w-auto-l lh-title mr6-l">
              <dd className="f6 fw4 ml0">Marca con mayor cantidad de productos</dd>
              <dd className="f2 f-subheadline-l fw6 ml0">Quilmes</dd>
            </dl>
            <dl className="db dib-l w-auto-l lh-title">
              <dd className="f6 fw4 ml0">Promedio de costo de la canasta familiar</dd>
              <dd className="f2 f-subheadline-l fw6 ml0">$1,200</dd>
            </dl>
          </div>
        </article>

        <hr className="mw5 ml5 bb bw1 b--black-10" />

        <div className="pa3 pa5-ns cf">
          <h3 className="f6 ttu tracked">Datasets</h3>
          <article className="fl mw5 mr4 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
              <h1 className="f4">Noviembre 2016</h1>
              <hr className="mw3 bb bw1 b--black-10" />
            </div>
            <p className="lh-copy measure center f6 black-70">
              Quite affectionate and outgoing.
              She loves to get chin scratches and will
              roll around on the floor waiting for you give her more of them.
            </p>
          </article>
          <article className="fl mw5 mr4 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
              <h1 className="f4">Diciembre 2016</h1>
              <hr className="mw3 bb bw1 b--black-10" />
            </div>
            <p className="lh-copy measure center f6 black-70">
              Quite affectionate and outgoing.
              She loves to get chin scratches and will
              roll around on the floor waiting for you give her more of them.
            </p>
          </article>
          <article className="fl mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
              <h1 className="f4">Enero 2017</h1>
              <hr className="mw3 bb bw1 b--black-10" />
            </div>
            <p className="lh-copy measure center f6 black-70">
              Quite affectionate and outgoing.
              She loves to get chin scratches and will
              roll around on the floor waiting for you give her more of them.
            </p>
          </article>
        </div>

        <footer className="ph5 ph5-ns pv6 bt b--black-10 black-70">
          <a href="mailto:" className="link b f3 f2-ns dim black-70 lh-solid">hola@precioslibres.org</a>
          <p className="f6 db b ttu lh-solid">©© 2017</p>
          <div className="mt5">
            <a href="/language/" title="Language" className="f6 dib pr2 mid-gray dim">Sobre Precios Libres</a>
            <a href="/terms/" title="Terms" className="f6 dib ph2 mid-gray dim">Terminos de Uso</a>
          </div>
        </footer>

      </div>
    )
  }
}
