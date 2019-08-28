import { observable, decorate, action } from 'mobx';
import moment from 'moment';

class ShowStore {
  transportLayer;
  isLoading = false;
  storeNotLoaded = true;
  shows = [];
  totalShowCount = 0;

  constructor(transportLayer) {
    this.transportLayer = transportLayer;
  }

  loadShows(endpoint) {
    this.isLoading = true;
    this.transportLayer
      .fetchShows(endpoint)
      .then(response => {
        this.setTotalShowCount(response.data.meta.pagination.total);
        this.updateShows(response.data.data);
      });
  };

  stopLoading() {
    this.isLoading = false;
  }

  updateShows(showsData) {
    this.shows = showsData || [];
    this.isLoading = false;
    this.storeNotLoaded = false;
  }

  createShow(endpoint, token, showData) {
    this.isLoading = true;
    return this.transportLayer.createShow(
      endpoint,
      token,
      this.normaliseShowData(showData)
    );
  }

  updateShow(endpoint, token, showData) {
    this.isLoading = true;
    return this.transportLayer.updateShow(
      endpoint,
      showData.id,
      token,
      this.normaliseShowData(showData)
    );
  }

  getShowById(endpoint, showUUID) {
    this.isLoading = false;
    return this.transportLayer.getShow(endpoint, showUUID);
  }

  normaliseShowData(showData) {
    let normalisedShow = {};
    const forbiddenFields = [
      'id',
      'updated_at',
    ];

    Object.keys(showData).map(key => {
      if (showData[key] === undefined) {
        return;
      }

      if (forbiddenFields.includes(key)) {
        return;
      }

      if (showData[key] instanceof moment) {
        normalisedShow[key] = showData[key].utc().format();
        return;
      }

      normalisedShow[key] = showData[key]
    });

    return normalisedShow;
  }

  deleteShow(endpoint, token, showUUID) {
    this.isLoading = true;
    return this.transportLayer.deleteShow(
      endpoint,
      token,
      showUUID
    );
  }

  setTotalShowCount(count) {
    this.totalShowCount = count;
  }
}

export default decorate(ShowStore, {
  isLoading: observable,
  shows: observable,
  storeNotLoaded: observable,
  totalShowCount: observable,
  updateShows: action.bound,
  loadShows: action.bound,
  createShow: action.bound,
  updateShow: action.bound,
  getShowById: action.bound,
  deleteShow: action.bound,
  stopLoading: action.bound,
  setTotalShowCount: action.bound,
});