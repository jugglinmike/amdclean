var fs = require
(
  "fs"
);

var clean = require
(
  "./"
);


var context = require("./lib/context");

context.register("router", "lol");

// Load specific example.
console.log
(
  clean.rjs
  ({},
    fs.readFileSync
    (
      "./examples/" + process.argv[2] + ".js"
    )
    .toString
    (
    )
  )
);
