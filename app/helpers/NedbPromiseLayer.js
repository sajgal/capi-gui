export function findOnePromise(datastore, query) {
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