let functions = require('./functions');
const functionsInstance = new functions.functions();
let mathresult = functionsInstance.mathtest(5, 4);
functions.outputtest.consoleOutput(mathresult);