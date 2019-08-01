import { observable, decorate, action } from 'mobx';

class UIStore {
  homeHoverArea = null;

  setHomeHoverArea(area) {
    this.homeHoverArea = area;
  }
}

export default decorate(UIStore, {
  homeHoverArea: observable,
  setHomeHoverArea: action.bound,
});