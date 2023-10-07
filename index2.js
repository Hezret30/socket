const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')


app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
})

io.on('connection', (socket) => {
     console.log(`User connected: ${socket.id}`);
     
     socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
     })

     socket.on('salam', (arg) => {
        console.log(arg);
        socket.emit('sagbol', 'salam' + arg)

     })
})

server.listen(3000, "192.168.71.93", () => {
    console.log("Server Runnig!");
})