import Divider from './divider'
import HeaderChart from './column-chart'

export default ({ data }) => (
  <div>
    <article data-name="slab-stat-large">
      <h3 className="f6 ttu tracked">
        <i className="fa fa-area-chart mr1" aria-hidden="true"></i>
        Precios Libres en números
      </h3>

      <HeaderChart data={ data } />
      
      <div className="cf mt5">
        <dl className="db dib-l w-auto-l lh-title mr5-l">
          <dd className="gray fw1 ml0 ttu">Productos Únicos</dd>
          <dd className="f-subheadline-l fw5 ml0">1,024</dd>
        </dl>
        <dl className="db dib-l w-auto-l lh-title mr5-l">
          <dd className="gray fw1 ml0 ttu">Sucursales relevadas en todo el País</dd>
          <dd className="f-subheadline-l fw5 ml0">993</dd>
        </dl>
        <dl className="db dib-l w-auto-l lh-title mr5-l">
          <dd className="gray fw1 ml0 ttu">Total de Empresas</dd>
          <dd className="f-subheadline-l fw5 ml0">22</dd>
        </dl>
        <dl className="db dib-l w-auto-l lh-title mr5-l">
          <dd className="gray fw1 ml0 ttu">Total de Marcas</dd>
          <dd className="f-subheadline-l fw5 ml0">400</dd>
        </dl>
        <dl className="db dib-l w-auto-l lh-title mr5-l">
          <dd className="gray fw1 ml0 ttu">Empresa con mayor cantidad de sucursales</dd>
          <dd className="f-subheadline-l fw5 ml0">Jumbo</dd>
        </dl>
        <dl className="db dib-l w-auto-l lh-title mr5-l">
          <dd className="gray fw1 ml0 ttu">Sucursal con mayor cantidad de productos publicados</dd>
          <dd className="f-subheadline-l fw5 ml0">Día, Palermo</dd>
        </dl>
        <dl className="db dib-l w-auto-l lh-title">
          <dd className="gray fw1 ml0 ttu">Promedio de costo de la canasta familiar hoy</dd>
          <dd className="f-subheadline-l fw5 ml0">
            <small className="f2 v-mid dib pb2 mr2 green"><i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i></small>
            $1,200
          </dd>
        </dl>
      </div>
    </article>
  </div>
)
