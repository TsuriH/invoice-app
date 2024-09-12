import dal from "../2-utils/dal"
import InvoiceModel from "../4-models/invoice-model"

async function getAllData(): Promise<InvoiceModel[]> {
    const data = await dal.getJsonData();
    return data
}

async function getChosenInvoice(invoiceId: string): Promise<InvoiceModel> {

    const data = await dal.getJsonData();

    const chosenInvoice = data.find(invoice => invoice.id === invoiceId)

    if (!chosenInvoice) {

        throw new Error(`Invoice with ID ${invoiceId} not found`);

    }

    return chosenInvoice
}

async function addInvoice(invoice: InvoiceModel): Promise<void> {

    const currentInvoice = await dal.getJsonData();

    currentInvoice.push(invoice)

    await dal.saveDataToJson(currentInvoice)

}

async function deleteInvoiceId(id: string): Promise<InvoiceModel> {

    const currentInvoicesList = await dal.getJsonData();

    const indexToBeDeleted = currentInvoicesList.findIndex(invoice => invoice.id === id)

    if (indexToBeDeleted) {

        currentInvoicesList.splice(indexToBeDeleted, 1)

        await dal.saveDataToJson(currentInvoicesList)

    }

    return currentInvoicesList[indexToBeDeleted]

}

async function updateInvoice(id: string): Promise<InvoiceModel> {

    const currentInvoicesList = await dal.getJsonData();

    const indexInvoiceToUpdate = currentInvoicesList.findIndex(invoice => invoice.id === id);

    if (indexInvoiceToUpdate === -1) {
        throw new Error("Invoice not found"); // Handle invoice not found
    }

    if (currentInvoicesList[indexInvoiceToUpdate].status === "paid") {
        throw new Error("Invoice is already marked as paid"); // Handle already paid invoice
    }

    currentInvoicesList[indexInvoiceToUpdate].status = "paid"

    await dal.saveDataToJson(currentInvoicesList);

    return currentInvoicesList[indexInvoiceToUpdate]
}

export default {
    getAllData,
    addInvoice,
    deleteInvoiceId,
    updateInvoice, getChosenInvoice
}