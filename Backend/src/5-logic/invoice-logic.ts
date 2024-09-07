import dal from "../2-utils/dal"
import InvoiceModel from "../4-models/invoice-model"

async function getAllData(): Promise<InvoiceModel[]> {
    const data = await dal.getJsonData();
    return data
}

async function addInvoice(invoice: InvoiceModel): Promise<void> {
    const currentInvoice = await dal.getJsonData();
    currentInvoice.push(invoice)
    await dal.saveDataToJson(currentInvoice)

}

export default {
    getAllData,
    addInvoice
}