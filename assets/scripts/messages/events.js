'use strict'

const ui = require('./ui')
const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')

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

const onCreateMessage = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const addHandlers = () => {
  $('nav').on('submit', '.show-chat', onShowChat)
  $('.main-content').on('submit', '.post-message', onCreateMessage)
}

module.exports = {
  onShowChat,
  addHandlers,
  onCreateMessage,
  onGetMessages
}
