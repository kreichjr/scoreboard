require('dotenv').config()

var socket = io(`${process.env.SERVER}:${process.env.PORT}`)

const p1Element = document.querySelector('.player-1-container')
const p2Element = document.querySelector('.player-2-container')
const titleElement = document.querySelector('.title')

socket.on('update', (data) => {
	console.log(data)
	p1Element.textContent = data.p1
	p2Element.textContent = data.p2
	titleElement.textContent = data.title
})