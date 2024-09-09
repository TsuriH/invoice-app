import { Route, Routes } from "react-router-dom";
import { Main } from "../Main/Main";
import { EmptyInvoicesList } from "../../InvoiceArea/NoInvoices/NoInvoices";
import { InvoiceDetails } from "../../InvoiceArea/InvoiceDetails/InvoiceDetails";
import { AddInvoice } from "../../InvoiceArea/AddInvoice/AddInvoice";
import { EditInvoice } from "../../InvoiceArea/EditInvoice/EditInvoice";

interface RoutingProps {
    filters: any;
    updateInvoicesCount: Function;
}

export function Routing(props: RoutingProps): JSX.Element {

    return (
        <div className="Routing">

            <Routes>

                <Route path="/" element={<Main filters={props.filters}  updateInvoicesCount={props.updateInvoicesCount} />} />
                <Route path="/no-invoices" element={<EmptyInvoicesList />} />
                <Route path="/invoice-details/:invoiceId" element={<InvoiceDetails />} />
                <Route path="/add-invoice" element={<AddInvoice />} />
                <Route path="/edit-invoice/:invoiceId" element={<EditInvoice />} />

            </Routes>


        </div>
    )
}