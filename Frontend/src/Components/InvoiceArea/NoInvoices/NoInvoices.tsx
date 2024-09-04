import "./NoInvoices.css"
import illustrationEmpty from "../../../assets/illustration-empty.svg"


export function EmptyInvoicesList(): JSX.Element {

    return (
        <div className="NoInvoices">

            <img src={illustrationEmpty} alt="" />
            <h2>There is nothing here</h2>
            <div className="instruction">
                <p>Create an invoice by clicking the</p>
                <p><span>New</span> button and get started</p>
            </div>
        </div>

    )
}