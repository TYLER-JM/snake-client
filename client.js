const net = require('net');
const { IP, PORT } = require("./constants");

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP, //'172.46.2.204' //172.46.0.135
    port: PORT
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: TJM"); //sending to server
    // setInterval(() => {
    //   conn.write("Move: left");
    // }, 100); //sending to server
    
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