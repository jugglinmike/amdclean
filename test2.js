var amdclean = require("./");

var src = amdclean.clean("require();");

console.log('"', src, '"');
