// app.js
import ConsoleWrapper from "./modules/ConsoleWrapper";
import QuickTestModule from "./modules/QuickTestModule";
import Person from "./modules/PeopleModules";
import Driver from "./modules/PeopleModules";
import Util from "./modules/Util";

var util = Util.instance;
var util2 = Util.instance;

var x = new ConsoleWrapper();
x.speak();

var jozsi =  new Person("Jozsi Bacsi");
var matyi = new Person("Matyi");
var mike = new Driver("Michael Schumacher", "Ferrari");

var qt = new QuickTestModule();

qt.eq("true should be true", true, true);
qt.eq("x should be instanceof of ConsoleWrapper", x instanceof ConsoleWrapper, true);

// People tests ...
qt.eq("Fullname should be `Jozsi Bacsi`", jozsi.name, "Jozsi Bacsi");
qt.eq("First name should be `Jozsi`", jozsi.firstName, "Jozsi");
qt.eq("Last name should be `Bacsi`", jozsi.lastName, "Bacsi");
qt.eq("First name should be `Matyi`", matyi.firstName, "Matyi");
qt.eq("Last name should be ``", matyi.lastName, "");

qt.eq("First name should be `Michael`", mike.firstName, "Michael");
qt.eq("Car should be `Ferrari`", mike.car, "Ferrari");
qt.eq("Car should say `brrr...`", mike.drive(), "Ferrari says brrr...");
mike.car = "";
qt.eq("Car should way `walking`", mike.drive(), "walking");

// Util tests ...
qt.eq("[] should be true", util.objectUtil.isArray([]), true);
qt.eq("[1,2,'aaa'] should be true", util.objectUtil.isArray([1,2,"aaa"]), true);
qt.eq("{} should be false", util.objectUtil.isArray({}), false);
qt.eq("`pityu lakatos` -> `Pityu Lakatos`", util.stringUtil.toTitleCase("pityu lakatos"), "Pityu Lakatos");
qt.eq("`This Test Sentence!` -> `this-test-sentence`", util.stringUtil.snakify("This Test Sentence!"), "this-test-sentence");
qt.eq("Singleton test, util1 == util2", util, util2);
