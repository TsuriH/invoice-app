import { Route, Routes } from "react-router-dom";
import { Main } from "../../Main/Main";
import { EmptyInvoicesList } from "../../../InvoiceArea/NoInvoices/NoInvoices";
import { InvoiceDetails } from "../../../InvoiceArea/InvoiceDetails/InvoiceDetails";

interface RoutingProps {
    filters: boolean;
}

export function Routing(props: RoutingProps): JSX.Element {


    return (
        <div className="Routing">

            <Routes>
                <Route path="/" element={<Main filters={props.filters} />} />
                <Route path="/no-invoices" element={<EmptyInvoicesList />} />
                <Route path="/invoice-details" element={<InvoiceDetails />} />
            </Routes>

        </div>
    )
}