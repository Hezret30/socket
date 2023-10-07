const socket = io()

socket.on('connect', () => console.log('islap dur'))

socket.on('btn', id => console.log(id))


