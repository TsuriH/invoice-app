import { Route, Routes } from "react-router-dom";
import { Main } from "../../Main/Main";
import { EmptyInvoicesList } from "../../../InvoiceArea/NoInvoices/NoInvoices";
import { InvoiceDetails } from "../../../InvoiceArea/InvoiceDetails/InvoiceDetails";
import { AddInvoice } from "../../../InvoiceArea/AddInvoice/AddInvoice";
import { EditInvoice } from "../../../InvoiceArea/EditInvoice/EditInvoice";


export function Routing(): JSX.Element {


    return (
        <div className="Routing">

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/no-invoices" element={<EmptyInvoicesList />} />
                <Route path="/invoice-details" element={<InvoiceDetails />} />
                <Route path="/add-invoice" element={<AddInvoice />} />
                <Route path="/edit-invoice" element={<EditInvoice />} />

            </Routes>

        </div>
    )
}