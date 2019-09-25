'use strict'

const showChat = require('./../templates/chatbox.handlebars')
const getMessageTemplate = require('./../templates/user-message.handlebars')
const showMessages = require('./../templates/user-message.handlebars')

const goShowChat = () => {
  $('.main-content').html(showChat())
}

const onIndexSuccess = (data) => {
  console.log(data)
  const showMessages = getMessageTemplate({ messages: data.messages })
  $('.main-content').find('.chatbox').html(showMessages)
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
