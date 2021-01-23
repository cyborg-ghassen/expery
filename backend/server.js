const PORT = process.env.PORT || 4000
const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')

require('./config/db');
// require('./controller/calendar')
// require('./controller/googleCalendar')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { v4: uuidv4 } = require('uuid');
const auth = require('./routes/auth');
app.use('/auth/', auth);


app.listen(PORT, function() {
    console.log('App started')
})


app.get("/", (req, res) => {
    res.json('welcome!!')
})




var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 9000;

app.get('/join', (req, res) => {
    res.send({ link: uuidv4() });
});


io.on('connection', socket => {
    console.log('socket established')
    socket.on('join-room', (userData) => {
        const { roomID, userID } = userData;
        socket.join(roomID);
        socket.to(roomID).broadcast.emit('new-user-connect', userData);
        socket.on('disconnect', () => {
            socket.to(roomID).broadcast.emit('user-disconnected', userID);
        });
    });
    socket.on('room_join_request', payload => {
        socket.join(payload.roomName, err => {
            if (!err) {
                io.in(payload.roomName).clients((err, clients) => {
                    if (!err) {
                        io.in(payload.roomName).emit('room_users', clients)
                    }
                });
            }
        })
    })

    socket.on('offer_signal', payload => {
        io.to(payload.calleeId).emit('offer', { signalData: payload.signalData, callerId: payload.callerId });
    });

    socket.on('answer_signal', payload => {
        io.to(payload.callerId).emit('answer', { signalData: payload.signalData, calleeId: socket.id });
    });

    socket.on('disconnect', () => {
        io.emit('room_left', { type: 'disconnected', socketId: socket.id })
    })
});

http.listen(port, () => console.log('listening on *:' + port));