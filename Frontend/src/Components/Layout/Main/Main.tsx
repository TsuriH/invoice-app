import "./Main.css"
import { InvoiceCard } from "../../InvoiceArea/InvoiceCard/InvoiceCard"
import invoicesDataArray from "../../../data.json"
import { useEffect } from "react";

interface MainProps {
    filters: any;
    updateInvoicesCount: Function;
}

export function Main(props: MainProps): JSX.Element {



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
        : invoicesDataArray.filter(invoice => activeFiltersOnlyKeys.includes(invoice.status))


    useEffect(() => {
        props.updateInvoicesCount(filterInvoicesDataArray.length);
    }, [filterInvoicesDataArray, props.updateInvoicesCount]);

    return (
        <div className="Main">

            <div className="invoices-container">
                {filterInvoicesDataArray && filterInvoicesDataArray.map((invoice, index) =>
                (<InvoiceCard key={index}
                    id={invoice.id}
                    date={invoice.paymentDue}
                    price={invoice.items[0].total}
                    client={invoice.clientName}
                    status={invoice.status}
                />
                )
                )}

            </div>

        </div >
    )
}


