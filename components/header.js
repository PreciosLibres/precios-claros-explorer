import Divider from './divider'
import SubscribeForm from './subscribe-form'

export default () => (
  <div>
    <article className="pa3 pa5-ns">
      <h1 className="f2 f1-l">
        <i className="fa fa-grav mr3" aria-hidden="true"></i>
        <span className="fw3">Precios</span> Libres
      </h1>
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
