const functions = require('./functions');

test('adds 4 + 5 to equals 9', function(){
    let functionsInstance = new functions.functions();
    expect(functionsInstance.mathtest(4, 5)).toBe(9);
});

test('outputs different values and tests the output', function(){
    let consoleTestValues = require('./consoleOutputValues.json');
    consoleTestValues.forEach(function(value){
        let consoleSpy = jest.spyOn(console, 'log');
        console.log(value);
        expect(consoleSpy).toHaveBeenCalledWith(value);
    });
});

test('calculate different values and check the output', function(){
    let testvalues = require('./calcOutputTestValues.json');
    let functionsInstance = new functions.functions();
    Object.entries(testvalues).forEach(function(entry){
        const [key, value] = entry;
        console.log(key);
        let mathResult = functionsInstance.mathtest(value[0], value[1]);
        expect(parseFloat(key)).toBe(mathResult);
        let consoleSpy = jest.spyOn(console, 'log');
        console.log(mathResult);
        expect(consoleSpy).toHaveBeenCalledWith(key);
    });
});