class QuickTestModule {
  constructor() {
    this.cnt = 0;
  }

  eq(msg = "Testing...", one,two) {
    this.cnt++;
    var OK = "[OK]";
    var FAIL = "[F A I L!]";
    one == two ? 
      console.info(this.cnt + ". " + OK, " --- ", msg) : 
      console.warn(this.cnt + ". " + FAIL, " --- ", msg, one, "vs", two);
  }
}

module.exports = QuickTestModule;
