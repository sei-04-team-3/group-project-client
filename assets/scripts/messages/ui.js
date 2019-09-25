'use strict'

const showChat = require('./../templates/chatbox.handlebars')
const getMessageTemplate = require('./../templates/user-message.handlebars')

const goShowChat = () => {
  $('.main-content').html(showChat())
}

const onIndexSuccess = (data) => {
  console.log(data)
  const showMessages = getMessageTemplate({ messages: data.messages })
  $('.main-content').find('.chatbox').html(showMessages)
}

const onIndexFailure = () => {

}

module.exports = {
  goShowChat,
  onIndexSuccess,
  onIndexFailure
}
