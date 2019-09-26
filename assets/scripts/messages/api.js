'use strict'
const config = require('./../config')
const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/messages',
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const show = id => {
  return $.ajax({
    url: config.apiUrl + '/messages/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const destroy = id => {
  return $.ajax({
    url: config.apiUrl + '/messages/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const create = formData => {
  return $.ajax({
    url: config.apiUrl + '/messages/',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const update = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/messages/' + store.messageid,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  index,
  show,
  destroy,
  create,
  update
}
