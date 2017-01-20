import fetch from 'isomorphic-fetch'

export default async (page=0, limit=10, reduce=false, startkey=null, endkey=null) => {
  let baseURL = 'http://127.0.0.1:5984/preciosclaros/'
  let view = '_design/productos/_view/relevado_en/'

  let query = baseURL + view
              + '?limit=' + limit
              + '&skip=' + page*limit
              + '&reduce=' + reduce
              + '&startkey="01-16-2017"&endkey="01-16-2017"'

  const res  = await fetch(query)
  const json = await res.json()

  return { data: json }
}
