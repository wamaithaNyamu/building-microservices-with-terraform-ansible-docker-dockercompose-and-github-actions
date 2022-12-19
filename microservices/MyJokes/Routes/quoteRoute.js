const express = require('express')

const router = express.Router()

const { randomQuote,postQuote } = require('../Controller/quoteController.js')

router.route('/').get(randomQuote)

router.route('/new').post(postQuote)

module.exports = router