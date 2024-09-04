import axios from "axios"
import InvoiceModel from "../model/InvoiceModel"
import appConfig from "../Utils/Config"

class InvoicesService {

    public async getAllData(): Promise<InvoiceModel[]> {

        const response = await axios.get<InvoiceModel[]>(appConfig.invoicesUrl)
        const invoices = response.data
        return invoices;

    }

}

const dataService = new InvoicesService()

export default dataService