'use strict'
// checks your priviledge
const store = require('../../store')

const authCheckUpdate = function (owner) {
  // if you own the message, put in the update button
  if (owner._id === store.user._id) {
    return true
    // otherwise no buttons for you
  } else {
    return false
  }
}

module.exports = authCheckUpdate
