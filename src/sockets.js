module.exports = io => {
    io.on('connection', (socket) => {
       // console.log('Nuevo usuario conectado')

        socket.on('userCoordinates', coords => {
            socket.broadcast.emit('newUserCoordinates', coords);
        });
    });
}