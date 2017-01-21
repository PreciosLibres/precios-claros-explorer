
export default ({ title, description, url, button_text }) => (
  <div>
    <div className="fl w-100 w-100-m w-30-l mv2 mr3">
      <a href="/" className="db link dim tc bg-white br3 pa3 pa4-ns ba b--black-10">
        <dl className="f6 lh-copy">
          <dt className="clip">Title</dt>
          <dd className="f4 fw3 ml0 black w-100">{ title }</dd>
          <hr className="mw3 mv3 bb bw1 b--black-10" />
          <dt className="clip">Artist</dt>
          <dd className="ml0 gray w-100">{ description }</dd>
        </dl>
      </a>
    </div>
  </div>
)
