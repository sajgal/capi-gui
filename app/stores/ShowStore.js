import { observable, decorate, action } from 'mobx';

class ShowStore {
  transportLayer;
  isLoading = false;
  storeNotLoaded = true;
  shows = [];

  constructor(transportLayer) {
    this.transportLayer = transportLayer;
  }

  loadShows(endpoint) {
    this.isLoading = true;
    this.transportLayer
      .fetchShows(endpoint)
      .then(response => {
        this.updateShows(response.data.data);
      });
  };

  updateShows(showsData) {
    this.shows = showsData || [];
    this.isLoading = false;
    this.storeNotLoaded = false;
  }

  createShow(endpoint, token, showData) {
    this.transportLayer
      .createShow(endpoint, token, showData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.message);
      });
  }
}

export default decorate(ShowStore, {
  isLoading: observable,
  shows: observable,
  storeNotLoaded: observable,
  updateShows: action.bound,
  loadShows: action.bound,
  createShow: action.bound,
});