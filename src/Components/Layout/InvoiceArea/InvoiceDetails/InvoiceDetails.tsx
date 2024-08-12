import "./InvoiceDetails.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

export function InvoiceDetails(): JSX.Element {

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
                        <p className="status">Pending</p>
                    </div>
                </div>
            </div>

            <div className="invoice-information">

                <div className="invoice-details-container">

                    <div className="upper-part">

                        <div className="upper-part-headline">
                            <h2 className="invoice-id"><span>#</span>XM9141</h2>
                            <p className="service-name">Graphic Design</p>
                        </div>

                        <div className="address">
                            <p className="street"> 19 Union Terrace</p>
                            <p className="city">London</p>
                            <p className="zip-code">E1 3EZ</p>
                            <p className="country">United Kingdom</p>
                        </div>


                    </div>

                    <div className="lower-part">

                        <div className="additional-details">
                            <div className="basic-info">

                                <div className="invoice-date">
                                    <p>Invoice Date</p>
                                    <p>21 Aug 2021</p>
                                </div>

                                <div className="payment-due">
                                    <p>Payment Due</p>
                                    <p>20 Sep 2021</p>
                                </div>

                            </div>

                            <div className="bill-to">
                                <p>Bill to</p>
                                <div className="address">
                                    <p className="name">Alex Grim</p>
                                    <p className="street">84 Church Way</p>
                                    <p className="city">Bradford</p>
                                    <p className="zip-code">BD1 9PB</p>
                                    <p className="country">United Kingdom</p>
                                </div>
                            </div>

                        </div>

                        <div className="email">
                            <p>Sent to</p>
                            <p>alexgrim@mail.com</p>
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

                    <div className="service">
                        <div className="left-side">

                            <p className="service-name">
                                Banner Design
                            </p>

                            <div className="calculation">

                                <p className="service-quantity">1</p>
                                <p className="times">x</p>
                                <p className="amount"><span>€ </span> 156.00</p>

                            </div>
                        </div>

                        <p className="service-cost">
                            <span>€</span> 156.00
                        </p>
                    </div>

                    <div className="service">
                        <div className="left-side">
                            <p className="service-name">
                                Email Design
                            </p>
                            <div className="calculation">

                                <p className="service-quantity">2</p>
                                <p className="times">x</p>
                                <p className="amount"> <span>€</span> 200.00</p>

                            </div>
                        </div>

                        <p className="service-cost">
                            <span>€</span> 400.00
                        </p>
                    </div>

                    <div className="grand-total">
                        <p>Grand Total</p>
                        <p className="amount"> € 556.00</p>
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