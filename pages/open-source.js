import React       from 'react'
import Link        from 'next/prefetch'
import Meta        from '../components/meta'
import Footer      from '../components/footer'
import Breadcrumbs from '../components/breadcrumbs'

export default class extends React.Component {
  render () {
    return (
      <div>
        <Meta />

        <article className="pa3 pa5-ns">
          <Breadcrumbs />

          <h1 className="f3 f2-m f1-l">Open Source</h1>

          <p className="measure lh-copy">
            A lo largo del proceso de apertura de los datos de Precios Libres
            desarrollamos un set de herramientas y abrimos el código a la
            comunidad para que <b>programadores</b>, <b>economistas</b>, <b>periodistas</b> o cualquier
            interesado pueda colaborar en el proyecto.
          </p>

          <div className="cf">
            <article className="fl mw5 mr4 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
              <div className="tc">
                <h1 className="f4">Precios Claros Dump</h1>
                <hr className="mw3 bb bw1 b--black-10" />
              </div>

              <p className="lh-copy tc measure center f6 black-70">
                Crawler para el sitio del gobierno Precios Claros. Desarrollado en
                Python y CouchDB usando el framework Scrapy.

                <a
                  className="f6 center db br-pill bg-red no-underline white ba grow pv2 ph3 tc mt4 mr3"
                  href="https://github.com/PreciosLibres/precios-claros-dump"
                >
                  <i className="fa fa-github mr1" aria-hidden="true"></i>
                  Github
                </a>
              </p>
            </article>

            <article className="fl mw5 mr4 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
              <div className="tc">
                <h1 className="f4">Precios Claros Explorer</h1>
                <hr className="mw3 bb bw1 b--black-10" />
              </div>

              <p className="lh-copy tc measure center f6 black-70">
                Aplicación web para explorar los productos públicados por el sitio
                de Precios Claros. Desarrolado en Javascript, utilizando la libraria React.js.

                <a
                  className="f6 center db br-pill bg-red no-underline white ba grow pv2 ph3 tc mt4 mr3"
                  href="https://github.com/PreciosLibres/precios-claros-explorer"
                >
                  <i className="fa fa-github mr1" aria-hidden="true"></i>
                  Github
                </a>
              </p>
            </article>

            <article className="fl mw5 mr4 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
              <div className="tc">
                <h1 className="f4">Ionic Inventory Mobile App</h1>
                <hr className="mw3 bb bw1 b--black-10" />
              </div>

              <p className="lh-copy tc measure center f6 black-70">
                Aplicación de listas de compras para teléfonos móviles. Desarrollada en Javascript usando las librerias Ionic 2.0 y
                Angular 2.0.
                <a
                  className="f6 center db br-pill bg-red no-underline white ba grow pv2 ph3 tc mt4 mr3"
                  href="https://github.com/PreciosLibres/ionic-inventory-app"
                >
                  <i className="fa fa-github mr1" aria-hidden="true"></i>
                  Github
                </a>
              </p>
            </article>
          </div>
        </article>

        <Footer />
      </div>
    )
  }
}
