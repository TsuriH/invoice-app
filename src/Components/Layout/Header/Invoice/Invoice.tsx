import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Invoice.css"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

export function Invoice(): JSX.Element {


    return (
        <div className="Invoice">

            <p className="invoice-id"><span>#</span>RT3080</p>
            <p className="date-created">Due  19 Aug 2021</p>
            <p className="customer-name">Jensen Huang</p>
            <p className="invoice-price">£1,800.90</p>

            <div className="status">
                <FontAwesomeIcon icon={faCircle} style={{ fontSize: "1rem" }} />
                <p className="paid">Paid</p>
            </div>

            <FontAwesomeIcon icon={faChevronRight} className="right-chevron"/>



        </div>
    )
}