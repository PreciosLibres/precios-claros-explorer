import fetch from 'isomorphic-fetch'

export default async (skip=0, limit=10, reduce=false, group_level=0, startkey=0, endkey=0) => {
  let baseURL = 'http://127.0.0.1:5984/preciosclaros/'
  let view = '_design/productos/_view/all/'

  if (startkey.length > 0 && endkey.length > 0) {
    const query = baseURL + view
                + '?limit=' + limit
                + '&skip=' + skip
                + '&reduce=' + reduce
                + '&group_level=' + group_level
                + '&startkey="'+ startkey +'"'
                + '&endkey="'+ endkey +'"'

                const res  = await fetch(query)
                const json = await res.json()

                return { data: json }
  } else {
    const query = baseURL + view
                + '?limit=' + limit
                + '&skip=' + skip
                + '&reduce=' + reduce
                + '&group_level=' + group_level


                const res  = await fetch(query)
                const json = await res.json()

                return { data: json }
  }





}
