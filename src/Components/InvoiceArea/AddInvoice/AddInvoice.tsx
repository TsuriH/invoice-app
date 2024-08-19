import "./AddInvoice.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useForm, SubmitHandler } from "react-hook-form"

export function AddInvoice(): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data: any) => console.log(data)

    return (
        <div className="AddInvoice">

            <div className="new-invoice-head">
                <p>New Invoice</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bill-from-container">
                    <p className="bill-from headline">Bill From</p>

                    <label htmlFor="" className="street">Street Address
                        <input {...register("senderStreetAddress", { required: "This filed is required" })} />
                        <p>{errors.senderStreetAddress?.message as string}</p>
                    </label>

                    <div className="detailed-address">

                        <div className="city-and-post-container">

                            <label htmlFor="" className="city">City
                                <input type="text" {...register("senderCity", { required: "This filed is required" })} />
                                <p>{errors.senderCity?.message as string}</p>
                            </label>

                            <label htmlFor="" className="post-code">Post Code
                            <input type="text" {...register("senderPostCode", { required: "This filed is required" })} />
                            <p>{errors.senderPostCode?.message as string}</p>
                            </label>

                        </div>

                        <label htmlFor="" className="country">Country
                            
                            <input {...register("sendeCountry", { required:  "This filed is required" })} />
                            <p>{errors.sendeCountry?.message as string}</p>
                        </label>

                    </div>

                </div>

                <div className="bill-to-container">

                    <p className="bill-to headline">Bill To</p>

                    <label htmlFor="" className="client-name">Client's Name
                        <input {...register("clientName", { required:  "This filed is required" })} />
                        <p>{errors.clientName?.message as string}</p>

                    </label>

                    <label htmlFor="" className="client-email">Client's Email
                        <input {...register("clientEmail", { required:  "This filed is required" })} />
                        <p>{errors.clientEmail?.message as string}</p>

                    </label>

                    <label htmlFor="" className="street-address">Street Address
                        <input {...register("clientStreetAddress", { required: "This filed is required" })} />
                        <p>{errors.clientStreetAddress?.message as string}</p>
                    </label>

                    <div className="city-country-container">

                        <div className="city-and-post-container">

                            <label htmlFor="" className="city">City
                                <input {...register("clientCity", { required: "This filed is required" })} />
                                <p>{errors.clientCity?.message as string}</p>

                            </label>

                            <label htmlFor="" className="post-code">Post Code
                                <input {...register("clientPostCode", { required: "This filed is required" })} />
                                <p>{errors.clientPostCode?.message as string}</p>

                            </label>

                        </div>

                        <label htmlFor="" className="country">Country
                            <input {...register("clientCountry", { required: "This filed is required" })} />
                            <p>{errors.clientCountry?.message as string}</p>

                        </label>

                    </div>

                    <div className="last-details">

                        <div className="invoice-date-container">

                            <label htmlFor="" className="invoice-date">Invoice Date
                                <input {...register("invoiceDate", { required: "This filed is required" })} />
                                <p>{errors.invoiceDate?.message as string}</p>

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
                            <input {...register("projectName", { required: "This filed is required" })} />
                            <p>{errors.projectName?.message as string}</p>

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
                                <input {...register("itemName", { required: "This filed is required" })} className="mobile-single-row" />
                                <p>{errors.itemName?.message as string}</p>


                            </div>

                            <div className="lower-item-info">

                                <div className="quantity-input-container item-container" >
                                    <p className="mobile-header-input">Qty.</p>
                                    <input {...register("qty", { required: "This filed is required" })} className="mobile-single-row" />
                                    <p>{errors.qty?.message as string}</p>
                                </div>

                                <div className="Price-input-container item-container">
                                    <p className="mobile-header-input">Price</p>
                                    <input {...register("price", { required: "This filed is required" })} className="mobile-single-row" />
                                    <p>{errors.price?.message as string}</p>
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



                <div className="new-buttons-container">
                    <button className="discard-btn">Discard</button>
                    <button className="draft-btn">Save as Draft</button>
                    <input type="submit" className="save-btn" value="Save & Send" />
                </div>
            </form>
        </div>
    )
}