var cloneDeep = require('lodash.clonedeep');

function CloneDeep() {
  return function (target, propertyName) {
    var value = target[propertyName];
    return Object.defineProperty(target, propertyName, {
      get: function () {
        return cloneDeep(value);
      },
      set: function (v) {
        value = cloneDeep(v);
      }
    });
  };
}

module.exports = CloneDeep;
