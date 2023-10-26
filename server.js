// const express = require('express')
// const app = express()
// const port = 3000
// const path = require('node:path')
// const bodyParser = require('body-parser')

// const urls = {
//     version: ['versionone.html', 'versiontwo.html']
// }

// app.use(express.static(path.join(__dirname + '/static')))
// app.use(bodyParser.json())

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/templates/index.html'))
// })

// app.post('/urls', (req, res) => {
//     const curentUrl = req.body.url
//     res.send(urls[curentUrl])

// })

// app.get('/public/:pathFile', (req,res) =>{
//     const pathFile = req.params.pathFile
//     res.sendFile(path.join(__dirname + '/public' + `/${pathFile}`))
// })
// app.listen(port, () => {
//   console.log(` This app (trying) listening on port ${port}`)
// })

const express = require('express')
const app = express()
const port = 3000
const path = require('node:path')
const bodyParser = require('body-parser')

const urls = {
    version: ['versionone.html', 'versiontwo.html']
}

app.use(express.static(path.join(__dirname + '/static')))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/templates/index.html'))
})

app.post('/urls', (req, res) => {
    const curUrl = req.body.url
    res.send(urls[curUrl])

})

app.get('/public/:pathFile', (req,res) =>{
    const pathFile = req.params.pathFile
    res.sendFile(path.join(__dirname + '/public' + `/${pathFile}`))
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})