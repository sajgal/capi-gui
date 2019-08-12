import { observable, decorate, action, computed } from 'mobx';
import { upsert, findAndSort } from '../helpers/NedbPromiseLayer'

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

  load() {
    findAndSort(this.favouritesDataStore, {}, { updatedAt: -1 })
      .then(docs => this.set(docs))
  }

  set(favourites) {
    this.favourites = favourites;
  }

  get sortedFavourites() {
    let sortedFavourites = {};

    this.favourites.forEach(doc => {
      if(sortedFavourites[doc.entityType] === undefined) {
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
  sortedFavourites: computed,
});