import "./InvoiceDetails.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

export function InvoiceDetails(): JSX.Element {

    return (
        <div className="InvoiceDetails">

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

                <div className="payment">
                    <div className="detailed-payment">
                        <div className="service">
                            <div className="left-side">

                                <p className="service-name">
                                    Banner Design
                                </p>
                                
                                <div className="calculation">

                                    <p className="service-quantity">1</p>
                                    <p className="times">x</p>
                                    <p className="amount">€ 156.00</p>

                                </div>
                            </div>

                            <p className="service-cost">
                            € 156.00
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
                                    <p className="amount"> € 200</p>

                                </div>
                            </div>

                            <p className="service-cost">
                                € 400.00
                            </p>
                        </div>

                        <div className="grand-total">
                            <p>Grand Total</p>
                            <p className="amount"> € 556.00</p>
                        </div>
                    </div>



                </div>

            </div>

            {/* invoice actions for tablet an above */}
            <div className="invoice-actions">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
                <button className="change-status-btn">Mark as Paid</button>
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