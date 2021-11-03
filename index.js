const express = require('express')
const cors = require('cors')

const { addMessage } = require('./watson')

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.static('static'))

app.get('/add-message', function (req, res) {
    res.send("good")
})

app.post('/add-message', async function (req, res) {
  const message = await addMessage(req.body.message)
  res.send(message)
})
 
app.listen(3000, () => console.log('listening on port 3000'))
