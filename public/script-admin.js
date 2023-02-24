require('dotenv').config()

const updateBtn = document.querySelector('#updateBtn')

var socket = io(`${process.env.SERVER}:${process.env.PORT}`)

const getTitleData = () => document.querySelector('#title').value
const getP1Data = () => `${document.querySelector('#p1name').value} - ${document.querySelector('#p1score').value}`
const getP2Data = () => `${document.querySelector('#p2name').value} - ${document.querySelector('#p2score').value}`

updateBtn.addEventListener('click', (e) => {
	e.preventDefault()
	const scoreboardData = {
		title: getTitleData(),
		p1: getP1Data(),
		p2: getP2Data()
	}
	socket.emit('updateRequest', scoreboardData)
})



