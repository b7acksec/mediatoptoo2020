const express = require('express');

const app = express()

const port = 3000

app.use(express.static('public_html'))

app.get('/', (req, res) => {
    res.sendFile('./public_html/index.html', { root: __dirname }) 
})

app.get('/kg', (req, res) => {
    res.sendFile('./public_html/kg.html', { root: __dirname }) 
})

app.listen(port, () => console.log(`listening on port ${port}`)) 



