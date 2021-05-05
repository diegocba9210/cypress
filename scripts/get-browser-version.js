const versions = require('../browser-versions')
const channel = process.argv[2]

console.log(versions[channel]) //eslint-disable-line no-console
