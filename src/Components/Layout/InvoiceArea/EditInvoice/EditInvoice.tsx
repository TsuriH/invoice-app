import "./EditInvoice.css"

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

            </div>

            <div className="items-container">

            </div>

            <div className="edit-buttons-container">

            </div>


        </div>
    )
}