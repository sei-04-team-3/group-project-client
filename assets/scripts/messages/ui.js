'use strict'

const showChat = require('./../templates/chatbox.handlebars')
const getMessageTemplate = require('./../templates/user-message.handlebars')
const showUsers = require('./../templates/user-name.handlebars')
const showMessages = require('./../templates/user-message.handlebars')
const chatScroller = require('../../../lib/chat-scroller.js')
const sortMessages = require('../../../lib/sort-messages.js')

const goShowChat = () => {
  $('.main-content').html(showChat())
}

const onIndexSuccess = (data) => {
  const showMessages = getMessageTemplate({ messages: data.messages.sort(sortMessages), users: data.users })
  $('.main-content').find('#chatbox').html(showMessages)

  chatScroller.checkForScroll()
  chatScroller.scroll()
}

const onUserIndexSuccess = (data) => {
  $('.main-content').find('#usernames').html(showUsers({ users: data.users }))
}
const onIndexFailure = () => {
  $('.status-message').text('Failed to get messages')
}

const onCreateSuccess = data => {
  chatScroller.checkForScroll()
  $('.status-message').text('Sucessfully created message')
  $('.chatbox').append(showMessages({ messages: data.messages }))
  setTimeout(() => {
    $('.status-message').text('')
  }, 3500)
  $('form').trigger('reset')
}

const onCreateFailure = () => {
  $('.status-message').text('Failed to create message')
  setTimeout(() => {
    $('.status-message').text('')
  }, 3500)
  $('form').trigger('reset')
}

const updateMessageSuccess = function () {
  $('.status-message').text('Message updated')
  $('#exampleModalCenter').modal('toggle')
  setTimeout(() => {
    $('.status-message').text('')
  }, 3500)
  $('form').trigger('reset')
}

const updateMessageFailure = function () {
  $('.status-message').text('Failed to update message')
  setTimeout(() => {
    $('.status-message').text('')
  }, 3500)
  $('form').trigger('reset')
}

const onDestroySuccess = () => {
  $('.status-message').text('Successfully deleted message')
  setTimeout(() => {
    $('.status-message').text('')
  }, 3500)
  $('form').trigger('reset')
}

const onDestroyFailure = () => {
  $('.status-message').text('Message is not owned by user; cannot delete')
  setTimeout(() => {
    $('.status-message').text('')
  }, 3500)
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
  onDestroyFailure,
  onUserIndexSuccess
}
