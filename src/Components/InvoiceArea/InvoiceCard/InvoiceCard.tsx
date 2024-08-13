import "./InvoiceCard.css"  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

export function InvoiceCard(): JSX.Element {


    return (
        <div className="InvoiceCard">

            <p className="invoice-card-id"><span>#</span>RT3080</p>
            <p className="date-created">Due  19 Aug 2021</p>
            <p className="customer-name">Jensen Huang</p>
            <p className="invoice-card-price">£1,800.90</p>

            <div className="status">
                <FontAwesomeIcon icon={faCircle} style={{ fontSize: "1rem" }} />
                <p className="paid">Paid</p>
            </div>

            <FontAwesomeIcon icon={faChevronRight} className="right-chevron"/>

        </div>
    )
}