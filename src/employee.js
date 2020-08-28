class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  validateType(type) {
    if (!isIncludesType(type)) {
      throw new Error(`Employee cannot be of type ${type}`);
    }
  }

  toString() {
    return `${this._name} (${this._type})`;
  }
}

function isIncludesType(type) {
  return [
    'engineer',
    'manager',
    'salesman',
  ].includes(type);
}

module.exports = {
  Employee
}

