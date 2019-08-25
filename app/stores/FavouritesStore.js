import { observable, decorate, action, computed } from 'mobx';
import { upsert, findAndSort, remove } from '../helpers/NedbPromiseLayer'

class FavouritesStore {
  favourites = [];

  constructor(favouritesDataStore) {
    this.favouritesDataStore = favouritesDataStore;
  }

  save(entityType, entityId, title) {
    const doc = {
      entityType,
      entityId,
      title,
    }

    return upsert(this.favouritesDataStore, entityId, doc)
  }

  update(entityId, title) {
    this.favouritesDataStore.update({ entityId: entityId }, { $set: { title } });
  }

  load() {
    findAndSort(this.favouritesDataStore, {}, { updatedAt: -1 })
      .then(docs => this.set(docs))
  }

  set(favourites) {
    this.favourites = favourites;
  }

  remove(entityType, entityId) {
    remove(this.favouritesDataStore, entityType, entityId)
      .then(() => {
        const remainingFavourites = this.favourites.filter(doc => doc.entityId !== entityId);
        this.set(remainingFavourites);
      })
      .catch(err => console.log(err))
  }

  isFavourite(entityId) {
    return this.favourites.some(doc => {
      return doc.entityId === entityId;
    });
  }

  get sortedFavourites() {
    let sortedFavourites = {};

    this.favourites.forEach(doc => {
      if (sortedFavourites[doc.entityType] === undefined) {
        sortedFavourites[doc.entityType] = [];
      }

      sortedFavourites[doc.entityType].push(doc);
    });

    return sortedFavourites;
  }
}

export default decorate(FavouritesStore, {
  favourites: observable,
  save: action.bound,
  load: action.bound,
  set: action.bound,
  update: action.bound,
  remove: action.bound,
  isFavourite: action.bound,
  sortedFavourites: computed,
});