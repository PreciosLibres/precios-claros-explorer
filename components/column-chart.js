import { BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default ({ data }) => (
  <ResponsiveContainer width="100%" height={275}>
    <BarChart
          width={ 600 }
          height={ 300 }
          data={ data }
          margin={ {top: 5, right: 30, left: 20, bottom: 5} }>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Legend verticalAlign="top" wrapperStyle={ {lineHeight: '40px'} } />
      <ReferenceLine y={ 0 } stroke='#000'/>
      <Brush dataKey='name' height={ 30 } stroke="#8884d8"/>
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
)
