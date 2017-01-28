import Meta from './shared/meta'
import Header from './shared/header'
import Footer from './shared/footer'
import Breadcrumbs from './shared/breadcrumbs'

export default ({ title, children }) => (
  <div>
    <Meta title={ title } />
    <article className="pa3 pa5-ns">
      <Header />
      { children }
    </article>
    <Footer />
  </div>
)
