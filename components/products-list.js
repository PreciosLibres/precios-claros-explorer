
import Link from 'next/prefetch'

const baseImgURL = 'https://imagenes.preciosclaros.gob.ar/productos/'

export default ({ page=null, products=null }) => (
  <div>
    <article className="mt5">
      <h2 className="f3 fw4 mv4">Canasta básica familiar</h2>
      <div className="">
        <Link href="/product">
          <a
            title="Galletitas Sabor Vainilla Con Relleno De Frambuesa Bagley Sonrisas" 
            className="link dt w-100 bb b--black-10 pb2 mt2 dim blue">
            <div className="dtc w3">
              <img src="https://imagenes.preciosclaros.gob.ar/productos/7790040931206.jpg" className="db w-100"/>
            </div>
            <div className="dtc v-top pl2">
              <h1 className="f6 f5-ns fw6 lh-title black mv0 truncate">Galletitas Sabor Vainilla Con Relleno De Frambuesa Bagley Sonrisas</h1>
              <h2 className="f6 fw4 mt2 mb0 black-60">Almacen</h2>
              <dl className="mt2 f6">
                <dt className="clip">Precio</dt>
                <dd className="ml0">$25.60 - $75.50</dd>
              </dl>
            </div>
          </a>
        </Link>
      </div>
    </article>
  </div>
)
