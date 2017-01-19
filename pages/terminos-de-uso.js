import Link from 'next/prefetch'
import Page from '../components/page'

export default () => (
  <div>
    <Page title="Terminos de Uso">
      <p className="measure lh-copy">
        <b>Última actualización:</b> 01/04/2017 a las 4:30pm.
      </p>
      <p className="measure lh-copy">
        The information contained on <a href="/" className="link underline blue">http://precioslibres.org</a> website
        (the "Service") is for general information purposes only.
      </p>
      <p className="measure lh-copy">
        Precios Libres assumes no responsibility for errors or omissions in
        the contents on the Service.
      </p>
      <p className="measure lh-copy">
        In no event shall Precios Libres be liable for any special, direct,
        indirect, consequential, or incidental damages or any damages
        whatsoever, whether in an action of contract, negligence or other
        tort, arising out of or in connection with the use of the Service or
        the contents of the Service. Precios Libres reserves the right to
        make additions, deletions, or modification to the contents on the
        Service at any time without prior notice.
      </p>
      <h3 className="f4 mt4">
        External links disclaimer
      </h3>
      <p className="measure lh-copy">
        <a href="/" className="link underline blue">
          http://precioslibres.org
        </a> website may contain links to external
        websites that are not provided or maintained by or in any way
        affiliated with Precios Libres
      </p>
      <p className="measure lh-copy">
        Please note that the Precios Libres does not guarantee the
        accuracy, relevance, timeliness, or completeness of any information
        on these external websites.
      </p>
    </Page>
  </div>
)
