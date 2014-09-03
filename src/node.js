var parse = require("./helper/parse.js").parse;
var expression = require("./helper/parse.js").expression;
exports.parse = function(str){
  return JSON.stringify(parse(str));
}



