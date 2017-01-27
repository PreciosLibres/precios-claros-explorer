
import Link from 'next/prefetch'

const baseImgURL = 'https://imagenes.preciosclaros.gob.ar/productos/'

export default ({ page=null, products=null }) => (
  <div>

    <article>
      <h2 className="f3 fw4 pa3 mv0">Productos</h2>
      <div className="cf pa2">
      {
        products.map((product, i) => (
          <div className="fl w-50 w-25-m w-20-l pa2">
            <Link href={ "/product?id=" + product.id }>
              <a title={ product.value.nombre.split(" x ")[0] } className="db link dim tc">
                <div className="aspect-ratio aspect-ratio--1x1 mb4">
                  <div className="aspect-ratio--object cover" style={{ background: "url(" + baseImgURL + product.key.split("-")[1] + ".jpg) center" }}></div>
                </div>
                <dl className="mt2 f6 lh-copy">
                  <dt className="clip">Nombre</dt>
                  <dd className="ml0 black truncate w-100">{ product.value.nombre.split(" x ")[0] }</dd>
                  <dt className="clip">Presentacion</dt>
                  <dd className="ml0 gray truncate w-100">{ product.value.presentacion }</dd>
                </dl>
              </a>
            </Link>
          </div>
        ))
      }
      </div>
    </article>

    <Link href={`/explorer?p=${page + 1}`}>
      <a className="no-underline pa3 br2 bg-blue white mr6 ml6 db tc mv4">
        Siguiente
      </a>
    </Link>
  </div>
)
