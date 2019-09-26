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

const onDestroyMessage = event => {
  event.preventDefault()
  // const id = $(event.target).closest('.delete-btn').data('id')
  const id = event.target.getAttribute('data-id')
  console.log('this is the id ' + id)
  api.destroy(id)
    .then(console.log)
    .catch(console.error)
}

const addHandlers = () => {
  $('nav').on('submit', '.show-chat', onShowChat)
  $('.main-content').on('submit', '.post-message', onCreateMessage)
  $('.main-content').on('click', '.delete-btn', onDestroyMessage)
}

module.exports = {
  onShowChat,
  addHandlers,
  onCreateMessage,
  onGetMessages,
  onDestroyMessage
}
