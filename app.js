// app.js
import ConsoleWrapper from "./modules/ConsoleWrapper";
import QuickTestModule from "./modules/QuickTestModule";
import Person from "./modules/PeopleModules";
import Driver from "./modules/PeopleModules";

var x = new ConsoleWrapper();
x.speak();

var jozsi =  new Person("Jozsi Bacsi");
var matyi = new Person("Matyi");
var mike = new Driver("Michael Schumacher", "Ferrari");

var qt = new QuickTestModule();
qt.eq("true should be true", true, true);
qt.eq("x should be instanceof of ConsoleWrapper", x instanceof ConsoleWrapper, true);

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
