import "./EditInvoice.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

export function EditInvoice(): JSX.Element {

    return (
        <div className="EditInvoice">

            <div className="edit-invoice-head">
                <p>Edit</p>
                <div className="invoice-id"><span>#</span>XM9141</div>
            </div>

            <div className="bill-from-container">
                <p className="bill-from headline">Bill From</p>

                <label htmlFor="" className="street">Street Address
                    <input type="text" />
                </label>

                <div className="detailed-address">

                    <div className="city-and-post-container">

                        <label htmlFor="" className="city">City
                            <input type="text" />
                        </label>

                        <label htmlFor="" className="post-code">Post Code
                            <input type="text" />
                        </label>

                    </div>

                    <label htmlFor="" className="country">Country
                        <input type="text" />
                    </label>

                </div>

            </div>

            <div className="bill-to-container">

                <p className="bill-to headline">Bill To</p>

                <label htmlFor="" className="client-name">Client's Name
                    <input type="text" />
                </label>

                <label htmlFor="" className="client-email">Client's Email
                    <input type="text" />
                </label>

                <label htmlFor="" className="street-address">Street Address
                    <input type="text" />
                </label>

                <div className="city-country-container">

                    <div className="city-and-post-container">

                        <label htmlFor="" className="city">City
                            <input type="text" />
                        </label>

                        <label htmlFor="" className="post-code">Post Code
                            <input type="text" />
                        </label>

                    </div>

                    <label htmlFor="" className="country">Country
                        <input type="text" />
                    </label>

                </div>

                <div className="last-details">

                    <div className="invoice-date-container">

                        <label htmlFor="" className="invoice-date">Invoice Date
                            <input type="date" />
                        </label>

                        <label htmlFor="" className="payment-terms">Payment Terms
                            <select name="" id="">
                                <option value="">Net 30 Days</option>
                                <option value="">Net 60 Days</option>
                                <option value="">Net 90 Days</option>
                            </select>
                        </label>


                    </div>

                    <label htmlFor="" className="project-name">Project Description
                        <input type="text" />
                    </label>

                </div>


            </div>
            <h3 className="item-header">Item List</h3>


            <div className="items-container">

                <div className="item-row">

                    <div className="header-row">
                        <p className="mobile-single-row" >Item Name</p>
                        <div className="more-headers">
                            <p>Qty.</p>
                            <p>Price</p>
                            <p>Total</p>
                            <FontAwesomeIcon icon={faTrash} className="space-filler" />
                        </div>

                    </div>

                    <div className="inputs-container">

                        <div className="item-name-input-container item-container">

                            <p className="mobile-header-input">Item Name</p>
                            <input type="text" className="mobile-single-row" />

                        </div>

                        <div className="lower-item-info">

                            <div className="quantity-input-container item-container" >
                                <p className="mobile-header-input">Qty.</p>
                                <input type="number" className="mobile-single-row" />
                            </div>

                            <div className="Price-input-container item-container">
                                <p className="mobile-header-input">Price</p>
                                <input type="number" className="mobile-single-row" />
                            </div>

                            <div className="Price-input-container item-container">
                                <p className="mobile-header-input">Total</p>
                                <p className="item-total" style={{ color: "var(--grayish-lavender)", fontWeight: "700", fontSize: "1.5rem" }}>156.00</p>
                            </div>

                            <div className="item-bin-container item-container">
                                <p className="space-filler ">fill</p>
                                <FontAwesomeIcon icon={faTrash} style={{ color: "var(--grayish-lavender)", fontSize: "1.8rem" }} />
                            </div>

                        </div>

                    </div>

                </div>

                <button className="add-new-item-btn">+ Add New Item</button>
            </div>

            <div className="edit-buttons-container">
                <button className="cancel-btn">Cancel</button>
                <button className="save-btn">Save Changes</button>
            </div>
        </div>
    )
}