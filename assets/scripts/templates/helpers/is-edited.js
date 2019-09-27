'use strict'

const isEdited = function (message) {
  if (message.createdAt === message.updatedAt) {
    return true
  } else {
    return false
  }
}

module.exports = isEdited
