'use strict'

const showChat = require('./../templates/chatbox.handlebars')
const getMessageTemplate = require('./../templates/user-message.handlebars')
const showMessages = require('./../templates/user-message.handlebars')
const chatScroller = require('../../../lib/chat-scroller.js')

const goShowChat = () => {
  $('.main-content').html(showChat())
}

const onIndexSuccess = (data) => {
  console.log(data)
  const showMessages = getMessageTemplate({ messages: data.messages })
  $('.main-content').find('.chatbox').html(showMessages)
  chatScroller.initialScroll()
  $('.status-message').text('Successfully retrieved messages')
}
const onIndexFailure = () => {
  $('.status-message').text('Failed to get messages')
}

const onCreateSuccess = data => {
  $('.status-message').text('Sucessfully created message')
  $('.chatbox').append(showMessages({ messages: data.messages }))
}

const onCreateFailure = () => {
  $('.status-message').text('Failed to create message')
}

const onDestroySuccess = () => {
  $('.status-message').text('Successfully deleted message')
}

const onDestroyFailure = () => {
  $('.status-message').text('Message is not owned by user; cannot delete')
}

module.exports = {
  goShowChat,
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onDestroySuccess,
  onDestroyFailure
}
