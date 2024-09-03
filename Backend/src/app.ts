import express from "express"


const server = express()

server.get("")

server.listen(3002, () => console.log("I'm the server and I'm working"))

