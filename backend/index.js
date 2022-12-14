const connectToMongo=require('./db');
const express = require('express')
const cors = require('cors')
connectToMongo();
const app = express()
const port = process.envport || 5000

 app.use(express.json(),cors())

app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
