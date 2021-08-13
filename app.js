const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World 2.!!'))
app.listen(8080, () => console.log('Server ready'))
