const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '172.46.2.204',
    port: 50541
  });
  //print a message when disconnected
  conn.on("data", (data) => {
    console.log("message from client: ", data);
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };