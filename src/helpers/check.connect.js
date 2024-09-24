'use strict';

const mongoose = require('mongoose');
const process = require('process');
const os = require('os');
const _SECONDS = 5000;
// count connect
const countConnect = () => {
  const numConnection = mongoose.connections.length;

  console.log(`Number of connections:: ${numConnection}`);
};

const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    // Example maximum number of connections based on number osf cores
  }, _SECONDS);
};

module.exports = {
  countConnect,
  checkOverload,
};
