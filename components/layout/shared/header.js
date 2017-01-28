import Link from 'next/prefetch'

export default () => (
  <div>
    <header className="bg-white black-80 tc pv4 mb5 avenir">
      <Link title="Precios Libres">
        <a href="" >
          <img src="/static/images/barcode-scan.svg" className="o-80 mr3 v-mid dib pb2" />
        </a>
      </Link>
      <h1 className="mt2 mb0 baskerville i fw1 f1">Precios Libres</h1>
      <h2 className="mt2 mb0 f6 fw4 ttu tracked">Consulta de precios en tiempo real</h2>
      <nav className=" tc mw7 center mt4">

        <Link href="/">
          <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l br2">
            Inicio
          </a>
        </Link>
        <Link href="/sobre-precios-libres">
          <a className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l br2">
            Sobre Precios Libres
          </a>
        </Link>
        <Link href="/explorer">
          <a className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l br2">
            Explorer
          </a>
        </Link>
        <Link href="/open-source">
          <a className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l br2">
            Open Souce
          </a>
        </Link>
      </nav>
    </header>
  </div>
)
