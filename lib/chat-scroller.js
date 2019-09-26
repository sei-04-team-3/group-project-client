'use strict'

const initialScroll = () => {
  if (document.getElementById('chatbox')) {
    const chatWindow = document.getElementById('chatbox')
    chatWindow.scrollTop = chatWindow.scrollHeight
  }
}

module.exports = {
  initialScroll
}
