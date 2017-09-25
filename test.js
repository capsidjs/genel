const { JSDOM } = require('jsdom')
const { describe, it } = require('kocha')
const assert = require('assert')
const genel = require('./')
const tags = require('html-tags')

const window = new JSDOM().window
global.document = window.document

describe('genel', () => {
  it('generates the tagged template literal tag function from the given tag name', () => {
    const el = genel('x-tag')`abc`

    assert(el instanceof window.HTMLElement)
    assert(el.tagName.toLowerCase() === 'x-tag')
    assert(el.innerHTML === 'abc')
  })

  it('returns the first child of inner html contents if called as tag function', () => {
    const el = genel`
      <div>hello</div><p>world</p>
    `

    assert(el instanceof window.HTMLElement)
    assert(el.tagName.toLowerCase() === 'div')
    assert(el.innerHTML === 'hello')
  })

  describe('genel.<tagName>', () => {
    it('exists if and only if <tagName> is a standard tag', () => {
      tags.forEach(tag => {
        assert(typeof genel[tag] === 'function')
      })

      Object.keys(genel).forEach(tag => {
        assert(tags.includes(tag))
      })
    })

    it('generates a dom element of <tagName> and the given contents', () => {
      tags.forEach(tag => {
        const el = genel[tag]`abc`

        if (tag === 'colgroup' || tag === 'html') { // These tags seem unable to contain `abc` as innerHTML
          return
        }

        assert(el instanceof window.HTMLElement)
        assert(el.tagName.toLowerCase() === tag)
        assert(el.innerHTML === 'abc')
      })
    })

    it('handles ${} correctly', () => {
      const el = genel.div`abc${1}def${'ghi'}jkl`

      assert(el.innerHTML === 'abc1defghijkl')
    })

    it('trims innerHTML', () => {
      const el = genel.div`   abc    `

      assert(el.innerHTML === 'abc')
    })
  })
})
