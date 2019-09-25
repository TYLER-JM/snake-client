const { connect } = require("./client.js");

console.log('Connecting ...');
connect();


/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */


const handleUserInput = function(key) {
  console.log("key: ", key);
  if (key === '\u0003') {
    process.exit();
  }
};


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput); ///////?????
  return stdin;
};


setupInput();


