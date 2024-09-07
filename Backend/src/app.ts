import express, { NextFunction, Request, Response } from "express"
import invoicesController from "./6-controller.ts/invoice-controller"
import cors from "cors"

const server = express()

server.use(express.json())

server.use(cors({
    origin: '*'
}))

server.use("/", invoicesController)


server.listen(3006, () => console.log("I'm the server and I'm working"))

