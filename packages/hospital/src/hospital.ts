
export default class Hospital {
  private _name: string;
  constructor(){
    this._name = 'some hospital';
  }

  get name(): string {
    return this._name;
  }

  get(id) {
    return {};
  }
}
