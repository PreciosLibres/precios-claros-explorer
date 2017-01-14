import React  from 'react'
import Link   from 'next/prefetch'
import Meta   from '../components/meta'
import Footer from '../components/footer'

export default class extends React.Component {
  render () {
    return (
      <div>
        <Meta />

        <article className="pa3 pa5-ns">
          <p>
            <Link href="/">
              <a className="link blue">← Volver a la página principal</a>
            </Link>
          </p>
          <h1 className="f3 f2-m f1-l">Open Source</h1>
          <p className="measure lh-copy">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>

          <div className="cf">
          <article className="fl mw5 mr4 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div className="tc">
              <h1 className="f4">Precios Claros Dump</h1>
              <hr className="mw3 bb bw1 b--black-10" />
            </div>
            <p className="lh-copy tc measure center f6 black-70">
              Quite affectionate and outgoing.
              She loves to get chin scratches and will
              roll around on the floor waiting for you give her more of them.

              <a
                className="f6 center db br-pill bg-red no-underline white ba grow pv2 ph3 tc mt4 mr3"
                href="https://github.com/PreciosLibres/precios-claros-dump"
              >
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
              Quite affectionate and outgoing.
              She loves to get chin scratches and will
              roll around on the floor waiting for you give her more of them.

              <a
                className="f6 center db br-pill bg-red no-underline white ba grow pv2 ph3 tc mt4 mr3"
                href="https://github.com/PreciosLibres/precios-claros-explorer"
              >
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
              Quite affectionate and outgoing.
              She loves to get chin scratches and will
              roll around on the floor waiting for you give her more of them.

              <a
                className="f6 center db br-pill bg-red no-underline white ba grow pv2 ph3 tc mt4 mr3"
                href="https://github.com/PreciosLibres/ionic-inventory-app"
              >
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
