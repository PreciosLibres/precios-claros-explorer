import Page from '../components/inner-page'
import Cite from '../components/cite'
import AuthorCard from '../components/author-card'

export default () => (
  <div>
    <Page title="Sobre Precios Libres">
      <Cite
        text="It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts."
        author="Arthur Conan Doyle, Sherlock Holmes"
      />
      <h2 className="f3 f2-m f2-l">¿Qué es Precios Libres?</h2>
      <p className="lh-copy w-100 w-100-m w-50-l">
        Precios Libres es un conjunto de herramientas tecnológicas (sitio web
        y aplicación para móviles) para que cualquier ciudadano que cuente
        con acceso a internet, pueda consultar, en tiempo real, los precios
        de los productos que está interesado en comprar y el lugar más
        conveniente para adquirirlos.
      </p>

      <h2 className="f3 f3-m f3-l mt4">Historia</h2>
      <p className="lh-copy w-100 w-100-m w-50-l">
        El objetivo principal de Precios Libres es conocer dónde se consiguen
        los mejores precios de la ciudad. De esta manera, el usuario podrá
        planificar y ahorrar dinero en sus compras diarias, basado en
        información estadística precisa, brindada por la aplicación en tiempo
        real, defenderse de los aumentos indiscriminados de precios y comprar
        de manera inteligente. A diferencia de otras aplicaciones existentes,
        Precios Libres no limita la información a precios de productos bajo
        acuerdo, y enfatiza la participación de los consumidores para
        mantener la información actualizada.
      </p>

      <h2 className="f3 f3-m f3-l mt4">Motivaciones</h2>
      <p className="lh-copy w-100 w-100-m w-50-l">
        El objetivo principal de Precios Libres es conocer dónde se consiguen
        los mejores precios de la ciudad. De esta manera, el usuario podrá
        planificar y ahorrar dinero en sus compras diarias, basado en
        información estadística precisa, brindada por la aplicación en tiempo
        real, defenderse de los aumentos indiscriminados de precios y comprar
        de manera inteligente. A diferencia de otras aplicaciones existentes,
        Precios Libres no limita la información a precios de productos bajo
        acuerdo, y enfatiza la participación de los consumidores para
        mantener la información actualizada.
      </p>

      <h2 className="f3 f3-m f3-l mt4">Autores</h2>
      <div className="cf">
        <AuthorCard
          avatar_url="https://pbs.twimg.com/profile_images/802578670867124224/0HF-diwj.jpg"
          name="Diego Peralta"
          twitter_username="_spacec0wboy"
        />
        <AuthorCard
          avatar_url="https://pbs.twimg.com/profile_images/816351571306893312/XfdH7KvB.jpg"
          name="Nicolás Pace"
          twitter_username="nicopace"
        />
      </div>
    </Page>
  </div>
)
