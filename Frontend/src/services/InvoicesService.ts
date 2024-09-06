import axios from "axios"
import InvoiceModel from "../model/InvoiceModel"
import appConfig from "../Utils/Config"

class InvoicesService {

    public async getAllData(): Promise<InvoiceModel[]> {

        const response = await axios.get<InvoiceModel[]>(appConfig.invoicesUrl)
        const invoices = response.data
        return invoices;

    }

    public async addInvoice(invoice: InvoiceModel): Promise<void> {
        console.log(`${appConfig.invoicesUrl}add-invoice`)
        await axios.post<InvoiceModel>(`${appConfig.invoicesUrl}add-invoice`, invoice)

    }

}

const dataService = new InvoicesService()

export default dataService