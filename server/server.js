import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors"

const app = express();
// const isDev = app.settings.env === 'development'
const URL = 'http://localhost:3000'
app.use(cors({origin: URL}))
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: URL });

io.on("connection", (socket) => {
    console.log("server connected")

    socket.on('beginPath', (arg) => {
        socket.broadcast.emit('beginPath', arg)
    })

    socket.on('drawLine', (arg) => {
        socket.broadcast.emit('drawLine', arg)
    })

    socket.on('changeConfig', (arg) => {
        socket.broadcast.emit('changeConfig', arg)
    })
});

httpServer.listen(8000);