import React       from 'react'
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

          <div className="cf">
            <h2 className="f3 f2-m f2-l">Historia</h2>

            <p className=" lh-copy w-60">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>

            <p className=" lh-copy w-60 mb5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>

            <h2 className="f3 f2-m f2-l">Autores</h2>

            <article className="fl mw5 bg-white br3 pa3 pa4-ns mr4 mv3 ba b--black-10">
              <div className="tc">
                <img src="https://pbs.twimg.com/profile_images/802578670867124224/0HF-diwj.jpg" className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
                <h1 className="f3 mb2">Diego Peralta</h1>
                <h2 className="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
              </div>
            </article>

            <article className="fl mw5 bg-white br3 pa3 pa4-ns mr2 mv3 ba b--black-10">
              <div className="tc">
                <img src="https://pbs.twimg.com/profile_images/816351571306893312/XfdH7KvB.jpg" className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
                <h1 className="f3 mb2">Nicolás Pace</h1>
                <h2 className="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
              </div>
            </article>
          </div>
        </article>

        <Footer />
      </div>
    )
  }
}
