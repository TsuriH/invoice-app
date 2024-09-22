import "./Main.css"
import { InvoiceCard } from "../../InvoiceArea/InvoiceCard/InvoiceCard"
import { useEffect, useState } from "react";
import InvoiceModel from "../../../model/InvoiceModel";
import dataService from "../../../services/InvoicesService";
import { EmptyInvoicesList } from "../../InvoiceArea/NoInvoices/NoInvoices";

interface MainProps {
    filters: any;
    updateInvoicesCount: Function;
}

export function Main(props: MainProps): JSX.Element {

    const [invoicesDataArray, setInvoicesDataArray] = useState<InvoiceModel[]>()
    useEffect(() => {
        dataService.getAllData()
            .then(data => setInvoicesDataArray(data))
            .catch(err => alert(err.message))
    }, [])


    // Get the active filters if there are there
    const activeFilters = Object.entries(props.filters).filter(([k, v]) => {
        if (v === true) {
            return k
        }
    })

    // Create array with only the keys
    const activeFiltersOnlyKeys = activeFilters.map(([k, v]) => k)

    // Create the final invoices array whether it's filtered or not
    const filterInvoicesDataArray = activeFiltersOnlyKeys.length === 0 ? invoicesDataArray
        : invoicesDataArray?.filter(invoice => activeFiltersOnlyKeys.includes(invoice.status))


    useEffect(() => {
        props.updateInvoicesCount(filterInvoicesDataArray?.length);
    }, [filterInvoicesDataArray, props.updateInvoicesCount]);



    return (
        <div className="Main">
            {filterInvoicesDataArray?.length === 0 ? <EmptyInvoicesList /> : ""}
            <div className="invoices-container">
                {filterInvoicesDataArray && filterInvoicesDataArray.map((invoice, index) =>
                (<InvoiceCard key={index}
                    id={invoice.id.toString()}
                    date={invoice.paymentDue}
                    price={invoice.items.reduce((total, item) => total + item.price * item.quantity, 0)}
                    client={invoice.clientName}
                    status={invoice.status}
                />
                )
                )}

            </div>

        </div >
    )
}