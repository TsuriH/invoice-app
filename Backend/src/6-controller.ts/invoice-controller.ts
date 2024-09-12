import express, { NextFunction, Request, Response } from "express"
import invoiceLogic from "../5-logic/invoice-logic"
import InvoiceModel from "../4-models/invoice-model"
import { log } from "console"

const router = express.Router()

router.get("/api/invoices", async (request: Request, response: Response, next: NextFunction) => {
    const data = await invoiceLogic.getAllData()
    response.json(data)
})

router.get("/api/invoices/:invoiceId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const invoiceId = request.params.invoiceId

        const chosenInvoice = await invoiceLogic.getChosenInvoice(invoiceId)

        response.json(chosenInvoice)

    } catch (error) {

        return response.status(404).json({ message: error.message });
    }

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

router.delete("/api/invoices/delete-invoice/:invoiceId", async (request: Request, response: Response, next: NextFunction) => {
    const invoiceId = request.params.invoiceId

    const deletedInvoice = await invoiceLogic.deleteInvoiceId(invoiceId)

    if (!deletedInvoice) {

        return response.status(404).json({ message: 'Invoice not found' });

    }

    return response.status(200).json({ message: 'Invoice deleted successfully', deletedInvoice });

})

router.put("/api/invoices/update-invoice/:invoiceId", async (request: Request, response: Response, next: NextFunction) => {

    try {

        const invoiceId = request.params.invoiceId

        const updatedInvoice = await invoiceLogic.updateInvoice(invoiceId)

        return response.status(200).json({
            message: 'Invoice updated successfully', updatedInvoice
        });

    } catch (error) {

        return response.status(400).json({ message: error.message });

    }




})
export default router