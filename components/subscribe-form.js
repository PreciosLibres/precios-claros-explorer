export default () => (
  <div>
    <div className="mb4 w-100 w-50-m w-50-l">
      <p className="f4 fw6 mb3 f6 mt0">
        Suscríbite a nuestra lista de correo para más info
      </p>
      <input placeholder="tu@email.com"
        className="w-50 f5 input-reset ba b--black-20 pv3 ph4 border-box"
      />
      <input
        value="Suscríbite"
        type="submit"
        className="input-reset w-auto bg-blue white f5 pa3 ph4 ba b--dark-blue bg-hover-mid-gray dim"
      />
    </div>
  </div>
)
