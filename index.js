const express = require('express');
const socketio = require('socket.io');
const path = require('path')
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();

const server = app.listen(3000, "192.168.71.93", () => console.log('http://192.168.71.93:3000'))
const sio = socketio(server)

app.use(cors())
app.use(express.static('public'));

app.get('/', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})




sio.on('connection', socket => {
    console.log(`client -> ${socket.id}`)

    socket.on('disconnect', reason => console.log(reason))
})


app.get('/btn/:id', (req, res) => {
    sio.emit('btn', req.params.id)
    res.status(200).send()
})


