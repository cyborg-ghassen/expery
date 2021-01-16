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

const auth = require('./routes/auth');
app.use('/auth', auth);

app.listen(PORT, function() {
    console.log('App started')
})

app.get("/", (req, res) => {
    res.json('welcome!!')
})


const io = require('socket.io')(3000);
const users = {};

io.on('connection', socket => {
    //getting message from server
    //on join new user
    socket.on('new-user', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-connected', name);
    });
    // on disconnect user
    socket.on('disconnect', () => {

        socket.broadcast.emit('user-disconnected', users[socket.id]);
        delete users[socket.id];

    });
    socket.on('send-chat-message', message => {

        // send message to other client
        socket.broadcast.emit('chat-message', {
            message: message,
            name: users[socket.id]
        });
    });
});