import express, { NextFunction, Request, Response } from "express"
import invoiceLogic from "../5-logic/invoice-logic"
import InvoiceModel from "../4-models/invoice-model"

const router = express.Router()

router.get("/api/invoices", async (request: Request, response: Response, next: NextFunction) => {
    const data = await invoiceLogic.getAllData()
    response.json(data)
})

router.post("/api/add-invoice", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const invoice = new InvoiceModel(request.body)
        const addedInvoice = await invoiceLogic.addInvoice(invoice)
        response.json(addedInvoice)

    } catch (error) {

    }
})

export default router