'use strict'

const showChat = require('./../templates/chatbox.handlebars')
const getMessageTemplate = require('./../templates/user-message.handlebars')
const showMessages = require('./../templates/user-message.handlebars')
const chatScroller = require('../../../lib/chat-scroller.js')


const goShowChat = () => {
  $('.main-content').html(showChat())
}

const onIndexSuccess = (data) => {
  const showMessages = getMessageTemplate({ messages: data.messages })
  $('.main-content').find('.chatbox').html(showMessages)

  $('form').trigger('reset')
  chatScroller.checkForScroll()
  chatScroller.scroll()
}
const onIndexFailure = () => {
  $('.status-message').text('Failed to get messages')

  $('form').trigger('reset')
}

const onCreateSuccess = data => {
  chatScroller.checkForScroll()
  $('.status-message').text('Sucessfully created message')
  $('.chatbox').append(showMessages({ messages: data.messages }))

  $('form').trigger('reset')
}

const onCreateFailure = () => {
  $('.status-message').text('Failed to create message')

  $('form').trigger('reset')
}

const updateMessageSuccess = function () {
  $('.status-message').text('Message updated')

  $('form').trigger('reset')
}

const updateMessageFailure = function () {
  $('.status-message').text('Failed to update message')

  $('form').trigger('reset')
}

const onDestroySuccess = () => {
  $('.status-message').text('Successfully deleted message')

  $('form').trigger('reset')
}

const onDestroyFailure = () => {
  $('.status-message').text('Message is not owned by user; cannot delete')

  $('form').trigger('reset')
}

module.exports = {
  goShowChat,
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  updateMessageSuccess,
  updateMessageFailure,
  onDestroySuccess,
  onDestroyFailure
}
