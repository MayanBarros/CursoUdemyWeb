const getFlagValue = require('./funcaoGetFlag')

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)