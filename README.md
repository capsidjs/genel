# genel v1.1.2

> [Tagged template literal][tagged-template-literal] utility for **gen**erating html **el**ements.

[![CircleCI](https://circleci.com/gh/capsidjs/genel.svg?style=svg)](https://circleci.com/gh/capsidjs/genel)
[![gzip size](https://img.badgesize.io/capsidjs/genel/master/dist.js.svg?compression=gzip)](https://github.com/capsidjs/genel/blob/master/dist.js)
[![Greenkeeper badge](https://badges.greenkeeper.io/capsidjs/genel.svg)](https://greenkeeper.io/)

`genel` is a small utility (640 bytes gzipped) for generating dom elements in browser.

# Usage

Install via npm:

    npm i --save genel

And require it (by using [webpack][], [browserify][], [pundle][], [fuse-box][] etc) if you prefer using bundler.

```js
const genel = require('genel')

const div = genel.div`
  <p>Hello, world!</p>
`
```

Or download from CDN:

```html　
<script src="https://unpkg.com/genel"></script>
```

And you have `genel` global:

```js
const div = genel.div`
  <p>Hello, world!</p>
`
```

# Syntax

```js
const genel = require('genel')

const div = genel.div`
  <h1>Hello, world!</h1>
`
```

`genel.<tagName>` works as a tag function for [tagged template literal][tagged-template-literal]. It creates dom element of `<tagName>` and its innerHTML is the string inside the quotes. For example, the above is equivalent of:

```js
const div = document.createElement('div')
div.innerHTML = '<h1>Hello, world!</h1>'
```

And therefore it's equivalent of the below as dom object:

```html
<div>
  <h1>Hello, world!</h1>
</div>
```

That's it!

# Supported tags

The following 116 tags are supported:

```js
const genel = require('genel')

genel.a``
genel.abbr``
genel.address``
genel.area``
genel.article``
genel.aside``
genel.audio``
genel.b``
genel.base``
genel.bdi``
genel.bdo``
genel.blockquote``
genel.body``
genel.br``
genel.button``
genel.canvas``
genel.caption``
genel.cite``
genel.code``
genel.col``
genel.colgroup``
genel.data``
genel.datalist``
genel.dd``
genel.del``
genel.details``
genel.dfn``
genel.dialog``
genel.div``
genel.dl``
genel.dt``
genel.em``
genel.embed``
genel.fieldset``
genel.figcaption``
genel.figure``
genel.footer``
genel.form``
genel.h1``
genel.h2``
genel.h3``
genel.h4``
genel.h5``
genel.h6``
genel.head``
genel.header``
genel.hr``
genel.html``
genel.i``
genel.iframe``
genel.img``
genel.input``
genel.ins``
genel.kbd``
genel.keygen``
genel.label``
genel.legend``
genel.li``
genel.link``
genel.main``
genel.map``
genel.mark``
genel.math``
genel.menu``
genel.menuitem``
genel.meta``
genel.meter``
genel.nav``
genel.noscript``
genel.object``
genel.ol``
genel.optgroup``
genel.option``
genel.output``
genel.p``
genel.param``
genel.picture``
genel.pre``
genel.progress``
genel.q``
genel.rb``
genel.rp``
genel.rt``
genel.rtc``
genel.ruby``
genel.s``
genel.samp``
genel.script``
genel.section``
genel.select``
genel.small``
genel.source``
genel.span``
genel.strong``
genel.style``
genel.sub``
genel.summary``
genel.sup``
genel.svg``
genel.table``
genel.tbody``
genel.td``
genel.template``
genel.textarea``
genel.tfoot``
genel.th``
genel.thead``
genel.time``
genel.title``
genel.tr``
genel.track``
genel.u``
genel.ul``
genel.var``
genel.video``
genel.wbr``
```

# Non standard tags

To use genel with any tag name, call `genel` as a function and you'll get the tag function of the given name:

```js
const customTag = genel('x-custom-tag')

const customEl = customTag`
  <p>Hey, this is the contents of custom tag!</p>
`
```

The above is equivalent of:

```js
const customEl = document.createElement('x-custom-tag')
customEl.innerHTML = `
  <p>Hey, this is the contents of custom tag!</p>
`
```

And therefore equivalent of:

```html
<x-custom-tag>
  <p>Hey, this is the contents of custom tag!</p>
</x-custom-tag>
```

Enjoy! :sunglasses:

# `genel` as tag function

`genel` itself works as the tag function and it returns the contents as html dom:

```js
const el = genel`
  <div>
    <p>Hello, world!</p>
  </div>
`
```

The above returns a dom element equivalent of `<div><p>Hello, world!</p></div>`.

# License

MIT

[webpack]: https://webpack.js.org/
[browserify]: http://browserify.org/
[pundle]: https://github.com/steelbrain/pundle
[fuse-box]: https://github.com/fuse-box/fuse-box
[tagged-template-literal]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals
