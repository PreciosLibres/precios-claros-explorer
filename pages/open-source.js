import Page from '../components/layout/inner'
import ProjectItem from '../components/ui/card'

import projects from '../_src/data/projects.json'

export default () => (
  <div>
    <Page title="Open Source">
      <p className="w-100 w-100-m w-50-l lh-copy mb5">
        A lo largo del proceso de apertura de los datos de Precios Libres
        desarrollamos un set de herramientas y abrimos el código a la
        comunidad para que <b>programadores</b>, <b>economistas</b>, <b>periodistas</b> o cualquier
        interesado pueda colaborar en alguno de los proyectos.
      </p>
      <div className="cf">

        <div className="fl w-100 w-100-m w-25-l mr3 mb3">
          <a href="https://github.com/PreciosLibres/precios-claros-dump" className="db link dim tc bg-white br3 pa3 pa4-ns ba b--black-10">
            <dl className="f6 lh-copy">
              <dt className="clip">Title</dt>
              <dd className="f4 fw3 ml0 black w-100">Precios Claros Dump</dd>
              <hr className="mw3 mv3 bb bw1 b--black-10" />
              <dt className="clip">Description</dt>
              <dd className="ml0 gray w-100">
                Crawler para descargar el catalogo de productos del sitio del gobierno Precios Claros.
                <p className="tc center mt4 mb0">
                  <small className="ttl br2 ba bw1 ph2 pv1 mb2 mr2 dib dark-green" href="#0">Python</small>
                  <small className="ttl br2 ba bw1 ph2 pv1 mb2 dib dark-red" href="#0">CouchDB</small>
                </p>
              </dd>
            </dl>
          </a>
        </div>

        <div className="fl w-100 w-100-m w-25-l mr3 mb3">
          <a href="https://github.com/PreciosLibres/precios-claros-explorer" className="db link dim tc bg-white br3 pa3 pa4-ns ba b--black-10">
            <dl className="f6 lh-copy">
              <dt className="clip">Title</dt>
              <dd className="f4 fw3 ml0 black w-100">Precios Claros Web Explorer</dd>
              <hr className="mw3 mv3 bb bw1 b--black-10" />
              <dt className="clip">Description</dt>
              <dd className="ml0 gray w-100">
                Aplicación web para explorar los productos públicados por el sitio de Precios Claros.
                <p className="tc center mt4 mb0">
                  <small className="ttl br2 ba bw1 ph2 pv1 mb2 mr2 dib blue" href="#0">React</small>
                  <small className="ttl br2 ba bw1 ph2 pv1 mb2 mr2 dib black" href="#0">Next</small>
                  <small className="ttl br2 ba bw1 ph2 pv1 mb2 mr2 dib gray" href="#0">Tachyons</small>
                  <small className="ttl br2 ba bw1 ph2 pv1 mb2 dib red" href="#0">D3</small>
                </p>
              </dd>
            </dl>
          </a>
        </div>

      </div>
    </Page>
  </div>
)
