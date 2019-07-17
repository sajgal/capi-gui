import { observable, decorate, action } from 'mobx';

class ShowStore {
  transportLayer;
  isLoading = false;
  shows = [];

  constructor(transportLayer) {
    this.transportLayer = transportLayer;
  }

  loadShows() {
    this.isLoading = true;
    this.transportLayer
      .fetchShows()
      .then(response => {
        this.updateShows(response.data.data);
      });
  };

  updateShows(showsData) {
    this.shows = showsData || [];
    this.isLoading = false;
  }

  createShow(showData) {
    this.transportLayer
      .createShow(showData)
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
  updateShows: action.bound,
  loadShows: action.bound,
  createShow: action.bound,
});