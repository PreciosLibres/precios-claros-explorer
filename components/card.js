
export default ({ title, description, url, button_text }) => (
  <div>
    <article className="fl w-100 w-50-m w-30-ns pa4-ns mr3 mb3 tc ba b--black-10 br2">
        <a href="#0" className="ph2 ph0-ns pb3 link db">
          <h3 className="f5 f4-ns mb0 black-90">{ title }</h3>
          <hr className="mw3 mt3 mb3 bb bw1 b--black-10" />
          <p className="f6 f5 fw4 mt2 lh-copy black-60">{ description }</p>
          <a
            className="f6 center db  br2 bg-green no-underline white ba grow pv3 ph3 tc mt4 mr3"
            href={ url }>
            { button_text }
          </a>
        </a>
      </article>
  </div>
)
