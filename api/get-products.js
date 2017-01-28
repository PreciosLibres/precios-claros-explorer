import fetch from 'isomorphic-fetch'

export default async (page=0, limit=10, reduce=false, group_level=0, startkey=0, endkey=0) => {
  let baseURL = 'https://db.precioslibres.org/preciosclaros/'
  let view = '_design/productos/_view/all/'

  if (startkey.length > 0 && endkey.length > 0) {
    var query = baseURL + view
                + '?limit=' + limit
                + '&skip=' + page*limit
                + '&reduce=' + reduce
                + '&group_level=' + group_level
                + '&startkey="'+ startkey +'"'
                + '&endkey="'+ endkey +'"'
  } else {
    var query = baseURL + view
                + '?limit=' + limit
                + '&skip=' + page*limit
                + '&reduce=' + reduce
                + '&group_level=' + group_level
  }

  const res  = await fetch(query)
  const json = await res.json()

  return { data: json }
}
