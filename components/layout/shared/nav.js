import Link from 'next/prefetch'

export default () => (
  <div>
    <nav className="tc mw7 center mt4">
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
  </div>
)
