'use strict'

const ansi = require('ansi-styles')



// reset & reverse are problematic because they also affect colors
const blacklist = ['reset', 'reverse']

// closing tags of colors have a weird behavior, so we need to tag them
const colors = [
	'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray',
	'bgBlack', 'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite', 'bgGray'
]

const styles = Object.keys(ansi)
.filter((style) => blacklist.indexOf(style) < 0)
// todo: consider lodash.omit for this
.reduce((all, style) => {
	all[style] = Object.assign({}, ansi[style], {
		isColor: colors.indexOf(style) >= 0
	})
	return all
}, {})

const end = Object.freeze({end: true})



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

module.exports = Object.assign(render, styles, {x: end})
