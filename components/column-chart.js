import { BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default ({ data }) => (
  <div className="mt5">
  <ResponsiveContainer width="100%" height={275}>
    <BarChart
          width={ 600 }
          height={ 300 }
          data={ data }>
      <XAxis dataKey="name" axisLine={false} tickLine={0}/>
      <YAxis axisLine={false} tickLine={0}/>
      <CartesianGrid strokeDasharray="1 1"/>
      <Tooltip/>
      <ReferenceLine y={ 0 } stroke='#DDD'/>
      <Brush dataKey='name' height={ 30 } stroke="#CCC"/>
      <Bar dataKey="pv" fill="#00449e" />
    </BarChart>
  </ResponsiveContainer>
  </div>
)
