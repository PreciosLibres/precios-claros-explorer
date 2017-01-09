import fetch from 'isomorphic-fetch'

export default async (limit=100, offset=0, reduce=false, startkey=null, endkey=null) => {
  let baseURL = 'http://127.0.0.1:5984/preciosclaros/_design/productos/_view/relevado_en/?'

  const res  = await fetch(baseURL + 'limit='+ limit +'&reduce=' + reduce + '&startkey=%2201-04-2017%22&endkey=%2201-04-2017%22')
  const json = await res.json()

  return { data: json }
}
