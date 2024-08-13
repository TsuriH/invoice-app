import "./Main.css"


import { InvoiceCard } from "../../InvoiceArea/InvoiceCard/InvoiceCard"

export function Main(): JSX.Element {

    return (
        <div className="Main">

            <div className="invoices-container">
                <InvoiceCard />
            </div>
        </div >
    )
}


