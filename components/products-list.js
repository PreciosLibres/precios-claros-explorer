import More from '../components/more'

const baseImgURL = 'https://imagenes.preciosclaros.gob.ar/productos/'

export default ({ productos }) => (
  <div>
    <article>
      <div className="cf pa2">
      
        {
          productos.map((producto, i) => (
            <div key={ i } className="fl w-50 w-25-m w-20-l pa2">
              <a href="#" className="db link dim tc">
                <img src={ baseImgURL + producto.id.split("-")[1] + ".jpg"}
                     alt={ producto.id }
                     className="w-100 db outline black-10"/>
                <dl className="mt2 f6 lh-copy">
                  <dt className="clip">Precio</dt>
                  <dd className="ml0 black truncate w-100">
                    ${ producto.value.precio }
                  </dd>
                  <dt className="clip">Producto</dt>
                  <dd className="ml0 gray truncate w-100">
                    { producto.value.relevado_en
                  }</dd>
                </dl>
              </a>
            </div>
          ))
        }

      </div>

      <More />
    </article>
  </div>
)
