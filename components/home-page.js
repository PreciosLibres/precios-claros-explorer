import Meta from '../components/meta'
import Footer from '../components/footer'
import Breadcrumbs from '../components/breadcrumbs'

export default ({ title, children }) => (
  <div>
    <Meta title={ title } />
    <article className="pa3 pa5-ns">
      { children }
    </article>
    <Footer />
  </div>
)
