'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const messageEvents = require('./messages/events')
const frontPage = require('./templates/sign-in.handlebars')
const store = require('./store.js')

$(() => {
  $('.main-content').html(frontPage)
  authEvents.addAuthHandlers()
  messageEvents.addHandlers()

  // These are for the chat scroller. Dont' want errors where I check them and they don't exist
  store.loadingChat = false
  store.shouldIScroll = false
})
