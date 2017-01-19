export default ({ avatar_url, name, twitter_username }) => (
  <div>
    <article className="dt w-20 mr4 bb b--black-05 pb2 mt2 fl" href="#0">
      <div className="dtc w2 w3-ns v-mid">
        <img src={ avatar_url } className="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"/>
      </div>
      <div className="dtc v-mid pl3">
        <h1 className="f6 f5-ns fw6 lh-title black mv0">{ name }</h1>
        <h2 className="f6 fw4 mt0 mb0 black-60">
          <a
            href={ "https://twiter.com/" + twitter_username }
            className="link blue">
            @{ twitter_username }
          </a>
        </h2>
      </div>
    </article>
  </div>
)
