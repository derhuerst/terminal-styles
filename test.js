#!/usr/bin/env node
'use strict'

const {strictEqual} = require('assert')

const styles = require('./index')
const {red, bold, blue, x} = styles

const actual = styles `${red}foo ${bold}bar ${blue}baz${x} qux${x} qax${x}`
const expected = [
	red.open, 'foo ',
		bold.open, 'bar ',
			blue.open, 'baz', blue.close,
			red.open,
		' qux', bold.close,
		red.open,
	' qax', red.close
].join('')

strictEqual(actual, expected, 'rendered incorrectly')

console.info('renders correctly!')
