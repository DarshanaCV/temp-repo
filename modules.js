const names = require('./module1')
const sayHi = require('./module2')
require('./mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)