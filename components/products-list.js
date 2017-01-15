import Link from 'next/prefetch'

const baseImgURL = 'https://imagenes.preciosclaros.gob.ar/productos/'

export default ({ page, products }) => (
  <div>
    <article>
      <div className="cf pa2">
        <h1 className="f1 tc">Productos</h1>
        {
          products.map((product, i) => (
            <div key={ i } className="fl w-50 w-25-m w-20-l pa2">
              <a href="#" className="db link dim tc">
                <img
                    src={ baseImgURL + product.id.split("-")[1] + ".jpg"}
                    alt={ product.id }
                    className="w-100 db outline black-10"
                />
                <dl className="mt2 f6 lh-copy">
                  <dt className="clip">Precio</dt>
                  <dd className="ml0 black truncate w-100">
                    ${ product.value.precio }
                  </dd>
                  <dt className="clip">Producto</dt>
                  <dd className="ml0 gray truncate w-100">
                    { product.value.relevado_en }
                  </dd>
                </dl>
              </a>
            </div>
          ))
        }
      </div>
      <Link href={`/explorer?p=${page + 1}`}>
        <a className="no-underline pa3 br2 bg-blue white mr6 ml6 db tc mb4">
          Cargar más productos
        </a>
      </Link>
    </article>
  </div>
)
