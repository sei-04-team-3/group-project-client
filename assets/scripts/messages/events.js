'use strict'

const ui = require('./ui')

const onShowChat = event => {
  event.preventDefault()
  ui.goShowChat()
}

const addHandlers = () => {
  $('nav').on('submit', '.show-chat', onShowChat)
}

module.exports = {
  onShowChat,
  addHandlers
}
