'use strict'

const ui = require('./ui')
const api = require('./api')

const onShowChat = event => {
  event.preventDefault()
  onGetMessages(event)
  ui.goShowChat()
}

const onGetMessages = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const addHandlers = () => {
  $('nav').on('submit', '.show-chat', onShowChat)
}

module.exports = {
  onShowChat,
  addHandlers,
  onGetMessages
}
