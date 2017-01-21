import Meta from '../components/meta'
import Footer from '../components/footer'
import Breadcrumbs from '../components/breadcrumbs'

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
