import Meta from './shared/meta'
import Footer from './shared/footer'
import Breadcrumbs from './shared/breadcrumbs'

export default ({ title, children }) => (
  <div>
    <Meta title={ title } />
    <article className="pa3 pa5-ns">
      <Breadcrumbs />
      <h1 className="f3 f2-m f1-l truncate">{ title }</h1>
      { children }
    </article>
    <Footer />
  </div>
)
