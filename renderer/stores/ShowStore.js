import { observable, decorate, action } from 'mobx';

class ShowStore {
  transportLayer;
  isLoading = false;
  shows = [];

  constructor(transportLayer) {
    this.transportLayer = transportLayer;
  }

  loadShows() {
    console.log('loading shows');

    this.isLoading = true;

    this.transportLayer
      .fetchShows()
      .then(response => {
        this.updateShows(response.data.data);
      });
  };

  updateShows(showsData) {
    console.log('updating shows');
    this.shows = showsData || [];
    this.isLoading = false;
    console.log('all done');
  }
}

export default decorate(ShowStore, {
  isLoading: observable,
  shows: observable,
  updateShows: action.bound,
  loadShows: action.bound,
});