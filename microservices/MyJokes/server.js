
const  express = require('express')
const cor = require('cors')
const  {connectDB} = require('./Config/db.js')

const quoteRoute = require('./Routes/quoteRoute.js')

// Constants
const PORT = 3030;


// App
const app = express();
app.use(cor())
app.use(express.json());



app.use('/api/quote', quoteRoute)

const start = async () => {
  try {


    await connectDB()
    app.listen(PORT,  () => {
      console.log(`Running on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start()