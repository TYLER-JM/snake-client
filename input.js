let connection;

const handleUserInput = function(key) {
  // console.log("key: ", key);
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w") {
    // console.log("Move: up");
    connection.write("Move: up");
  }
  if (key === "s") {
    // console.log("Move: down");
    connection.write("Move: down");
  }
  if (key === "a") {
    // console.log("Move: left");
    connection.write("Move: left");
  }
  if (key === "d") {
    // console.log("Move: right");
    connection.write("Move: right");
  }

  if (key === "h") {
    // console.log("Move: right");
    connection.write("Say: hello");
  }
  if (key === "i") {
    // console.log("Move: right");
    connection.write("Say: iWIN");
  }
  if (key === "j") {
    // console.log("Move: right");
    connection.write("Say: jokes");
  }
  if (key === "k") {
    // console.log("Move: right");
    connection.write("Say: OKAY");
  }
  if (key === "l") {
    // console.log("Move: right");
    connection.write("Say: L.O.S.E.R");
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  stdin.on('data', handleUserInput); ///////?????
  return stdin;
};

module.exports = { setupInput };
