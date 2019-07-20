import { observable, decorate, action } from 'mobx';

class UIStore {
  homeHoverArea = null;

  setHomeHoverArea(area) {
    console.log("setting area", area);
    this.homeHoverArea = area;
    console.log('done');

  }
}

export default decorate(UIStore, {
  homeHoverArea: observable,
  setHomeHoverArea: action.bound,
});