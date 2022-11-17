const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/name', function (req, res) {
    res.json({'name':'Jason'})
  })

app.get('/add', function (req, res) { //localhost:3000/add?a=5&b=10
    //request - req => this object contains information about client and what it expects from server
    //response - res => this object contains information we sent to client from server

    let param1 = req.query["a"]
    let param2 = req.query["b"]
    let param3 = req.query["c"]

    res.json({"Sum" : parseInt(param1) + parseInt(param2),
                "Third Param" : param3})
})

app.listen(3000)

console.log("node server is listening at port 3000");