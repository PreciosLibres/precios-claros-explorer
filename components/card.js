
export default ({ title, description, url, button_text }) => (
  <div>
    <article className="fl w-30 mr4 h6 bg-white br3 pa3 pr5 pl5 pt5 pb5 mv3 ba b--black-10">
      <div className="tc">
        <h1 className="f4">{ title }</h1>
        <hr className="mw3 bb bw1 b--black-10" />
      </div>
      <p className="lh-copy tc measure center f6 black-70">
        { description }
        <a
          className="f6 center db  br2 bg-green no-underline white ba grow pv3 ph3 tc mt4 mr3"
          href={ url }>
          { button_text }
        </a>
      </p>
    </article>
  </div>
)
