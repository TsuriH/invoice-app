import dal from "../2-utils/dal"
import InvoiceModel from "../4-models/invoice-model"

async function getAllData(): Promise<InvoiceModel[]> {
    const data = await dal.getJsonData();
    return data
}

async function addInvoice(invoice: InvoiceModel): Promise<InvoiceModel> {
    const invoices = await dal.getJsonData();
    invoices.push(invoice)
    await dal.saveDataToJson(invoices)
}

export default {
    getAllData,
    addInvoice
}