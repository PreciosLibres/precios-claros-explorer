import fetch from 'isomorphic-fetch'

export default async () => {
  const res  = await fetch('http://127.0.0.1:5984/preciosclaros/_design/productos/_view/relevado_en?limit=1000&reduce=false&startkey=%2201-04-2017%22&endkey=%2201-04-2017%22')
  const json = await res.json()

  return { data: json }
}
