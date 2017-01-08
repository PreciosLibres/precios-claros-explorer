export default ({ producto, precio, relevado_en }) => (
  <div className="fl w-50 w-25-m w-20-l pa2">
    <a href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music" className="db link dim tc">
      <img src={"https://imagenes.preciosclaros.gob.ar/productos/" + producto.split("-")[1] + ".jpg"} alt="Frank Ocean Blonde Album Cover" className="w-100 db outline black-10"/>
      <dl className="mt2 f6 lh-copy">
        <dt className="clip">Title</dt>
        <dd className="ml0 black truncate w-100">${ precio }</dd>
        <dt className="clip">Artist</dt>
        <dd className="ml0 gray truncate w-100">{ producto }</dd>
      </dl>
    </a>
  </div>
)
