# *terminal-styles*

**Terminal styling using ES6 tagged template literals.**

`terminal-styles` tries to be the [sane alternative](https://github.com/yeoman/yo/issues/68) to [`template-colors`](https://github.com/icodeforlove/template-colors), using only [`ansi-styles`](https://github.com/chalk/ansi-styles#usage) under the hood.

Bundled with [browserify](http://browserify.org/), `terminal-styles` has roughly 100 LOC, whereas [`template-colors`](https://github.com/icodeforlove/template-colors) has roughly 2000 LOC.

[![npm version](https://img.shields.io/npm/v/terminal-styles.svg)](https://www.npmjs.com/package/terminal-styles)
[![build status](https://img.shields.io/travis/derhuerst/terminal-styles.svg)](https://travis-ci.org/derhuerst/terminal-styles)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/terminal-styles.svg)
![minimum Node.js version](https://img.shields.io/node/v/terminal-styles.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installing

```shell
npm install terminal-styles
```


## Usage

`styles.x` works like a closing tag.

```js
const styles = require('terminal-styles')
const {blue, red, underline, x} = styles

console.log(styles `${blue}foo ${red}bar ${underline}baz${x} qux${x} qax${x}`)
```

You can use [all colors & modifiers from `ansi-styles`](https://github.com/chalk/ansi-styles#styles), except `reset` and `inverse`.


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/terminal-styles/issues).
