'use strict'

const ui = require('./ui')
const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('../store')

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
    .then(api.index)
    .then(ui.onIndexSuccess)
    .catch(ui.onCreateFailure)
}

const onDestroyMessage = event => {
  event.preventDefault()
  // const id = $(event.target).closest('.delete-btn').data('id')
  const id = event.target.getAttribute('data-id')
  console.log('this is the id ' + id)
  api.destroy(id)
    .then(ui.onDestroySuccess)
    .catch(ui.onDestroyFailure)
}

const onStoreMessageID = function (event) {
  store.messageid = event.target.getAttribute('data-id')
}

const onUpdateMessage = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.update(data)
    .then(console.log)
    .catch(console.error)
    // .then(function (formData) {
    //   ui.onUpdateSuccess()
    // })
    // .catch(ui.onUpdateFailure())
}

const addHandlers = () => {
  $('nav').on('submit', '.show-chat', onShowChat)
  $('.main-content').on('submit', '.post-message', onCreateMessage)
  $('.main-content').on('click', '.delete-btn', onDestroyMessage)
  $('.main-content').on('submit', '.modal-body', onUpdateMessage)
  $('.main-content').on('click', '.edit-btn', onStoreMessageID)
}

module.exports = {
  onShowChat,
  addHandlers,
  onCreateMessage,
  onGetMessages,
  onDestroyMessage,
  onUpdateMessage
}
