
const log = require('./logger');

//log('hello');
const os = require('os');

var totlmem = os.totalmem();
var freemem = os.freemem();
// log('total memory :' + totlmem);
// log('free memory :' + freemem);
log(`total memory ${totlmem}`);
log(`free memory ${freemem}`);