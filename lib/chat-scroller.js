'use strict'

const initialScroll = () => {
  const chatWindow = document.getElementById('chatbox')
  chatWindow.scrollTop = chatWindow.scrollHeight
}

module.exports = {
  initialScroll
}
