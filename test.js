define("a", function() {
  return "hello";
});

require(["a"], function(a) {
  console.log(a);

  console.log(require("a"));
});
