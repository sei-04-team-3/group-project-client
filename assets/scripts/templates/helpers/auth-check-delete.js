'use strict'
// checks your priviledge
const store = require('../../store')

const authCheckDelete = function (owner) {
  // if you own the message or are an admin, and this is testing the delete button, put in the delete button
  if (owner._id === store.user._id || store.user.role === 'admin') {
    return true
    // otherwise no buttons for you
  } else {
    return false
  }
}

module.exports = authCheckDelete
