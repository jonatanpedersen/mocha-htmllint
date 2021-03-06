# mocha-htmllint
Runs [htmllint](https://github.com/htmllint/htmllint) as [mocha](https://github.com/mochajs/mocha) tests.

[![Build Status](https://travis-ci.org/jonatanpedersen/mocha-htmllint.svg?branch=master)](https://travis-ci.org/jonatanpedersen/mocha-htmllint)
[![Build Status](https://img.shields.io/npm/v/mocha-htmllint.svg)](https://www.npmjs.com/package/mocha-htmllint)
[![NSP Status](https://nodesecurity.io/orgs/jonatanpedersen/projects/37c0d21c-3deb-4713-bf0e-3968988795b2/badge)](https://nodesecurity.io/orgs/jonatanpedersen/projects/37c0d21c-3deb-4713-bf0e-3968988795b2)

![output](https://raw.githubusercontent.com/jonatanpedersen/mocha-htmllint/master/output.png)

## Install

``` bash
$ npm install mocha-htmllint --save-dev
```

## Usage

### Syntax:
``` javascript
mochaHtmllint(patterns, options);
```

Where patterns is an array of [glob patterns](https://github.com/jpillora/node-glob-all) and options are an [htmllint options](https://github.com/htmllint/htmllint/wiki/Options) object.

### Example:

htmllint.spec.js
``` javascript
const mochaHtmllint = require('mocha-htmllint');

mochaHtmllint([
	'./test/files/**/*.html'
], {
	'line-end-style': false
});
```

## License
MIT License

Copyright (c) 2017 [Jonatan Pedersen](https://www.jonatanpedersen.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
