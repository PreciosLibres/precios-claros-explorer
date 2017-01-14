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
          <h1 className="f3 f2-m f1-l">Sobre Precios Libres</h1>
          <div className="pa4">
            <blockquote className="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
              <p className="f5 f4-m f3-l lh-copy measure mt0">
                Discipline in typography is a prime virtue. Individuality
                must be secured by means that are rational. Distinction
                needs to be won by simplicity and restraint. It is equally
                true that these qualities need to be infused wiht a
                certain spirit and vitality, or they degenerate into
                dullness and mediocrity.
              </p>
              <cite className="f6 ttu tracked fs-normal">―Stanley Morison</cite>
            </blockquote>
          </div>
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
        </article>

        <Footer />
      </div>
    )
  }
}
