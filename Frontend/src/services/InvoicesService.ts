import axios from "axios"
import InvoiceModel from "../model/InvoiceModel"
import appConfig from "../Utils/Config"

class InvoicesService {

    public async getAllData(): Promise<InvoiceModel[]> {
        
        const response = await axios.get<InvoiceModel[]>(appConfig.invoicesUrl)
        const invoices = response.data
        return invoices;

    }

    public async getSingleInvoice(id: string): Promise<InvoiceModel> {

        const response = await axios.get<InvoiceModel>(`${appConfig.invoicesUrl}${id}`)

        const invoice = response.data

        return invoice;

    }

    public async addInvoice(invoice: InvoiceModel): Promise<void> {

        await axios.post<InvoiceModel>(`${appConfig.invoicesUrl}add-invoice`, invoice)

    }

    public async changeStatusToPaid(id: string) {

        try {
            await axios.put<InvoiceModel>(`${appConfig.invoicesUrl}update-invoice-status/${id}`);

        } catch (error) {
            console.error("Error updating invoice:", error);
            throw error;
        }

    }

    public async updateInvoice(invoice: InvoiceModel): Promise<void> {

        try {
            await axios.put<InvoiceModel>(`${appConfig.invoicesUrl}update-invoice/${invoice.id}`, invoice);
        }
        catch (error) {
            console.error("Error updating invoice:", error);
            throw error;
        }
    }

    public async deleteInvoice(id: string): Promise<void> {
        try {
            await axios.delete(`${appConfig.invoicesUrl}delete-invoice/${id}`)
            alert('Invoice has been deleted successfully');
        }

        catch (error: any) {
            console.error('Error deleting invoice:', error);
            alert('Failed to delete the invoice');
        }

    }


}

const dataService = new InvoicesService()

export default dataService