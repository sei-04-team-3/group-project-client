'use strict'

const moment = require('moment'
)
const prettyTime = date => {
  return moment(date).fromNow()
}

module.exports = prettyTime
