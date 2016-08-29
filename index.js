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

	const stack = [] // to memorize the last color
	const escapes = []
	for (let i = 0; i < markers.length; i++) {

		if (markers[i] === end) {
			const matching = stack.pop()
			let lastColor = null
			for (let i = stack.length - 1; i >= 0; i--) {
				if (stack[i].isColor) {
					lastColor = stack[i]
					break
				}
			}

			escapes.push(matching.close +
				// colors overwrite each other, so we add the old color again
				(lastColor && lastColor.isColor ? lastColor.open : ''))
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
