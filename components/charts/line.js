import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush,
ResponsiveContainer } from 'recharts'

export default ({ data }) => (
  <div>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart width={600} height={300} data={data}>
       <XAxis dataKey="name" axisLine={false} tickLine={0}/>
       <YAxis axisLine={false} tickLine={0}/>
       <CartesianGrid strokeDasharray="1 1" vertical={false} />
       <Tooltip/>
       <Line type='monotone' dataKey='pv' stroke='#19a974' strokeWidth={4}/>
       <Brush dataKey='name' height={ 30 } stroke="#CCC"/>
      </LineChart>
    </ResponsiveContainer>
  </div>
)
