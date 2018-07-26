'use strict'

const clear = require('clear')
const marked = require('marked')
const TerminalRenderer = require('marked-terminal')
const hdate = require('human-date')

marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer()
})

/**
 * Draws the screen
 * @param  {ts} ts complete section object
 * @param  {string} url complete URL to the API endpoint
 */
module.exports = function (ts) {
  clear()

  const date = hdate.prettyPrint(new Date(), { showTime: true })
  let display = marked('---')

  for (let section in ts.api) {
    if (ts.api.hasOwnProperty(section)) {
      display += marked(`---`)
      display += marked(`# ${section}`)
      display += ts.api[section].value
    }
  }

  display += marked(`
  ---
  Updated at: ${ date }`)
  console.log(display);
}
