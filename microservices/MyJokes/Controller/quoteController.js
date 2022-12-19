const Quote = require('../Models/quoteModel')


// @desc    Fetch random quote
// @route   GET /api/quote
// @access  Public
const randomQuote = async (req, res) => {
    try {

        Quote.count().exec(function (err, count) {

            // Get a random entry
            const random = Math.floor(Math.random() * count)

            // Again query all users but only fetch one offset by our random #
            Quote.findOne().skip(random).exec(
                function (err, result) {
                    // Tada! random user
                   return res.json(result)
                })
        })
       
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

const postQuote = async (req, res) => {
    try {

        console.log(req.body)
        
        const { quote } = req.body

        const newQuote = new Quote({
            quote
        })

        const createdQuote = await newQuote.save()
        res.json(createdQuote)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports = { randomQuote, postQuote }