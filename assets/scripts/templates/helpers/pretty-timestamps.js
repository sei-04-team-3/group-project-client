'use strict'

const moment = require('moment')
const isEdited = require('./is-edited.js')

const prettyTime = message => {
  if (isEdited(message)) {
    return 'posted ' + moment(message.createdAt).fromNow()
  } else {
    return 'updated ' + moment(message.updatedAt).fromNow()
  }
}

module.exports = prettyTime
