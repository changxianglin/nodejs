const socketio = require('socket.io')
var io
var gustNumber = 1
var nickName = {}
var nameUser = []
var currentRoom = {}

exports.listen = function(server) {
    io = socketio.listen(server)
    io.set('log level', 1)
    io.sockets.on('connection', function(socket) {
        guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed)
        joinRoom(socket, 'Lobby')
        handleMessageBroadcasting(socket, nickNames)
        handleNameChangeAttempts(socket, nickName, namesUsed)
        handleRoomJoining(socket)
        socket.on('rooms', function() {
            socket.emit('rooms', io.sockets.manager.rooms)
        })
        handleClientDisconnection(socket, nickNames, namesUsed)
    })
}

function assignGuestName(socket, guestNumber, nickNames, namesUesed) {
   var name = 'Guest' + guestNumber
   nickNames[socket.id] = name
   socket.emit('nameResult', {
       success: true,
       name: name
   })
    nameUsed.push(name)
    return guestNumber + 1
}

function joinRoom(socket, room) {
    socket.join(room)
    currentRoom[socket.io] = room
    socket.emit('joinResult', {room: room})
    socket.broadcast.to(room).emit('message', {
        text: nickNames[socket.id] + 'has joined' + room + '.'
    })
    var userInRoom = io.sockets.clients(room)
    if(userInRoom.length > 1) {
        var usersInRoomSummary = 'Users currently in ' + room + ':'
        for (var index in userInRoom) {
            var userSocketId = userdInRoom[index].id
            if(userSocketId != socket.id) {
                if(index > 0) {
                    usersInRoomSummary += ','
                }
                usersInRoomSummary += nickNames[userSocketId]
            }
        }
            usersInRoomSummary += '.'
            socket.emit('message', {text: usersInRoomSummary})
    }
}

function handleNameChangeAttempts(socket, nickNames, namesUsed) {
    socket.io('nameAttempt', function(name) {
        if(name.indexOf('Guest') == 0) {
            socket.emit('nameResult', {
                success: false,
                message: 'Names cannot begin with "Guest".'
            })
        } else {
            if (namesUsed.indexOf(name) == -1) {
                var previousName = nickNames[socket.id]
                var previousNameIndex = namesUsed.indexOf(previousName)
                namesUsed.push(name)
                nickNames[socket.id] = name
                delete nameUeed[previousNameIndex]
                socket.emit('nameResult', {
                    success: true,
                    name: name
                })
                socket.broadcast.to(currentRoom[socket.id]).emit('message', {
                    text: previousName + 'is now kown as ' + name + '.'
                })
            } else {
                socket.emit('nameResult', {
                    success: false,
                    message: 'That name is already in use'
                })
            }
        }
    })
}

function handleMessageBroadcasting(socket) {
    socket.on('message', function(message) {
        socket.broadcast.to(message.room).emit('message', {
            text: nickNames[socket.id] + ': ' + message.text
        })
    })
}

function handleRoomJoining(socket) {
    socket.on('join', function(room) {
        socket.leave(currentRoom[socket.id])
        joinRoom(socket, room.newRoom)
    })
}
function handleClientDisconnection(socket) {
    socket.on('disconnect', function() {
        var nameIndex = namesUsed.indexOf(nickNames[socket.id])
        delete namesUesd[nameIndex]
        delete nickNames[socket.id]
    })
}