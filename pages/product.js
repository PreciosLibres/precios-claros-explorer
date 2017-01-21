import Page from '../components/inner-page'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
const data = [
      {name: '09/2016', uv: 4000, pv: 2400, amt: 2400},
      {name: '10/2016', uv: 4000, pv: 2400, amt: 2400},
      {name: '11/2016', uv: 3000, pv: 1398, amt: 2210},
      {name: '12/2016', uv: 2000, pv: 9800, amt: 2290},
      {name: '01/2017', uv: 2780, pv: 3908, amt: 2000},
      {name: '02/2017', uv: 1890, pv: 4800, amt: 2181}
]

export default () => (
  <div>
    <Page title="Frank Ocean Blonde Album Cover">
      <article className="cf mt5">
        <header className="fn fl-ns w-30-ns pr4-ns">
        <div className="fl w-90 pa2">
          <a href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music" className="db link dim tc">
            <img src="http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png" alt="Frank Ocean Blonde Album Cover" className="w-100 db outline black-10"/>
            <dl className="mt2 f6 lh-copy">
              <dt className="clip">Title</dt>
              <dd className="ml0 black truncate w-100">Blonde</dd>
              <dt className="clip">Artist</dt>
              <dd className="ml0 gray truncate w-100">Frank Ocean</dd>
            </dl>
          </a>
        </div>
        </header>
        <div className="fn fl-ns w-70-ns">
        <h2 className="f3 fw4 mb5">Variación historica de precio en los últimos 12 meses</h2>
        <ResponsiveContainer width="100%" height={300}>
        <LineChart width={600} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="name"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        </ResponsiveContainer>
        <h2 className="f3 fw4 mv5">Productos relacionados</h2>

        </div>
      </article>
    </Page>
  </div>
)
