'use strict'

const showChat = require('./../templates/chatbox.handlebars')

const goShowChat = () => {
  $('.main-content').html(showChat())
}

module.exports = {
  goShowChat
}
