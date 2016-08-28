'use strict'

const ansi = require('ansi-styles')



const end = Object.freeze({})

const render = (parts, ...markers) => {

	const stack = []
	const escapes = []
	for (let i = 0; i < markers.length; i++) {

		if (markers[i] === end) {
			const matching = stack.pop()
			const outer = stack[stack.length - 1]
			escapes.push(matching.close + (outer ? outer.open : ''))
		} else {
			stack.push(markers[i])
			escapes.push(markers[i].open)
		}

	}
	if (stack.length > 0)
		throw new Error('start & end markers not balanced')

	let out = ''
	for (let i = 0; i < parts.length; i++) {
		out += parts[i]
		if (i < escapes.length) out += escapes[i]
	}
	return out
}

module.exports = Object.assign(render, ansi, {end})
