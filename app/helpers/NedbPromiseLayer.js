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

export function findAndSort(datastore, query, sortQuery) {
  return new Promise((resolve, reject) => {
    datastore.find(query).sort(sortQuery).exec(function (err, doc) {
      if (err) {
        reject(err)
      } else {
        resolve(doc)
      }
    })
  })
}

export function upsert(datastore, entityId, doc) {
  return new Promise((resolve, reject) => {
    datastore.update({ entityId }, doc, { upsert: true }, function (err) {
      if (err) {
        reject(err)
      } else {
        resolve(doc)
      }
    })
  })
}