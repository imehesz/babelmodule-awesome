// app.js
import ConsoleWrapper from "./modules/ConsoleWrapper";
import QuickTestModule from "./modules/QuickTestModule";

var x = new ConsoleWrapper();
x.speak();

var qt = new QuickTestModule();
qt.eq("true should be true", true, true);
qt.eq("x should be instanceof of ConsoleWrapper", x instanceof ConsoleWrapper, true);
