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
          <h1 className="f3 f2-m f1-l">Terminos de Uso</h1>
          <p className="measure lh-copy">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p className="measure lh-copy">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p className="measure lh-copy">
            <b>Ultima actualización:</b> 01/04/2017 a las 4:30pm.
          </p>
        </article>

        <Footer />
      </div>
    )
  }
}
