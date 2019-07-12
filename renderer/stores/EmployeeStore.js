import faker from 'faker';
import { observable, computed, action, decorate } from 'mobx';

class EmployeeStore {
  employees = [];

  constructor() {
    for (let index = 0; index < 3; index++) {
      this.add();
    }
  }

  createFakeEmployee() {
    return {
      name: faker.name.firstName(),
      deskId: faker.random.number(90),
    }
  }

  add() {
    this.employees = [
      ...this.employees,
      this.createFakeEmployee(),
    ]
  }

  get deskFloor() {
    const deskFloor = [];

    this.employees.forEach(employee => {
      deskFloor[employee.deskId] = (employee.deskId < 50) ? 'first' : 'second';
    });

    return deskFloor;
  }
}

export default decorate(EmployeeStore, {
  employees: observable,
  add: action.bound,
  deskFloor: computed,
});