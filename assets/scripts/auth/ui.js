
'use strict'

const store = require('./../store')
// const showNav = require('./../templates/navbar.handlebars')
// const showChangePassword = require('./../templates/change-password.handlebars')
// const showSignInForm = require('./../templates/sign-in.handlebars')

// const frontPage = showSignInForm()

const signUpSuccess = (data) => {
  $('.status-message').text('Sucessfully signed up')

  $('form').trigger('reset')
}

const signInSuccess = data => {
  store.user = data.user
  $('.status-message').text('Successfuly signed in')
  $('.main-content').html('')
  // $('nav').html(showNav())

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
