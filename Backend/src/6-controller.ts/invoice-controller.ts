import express, { NextFunction, Request, Response } from "express"
import invoiceLogic from "../5-logic/invoice-logic"
import InvoiceModel from "../4-models/invoice-model"
import { log } from "console"

const router = express.Router()

router.get("/api/invoices", async (request: Request, response: Response, next: NextFunction) => {
    const data = await invoiceLogic.getAllData()
    response.json(data)
})

router.post("/api/invoices/add-invoice", async (request: Request, response: Response, next: NextFunction) => {
    try {
        console.log(request.body)
        const invoice = new InvoiceModel(request.body)
        await invoiceLogic.addInvoice(invoice)
        response.status(201).json({ message: "Invoice added successfully", invoice })

    } catch (error) {
        next(error)
    }
})

export default router