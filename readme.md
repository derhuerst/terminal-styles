# *terminal-styles*

**Terminal styling using ES6 tagged template literals.**

`terminal-styles` tries to be the [sane alternative](https://github.com/yeoman/yo/issues/68) to [`template-colors`](https://github.com/icodeforlove/template-colors). It uses [`ansi-styles`](https://github.com/chalk/ansi-styles#usage) under the hood.

[![npm version](https://img.shields.io/npm/v/terminal-styles.svg)](https://www.npmjs.com/package/terminal-styles)
[![build status](https://img.shields.io/travis/derhuerst/terminal-styles.svg)](https://travis-ci.org/derhuerst/terminal-styles)
[![dependency status](https://img.shields.io/david/derhuerst/terminal-styles.svg)](https://david-dm.org/derhuerst/terminal-styles)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/terminal-styles.svg)](https://david-dm.org/derhuerst/terminal-styles#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/terminal-styles.svg)


## Installing

```shell
npm install terminal-styles
```


## Usage

`styles.x` works like a closing tag.

```js
const styles = require('./index')
const {blue, red, underline, x} = require('./index')
console.log(styles `${blue}foo ${red}bar ${underline}baz${x} qux${x} qax${x}`)
```

You can use [all colors & modifiers from `ansi-styles`](https://github.com/chalk/ansi-styles#styles), except `reset` and `inverse`.


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/terminal-styles/issues).
