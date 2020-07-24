const express = require('express')
const bodyParse = require('body-parser')
const userRoute = require('./routes/userRoute')
const titleRoute = require('./routes/titleRoute')
const app = express();
app.use(bodyParse.urlencoded({ extended: false }))
const port = 3000

userRoute(app)
titleRoute(app)

app.get('/', (req, res) => res.send('Olá mundo pelo Express'))
app.listen(port, () => console.log('Api rodando na porta 3000'))