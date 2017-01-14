import SubscribeForm from './subscribe-form'

export default () => (
  <article className="pa3 pa5-ns">
    <h1 className="f2 f1-l"><span className="fw3">Precios</span> Libres.</h1>
    <p className="measure lh-copy">
      Es una plataforma web y una aplicación para teléfonos inteligentes
      que facilita el relevamiento de precios y ayuda a encontrar mejores
      ofertas.
    </p>
    <p className="measure lh-copy">
      A diferencia de otras aplicaciones existentes, no limita la
      información a precios de productos bajo acuerdo y enfatiza la
      participación de los usuarios para mantener la información
      actualizada, esto es, inteligencia colectiva contra la inflación.
    </p>
    <SubscribeForm />
  </article>
)
