// Create a const that gets the package express(same as import in golang)
const express = require('express')
// Create a const that lets you use the express package 
const app = express()

const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
