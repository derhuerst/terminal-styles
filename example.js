'use strict'

const styles = require('./index')
const {blue, red, underline, x} = require('./index')

console.log(styles `${blue}foo ${red}bar ${underline}baz${x} qux${x} qax${x}`)
