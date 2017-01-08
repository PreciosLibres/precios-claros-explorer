export default ({ producto, precio, relevado_en }) => (
  <div className="fl w-50 w-25-m w-20-l pa2">
    <a href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music" className="db link dim tc">
      <img src="http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png" alt="Frank Ocean Blonde Album Cover" className="w-100 db outline black-10"/>
      <dl className="mt2 f6 lh-copy">
        <dt className="clip">Title</dt>
        <dd className="ml0 black truncate w-100">${ precio }</dd>
        <dt className="clip">Artist</dt>
        <dd className="ml0 gray truncate w-100">{ producto }</dd>
      </dl>
    </a>
  </div>
)
