import fsPromises from "fs/promises"
import InvoiceModel from "../4-models/invoice-model"

const fileName = "src/1-assets/json/data.json"

async function getJsonData(): Promise<InvoiceModel[]> {

    const content = await fsPromises.readFile(fileName, "utf-8")

    const data: InvoiceModel[] = JSON.parse(content)

    return data

}

