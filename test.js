#!/usr/bin/env node
'use strict'

const test = require('tape')

const styles = require('./index')
const {red, bold, blue, x} = styles



test('renders correctly', (t) => {
	t.plan(1)

	const a = styles `${red}foo ${bold}bar ${blue}baz${x} qux${x} qax${x}`
	const b = [
		red.open, 'foo ',
			bold.open, 'bar ',
				blue.open, 'baz', blue.close,
				red.open,
			' qux', bold.close,
			red.open,
		' qax', red.close
	].join('')

	t.equal(a, b, 'rendered incorrectly')
})
