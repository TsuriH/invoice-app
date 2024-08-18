import "./InvoiceDetails.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { useParams } from "react-router-dom"
import invoicesList from "../../../data.json"

export function InvoiceDetails(): JSX.Element {

    const { invoiceId } = useParams()

    const currentInvoice = invoicesList.filter(invoice => invoice.id === invoiceId)

    function formatDate(dateString: string) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    }

    
    const formatNumber = (num: number) => {
        // Convert number to a string with two decimal places
        const formattedNumber = Number(num).toFixed(2);

        // Split the number into integer and decimal parts
        const [integerPart, decimalPart] = formattedNumber.split('.');

        // Add commas to the integer part
        const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        // Return the formatted number
        return `${integerWithCommas}.${decimalPart}`;
    };


    const invoiceDesignedDate = formatDate(currentInvoice[0].createdAt)
    const invoicedesignedPaymentDue = formatDate(currentInvoice[0].paymentDue)



    return (
        <div className="InvoiceDetails">

            <div className="delete-alert">
                <div className="delete-alert-container">
                    <h2>Confirm Deletion</h2>
                    <p className="delete-alert-text">Are you sure you want to delete invoice #XM324 This action cannot be undone</p>
                    <div className="delete-btn-container">
                        <button>Cancel</button>
                        <button>Delete</button>
                    </div>
                </div>

            </div>


            <div className="mobile-status-box">

                <div className="status-container">
                    <p className="status-headline">Status</p>

                    <div className="status-wrapper">
                        <FontAwesomeIcon icon={faCircle} style={{ fontSize: "1rem" }} />
                        <p className="status" style={{textTransform:"capitalize"}}>{currentInvoice[0].status}</p>
                    </div>
                </div>
            </div>

            <div className="invoice-information">

                <div className="invoice-details-container">

                    <div className="upper-part">

                        <div className="upper-part-headline">

                            <h2 className="invoice-id"><span>#</span>{currentInvoice[0].id}</h2>

                            <p className="service-name">{currentInvoice[0].description}</p>
                        </div>

                        <div className="address">
                            <p className="street"> {currentInvoice[0].senderAddress.street}</p>
                            <p className="city">{currentInvoice[0].senderAddress.city}</p>
                            <p className="zip-code">{currentInvoice[0].senderAddress.postCode}</p>
                            <p className="country">{currentInvoice[0].senderAddress.country}</p>
                        </div>


                    </div>

                    <div className="lower-part">

                        <div className="additional-details">
                            <div className="basic-info">

                                <div className="invoice-date">
                                    <p>Invoice Date</p>
                                    <p>{invoiceDesignedDate}</p>
                                </div>

                                <div className="payment-due">
                                    <p>Payment Due</p>
                                    <p>{invoicedesignedPaymentDue}</p>
                                </div>

                            </div>

                            <div className="bill-to">
                                <p>Bill to</p>
                                <div className="address">
                                    <p className="name">{currentInvoice[0].clientName}</p>
                                    <p className="street">{currentInvoice[0].clientAddress.street}</p>
                                    <p className="city">{currentInvoice[0].clientAddress.city}</p>
                                    <p className="zip-code">{currentInvoice[0].clientAddress.postCode}</p>
                                    <p className="country">{currentInvoice[0].clientAddress.country}</p>
                                </div>
                            </div>

                        </div>

                        <div className="email">
                            <p>Sent to</p>
                            <p>{currentInvoice[0].clientEmail}</p>
                        </div>

                    </div>

                </div>


                <div className="detailed-payment">

                    <div className="headline-table">
                        <p>Item Name</p>
                        <div className="right-table">

                            <p>QTY.</p>
                            <p>Price</p>
                            <p>Total</p>

                        </div>
                    </div>

                    {currentInvoice[0].items.map(p =>

                        <div className="service">

                            <div className="left-side">
                                <p className="service-name">
                                    {p.name}
                                </p>
                                <div className="calculation">

                                    <p className="service-quantity">{p.quantity}</p>
                                    <p className="times">x</p>
                                    <p className="amount"> <span>£</span> {formatNumber(p.price)}</p>

                                </div>
                            </div>

                            <p className="service-cost">
                                <span>£</span> {formatNumber(p.price * p.quantity) }
                            </p>
                        </div>
                    )}


                    <div className="grand-total">
                        <p>Grand Total</p>
                        <p className="amount">£{currentInvoice[0].items.reduce((s, p) =>s + p.total,0).toFixed(2)}</p>
                    </div>
                </div>
            </div>

            {/* invoice actions for tablet an above */}
            <div className="desktop-invoice-actions">
                <div className="status-box">
                    <div className="status-container">
                        <p className="status-headline">Status</p>
                        <div className="status-wrapper">
                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: "1rem" }} />
                            <p className="status">Pending</p>
                        </div>
                    </div>
                </div>

                <div className="invoice-actions">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                    <button className="change-status-btn">Mark as Paid</button>
                </div>

            </div>

            {/* invoice actions for tablet an above */}

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