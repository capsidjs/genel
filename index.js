const tags = require('html-tags')

const genel = tagName => (strings, ...values) => {
  const el = document.createElement(tagName)
  el.innerHTML = strings.map((str, i) => str + (values[i] || '')).join('')
  return el
}

tags.forEach(tagName => { genel[tagName] = genel(tagName) })

module.exports = genel
