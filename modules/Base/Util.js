let singleton = Symbol();
let singletonEnforcer = Symbol();

class Util {
  constructor (enforcer) {
    console.log("Hello from ", this);
    if(enforcer != singletonEnforcer) {
      throw "Cannot construct a singleton!";
    }
  }

  static get instance() {
    if(!this[singleton]) {
      this[singleton] = new Util(singletonEnforcer);
    }
    return this[singleton];
  }

  get stringUtil () {
    return {
      toTitleCase: function(str) {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      },
      snakify : function(str) {
        return !str ? "" : str.replace(/[^a-z|A-Z|0-9]/g, "-").replace(/(\-+)/g, "-").replace(/\-$/, '').toLowerCase();
      },
    }
  }

  get objectUtil () {
    return {
      isArray : function(e) {
        return (e && typeof e === 'object' && e instanceof Array);
      },
    }
  }
}

module.exports = Util;
