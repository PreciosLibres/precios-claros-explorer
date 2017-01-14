import Link from 'next/prefetch'

export default () => (
  <footer className="ph5 ph5-ns pv6 bt b--black-10 black-70">
    <a href="mailto:hola@precioslibres.org" className="link b f3 f2-ns dim black-70 lh-solid">hola@precioslibres.org</a>
    <p className="f6 db gray lh-solid">
      ©© 2017 — Precios Claros Explorer es una herramienta desarrollada con
      tecnologías <a href="#" className="link blue underline">Open Source</a> ❤️
    .</p>
    <div className="mt5">
      <Link href="/">
        <a title="Ir al Inicio" className="f6 dib pr2 mid-gray dim">Inicio</a>
      </Link>
      <Link href="/sobre-precios-libres">
        <a title="Sobre Precios Libres" className="f6 dib pr2 mid-gray dim">Sobre Precios Libres</a>
      </Link>
      <Link href="/terminos-de-uso">
        <a title="Terminos de Uso" className="f6 dib ph2 mid-gray dim">Terminos de Uso</a>
      </Link>
      <Link href="https://github.com/PreciosLibres">
        <a title="Github" className="f6 dib ph2 mid-gray dim">Github</a>
      </Link>
    </div>
  </footer>
)
