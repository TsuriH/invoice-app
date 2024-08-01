import "./AddInvoice.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"


export function AddInvoice(): JSX.Element {

    return (
        <div className="AddInvoice">

            <button className="back-btn">
                <FontAwesomeIcon icon={faChevronLeft} style={{ color: "var(--purple)" }} />
                <p>Go back</p>
            </button>

            <div className="status-box">

                <div className="status-container">
                    <p className="status-headline">Status</p>
                    <div className="status-wrapper">
                        <FontAwesomeIcon icon={faCircle} style={{ fontSize: "1rem" }} />
                        <p className="status">Pending</p>
                    </div>
                </div>
                {/* invoice actions for tablet an above */}
                <div className="invoice-actions">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                    <button className="change-status-btn">Mark as Paid</button>
                </div>
                {/* invoice actions for tablet an above */}

            </div>

            <div className="invoice-detailes">
        
            </div>

            {/* invoice actions for mobile */}
            <div className="mobile-invoice-actions">
                <button className="mobile-edit-btn">Edit</button>
                <button className="mobile-delete-btn">Delete</button>
                <button className="mobile-change-status-btn">Mark as Paid</button>
            </div>
            {/* invoice actions for mobile */}


        </div>
    )
}