class functions{
    mathtest = function(a, b){
        return a+b;
    }
}
class outputtest{
    static consoleOutput = function(text){
        console.log(text);
    }
}
module.exports.functions = functions;
module.exports.outputtest = outputtest;