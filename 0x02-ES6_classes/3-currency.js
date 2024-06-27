export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }
  
  get code() {
    return this._code;
  }
  set code(value) {
    if (typeof value === 'string') {
      this._name = value; 
    } else {
        throw new Error('code is not a string')	    
    }
  }

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`
  }

}
