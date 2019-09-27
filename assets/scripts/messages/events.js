'use strict'

const ui = require('./ui')
const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
const store = require('../store')
const chatScroller = require('../../../lib/chat-scroller.js')

const { apiUrl } = require('../config')
const socket = require('socket.io-client')(apiUrl)

const onShowChat = event => {
  if (event) event.preventDefault()
  store.loadingChat = true
  ui.goShowChat()
  onGetMessages()
}

const onGetMessages = function () {
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
  const id = event.target.getAttribute('data-id')
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
  api.update(data)
    .then(ui.updateMessageSuccess)
    .catch(ui.updateMessageFailure)
}

const socketGetMessages = function () {
  if (store.user) {
    chatScroller.checkForScroll()
    api.index()
      .then(ui.onIndexSuccess)
      .catch(ui.onIndexFailure)
  }
}

const addHandlers = () => {
  $('nav').on('submit', '.show-chat', onShowChat)
  $('.main-content').on('submit', '.post-message', onCreateMessage)
  $('.main-content').on('click', '.delete-btn', onDestroyMessage)
  $('.update-message').on('submit', onUpdateMessage)
  $('.main-content').on('click', '.edit-btn', onStoreMessageID)

  socket.on('message emit', socketGetMessages)
  socket.on('connection', socketGetMessages)
}

module.exports = {
  onShowChat,
  addHandlers,
  onCreateMessage,
  onGetMessages,
  onDestroyMessage,
  onUpdateMessage
}
