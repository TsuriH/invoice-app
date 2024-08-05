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

            <div className="items-container">

                <p>Item Name</p>
                <p>Qty.</p>
                <p>Price</p>
                <p>Total</p>
                <FontAwesomeIcon icon={faTrash} className="space-filler" />

               

                <input type="text" placeholder="test" />
                <input type="text" placeholder="test"/>
                <input type="text" placeholder="test" />
                <input type="text" placeholder="test"/>
                <FontAwesomeIcon icon={faTrash} />

            </div>

            <div className="edit-buttons-container">

            </div>


        </div>
    )
}