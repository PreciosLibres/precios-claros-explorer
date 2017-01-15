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

          <h1 className="f3 f2-m f1-l">Sobre Precios Libres</h1>

          <div className="pa4">
            <blockquote className="athelas ml0 mt0 pl4 black-90 bl bw2 b--green">
              <p className="f5 f4-m f3-l lh-copy measure mt0">
                It is a capital mistake to theorize before one has data.
                Insensibly one begins to twist facts to suit theories, instead
                of theories to suit facts.
              </p>
              <cite className="f6 ttu tracked fs-normal">―Arthur Conan Doyle, Sherlock Holmes</cite>
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
