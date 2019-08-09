export function findOne(datastore, query) {
  return new Promise((resolve, reject) => {
    datastore.findOne(query, function (err, doc) {
      if (err) {
        reject(err)
      } else {
        resolve(doc)
      }
    })
  })
}

export function find(datastore, query) {
  return new Promise((resolve, reject) => {
    datastore.find(query, function (err, doc) {
      if (err) {
        reject(err)
      } else {
        resolve(doc)
      }
    })
  })
}