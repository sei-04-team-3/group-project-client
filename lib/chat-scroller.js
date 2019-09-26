'use strict'

const store = require('../assets/scripts/store.js')

const checkForScroll = () => {
  // is the chatbox on the screen?
  if (document.getElementById('chatbox')) {
    // save the element in a variable for ease of use
    const chatWindow = document.getElementById('chatbox')
    // see if we're loading the chat. This is set when pushing the button to
    // display the chat screen
    if (store.loadingChat) {
      // Set the value back to false so that these conditionals won't get a false
      // trigger next time
      store.loadingChat = false
      // It should scroll, so set that to true
      store.shouldIScroll = true
      // otherwise, check whether we're already scrolled to the bottom
    } else if (chatWindow.scrollTop + chatWindow.clientHeight === chatWindow.scrollHeight) {
      // if we are, then we should scroll
      store.shouldIScroll = true
    }
  }
}

const scroll = () => {
  // is the chatbox on the screen?
  if (document.getElementById('chatbox')) {
    // Should I scroll?
    if (store.shouldIScroll) {
      const chatWindow = document.getElementById('chatbox')
      // scroll!
      chatWindow.scrollTop = chatWindow.scrollHeight
      store.shouldIScroll = false
    }
  }
}
// const autoScroll = () => {
//   const chatWindow = document.getElementById('chatbox')
//   if (chatWindow) {
//     if (store.firstDisplay) {
//       chatWindow.scrollTop = chatWindow.scrollHeight
//       store.firstDisplay = false
//     } else if (chatWindow.scrollTop + chatWindow.clientHeight === chatWindow.scrollHeight) {
//     }
//   }
// }
module.exports = {
  checkForScroll,
  scroll
}
