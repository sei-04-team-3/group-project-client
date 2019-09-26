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
}

const onCreateSuccess = data => {
  $('.chatbox').append(showMessages({ messages: data.messages }))
}

const onCreateFailure = () => {

}
const onIndexFailure = () => {

}

module.exports = {
  goShowChat,
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure
}
