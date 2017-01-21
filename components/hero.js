import Logo from './logo'
import SubscribeForm from './subscribe-form'

export default () => (
  <div>
    <Logo />
    <p className="w-100 w-100-m w-50-l lh-copy mb4">
      Es una <u>plataforma web</u> y una <u>aplicación para teléfonos inteligentes </u>
       que facilita el <b>relevamiento de precios</b> y ayuda a <b>encontrar mejores
      ofertas</b>.
    </p>
    <p className="w-100 w-100-m w-50-l lh-copy mb4">
      A diferencia de otras aplicaciones existentes, no limita la
      información a precios de productos bajo acuerdo y enfatiza la
      participación de los usuarios para mantener la información
      actualizada, esto es, <b>inteligencia colectiva contra la inflación</b>.
    </p>
    <SubscribeForm />
  </div>
)
