
'use strict'

const store = require('./../store')

const signUpSuccess = (data) => {
  $('.status-message').text('Sucessfully signed up')

  $('form').trigger('reset')
}

const signInSuccess = data => {
  store.user = data.user
  $('.status-message').text('Successfuly signed in')

  $('form').trigger('reset')
}

const failure = data => {
  $('.status-message').text('There was a problem signing up/in')

  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  failure
}
