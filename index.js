require('dotenv').config()

const express = require('express')
const app = express()
const https = require('https')
const server = https.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)



app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.get('/admin', (req, res) => {
	res.sendFile(__dirname + '/admin.html')
})

io.on('connection', (socket) => {
	console.log('Yo, someone connected!')

	socket.on('updateRequest', (data) => {
		io.emit('update', data)	
	})

	socket.on('disconnect', () => {
		console.log('Now they disconnected!')
	})
})

server.listen(process.env.PORT, () => {
	console.log('listening on ' + process.env.PORT)
})