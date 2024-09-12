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
        console.log(response);
        
        const invoice = response.data

        return invoice;

    }

    public async addInvoice(invoice: InvoiceModel): Promise<void> {
        await axios.post<InvoiceModel>(`${appConfig.invoicesUrl}add-invoice`, invoice)
    }

    public async deleteInvoice(id: string): Promise<void> {

        await axios.delete(`${appConfig.invoicesUrl}delete-invoice/${id}`)
    }


    public async markAsPaid(id: string): Promise<void> {

        await axios.put(`${appConfig.invoicesUrl}update-invoice/${id}`)
    }

}

const dataService = new InvoicesService()

export default dataService