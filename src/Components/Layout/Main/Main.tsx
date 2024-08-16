import "./Main.css"
import { InvoiceCard } from "../../InvoiceArea/InvoiceCard/InvoiceCard"
import invoicesDataArray from "../../../data.json"


export function Main(): JSX.Element {


    return (
        <div className="Main">

            <div className="invoices-container">
                {invoicesDataArray && invoicesDataArray.map((invoice, index) =>
                (<InvoiceCard key={index}
                    id={invoice.id}
                    date={invoice.paymentDue}
                    price={invoice.items[0].total}
                    client={invoice.clientName}
                    status={invoice.status} />
                )
                )}

            </div>
        </div >
    )
}


