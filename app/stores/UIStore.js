import { observable, decorate, action } from 'mobx';

class UIStore {
  homeHoverArea = null;
  lastResponse = null;

  setHomeHoverArea(area) {
    this.homeHoverArea = area;
  }

  setLastResponse(status, statusText, response, entityType) {
    this.lastResponse = {
      status,
      statusText,
      response,
      entityType,
    }
  }
}

export default decorate(UIStore, {
  homeHoverArea: observable,
  lastResponse: observable,
  setHomeHoverArea: action.bound,
  setLastResponse: action.bound,
});