const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const commentRoutes = require('./routes/comment.routes')

const dotenv = require('dotenv')
dotenv.config()

const app = express()

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
	next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'client', 'dist')))
app.get('/', (req, res) => {
	res.status(200).sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

app.use('/api', commentRoutes)

module.exports = app