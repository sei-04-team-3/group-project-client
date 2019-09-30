'use strict'

const sortMessages = function (a, b) {
  return a.createdAt - b.createdAt
}

module.exports = sortMessages
