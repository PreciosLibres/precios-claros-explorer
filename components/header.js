import Divider             from './divider'
import SubscribeForm       from './subscribe-form'
import { LineChart, Line } from 'recharts'

const data = [
  { name: 'Page A', uv: 300, pv: 2600, amt: 3400 },
  { name: 'Page B', uv: 400, pv: 4367, amt: 6400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
  { name: 'Page G', uv: 189, pv: 4800, amt: 2400 },
  { name: 'Page H', uv: 579, pv: 4800, amt: 2400 },
  { name: 'Page I', uv: 29, pv: 4800, amt: 2400 },
  { name: 'Page J', uv: 339, pv: 4800, amt: 2400 },
];

export default () => (
  <div>
    <article className="pa3 pa5-ns">
      <h1 className="f2 f1-l">
        <i className="fa fa-grav mr3" aria-hidden="true"></i>
        <span className="fw3">Precios</span> Libres
      </h1>

      <div className="absolute top-10 right-2">
        <LineChart width={ 900 } height={ 400 } data={ data } className="w-50">
          <Line type="monotone" dataKey="uv" stroke="#19A974" />
        </LineChart>
      </div>

      <p className="measure lh-copy">
        Es una <u>plataforma web</u> y una <u>aplicación para teléfonos inteligentes </u>
         que facilita el <b>relevamiento de precios</b> y ayuda a <b>encontrar mejores
        ofertas</b>.
      </p>

      <p className="measure lh-copy">
        A diferencia de otras aplicaciones existentes, no limita la
        información a precios de productos bajo acuerdo y enfatiza la
        participación de los usuarios para mantener la información
        actualizada, esto es, <b>inteligencia colectiva contra la inflación</b>.
      </p>
      <SubscribeForm />
    </article>
    <Divider />
  </div>
)
