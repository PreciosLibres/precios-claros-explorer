import Divider from './divider'
import HeaderChart from './column-chart'

export default ({ data }) => (
  <div>
    <article className="pa3 pa5-ns" data-name="slab-stat-large">
      <h3 className="f6 ttu tracked">
        <i className="fa fa-area-chart mr1" aria-hidden="true"></i>
        Precios Libres en números
      </h3>
      <HeaderChart data={ data } />
      <div className="cf mt5">
        <dl className="db dib-l w-auto-l lh-title mr6-l">
          <dd className="f6 fw4 ml0">Productos Únicos</dd>
          <dd className="f-subheadline-l fw4 ml0">1,024</dd>
        </dl>
        <dl className="db dib-l w-auto-l lh-title mr6-l">
          <dd className="f6 fw4 ml0">Sucursales relevadas en todo el País</dd>
          <dd className="f-subheadline-l fw4 ml0">993</dd>
        </dl>
        <dl className="db dib-l w-auto-l lh-title mr6-l">
          <dd className="f6 fw4 ml0">Total de Empresas</dd>
          <dd className="f-subheadline-l fw4 ml0">22</dd>
        </dl>
        <dl className="db dib-l w-auto-l lh-title mr6-l">
          <dd className="f6 fw4 ml0">Total de Marcas</dd>
          <dd className="f-subheadline-l fw4 ml0">400</dd>
        </dl>
        <dl className="db dib-l w-auto-l lh-title mr6-l">
          <dd className="f6 fw4 ml0">Empresa con mayor cantidad de sucursales</dd>
          <dd className="f-subheadline-l fw4 ml0">Jumbo</dd>
        </dl>
        <dl className="db dib-l w-auto-l lh-title mr6-l">
          <dd className="f6 fw4 ml0">Sucursal con mayor cantidad de productos publicados</dd>
          <dd className="f-subheadline-l fw4 ml0">Día</dd>
        </dl>
        <dl className="db dib-l w-auto-l lh-title">
          <dd className="f6 fw4 ml0">Promedio de costo de la canasta familiar</dd>
          <dd className="f-subheadline-l fw4 ml0">$1,200</dd>
        </dl>
      </div>
    </article>
  </div>
)
