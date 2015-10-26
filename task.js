var fs = require('fs')



/**
 * Synchronous mkdir api
 */
fs.mkdirSync('./algorithms/testfile')

/**
 * Synchronous write files
 */
fs.writeFileSync('./algorithms/testfile/test.js','/*\n * this is test file\n */','utf8')