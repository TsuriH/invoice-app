import "./AddInvoice.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useForm, SubmitHandler } from "react-hook-form"
import invoicesDataArray from "../../../data.json"
import InvoiceModel from "../../model/InvoiceModel"

export function AddInvoice(): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InvoiceModel>()

    const invoiceIdGenerator = () => {
        const lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const newIdRaw: any = ["#"]

        for (let i = 0; i < 2; i++) {
            const randomNumber = Math.floor(Math.random() * 10);
            newIdRaw.push(lettersArray[randomNumber].toUpperCase())
        }

        for (let i = 0; i < 4; i++) {
            const randomNumber = Math.floor(Math.random() * 10);
            newIdRaw.push(numbersArray[randomNumber])
        }

        const newId = newIdRaw.toString();
        return newId;
    }

    // Recursively call the function if a duplicate is found
    const validatedInvoiceId = () => {

        const newId = invoiceIdGenerator();

        if (invoicesDataArray.some(invoice => invoice.id === newId)) {
            return validatedInvoiceId();
        }
        return newId;
    }

    const onSubmit = (data: InvoiceModel) => {
        console.log(data)
        
    }

    return (
        <div className="AddInvoice">

            <div className="new-invoice-head">
                <p>New Invoice</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bill-from-container">
                    <p className="bill-from headline">Bill From</p>

                    <label htmlFor="" className="street">Street Address
                        <input {...register("senderAddress.street", { required: "This filed is required" })} />
                        <p>{errors.senderAddress?.street?.message}</p>
                    </label>

                    <div className="detailed-address">

                        <div className="city-and-post-container">

                            <label htmlFor="" className="city">City
                                <input type="text" {...register("senderAddress.city", { required: "This filed is required" })} />
                                <p>{errors.senderAddress?.city?.message }</p>
                            </label>

                            <label htmlFor="" className="post-code">Post Code
                                <input type="text" {...register("senderAddress.postCode", { required: "This filed is required" })} />
                                <p>{errors.senderAddress?.postCode?.message}</p>
                            </label>

                        </div>

                        <label htmlFor="" className="country">Country

                            <input {...register("senderAddress.country", { required: "This filed is required" })} />
                            <p>{errors.senderAddress?.country?.message}</p>
                        </label>

                    </div>

                </div>

                <div className="bill-to-container">

                    <p className="bill-to headline">Bill To</p>

                    <label htmlFor="" className="client-name">Client's Name
                        <input {...register("clientName", { required: "This filed is required" })} />
                        <p>{errors.clientName?.message}</p>

                    </label>

                    <label htmlFor="" className="client-email">Client's Email
                        <input {...register("clientEmail", { required: "This filed is required" })} />
                        <p>{errors.clientEmail?.message}</p>

                    </label>

                    <label htmlFor="" className="street-address">Street Address
                        <input {...register("clientAddress.street", { required: "This filed is required" })} />
                        <p>{errors.senderAddress?.street?.message}</p>
                    </label>

                    <div className="city-country-container">

                        <div className="city-and-post-container">

                            <label htmlFor="" className="city">City
                                <input {...register("clientAddress.city", { required: "This filed is required" })} />
                                <p>{errors.clientAddress?.city?.message}</p>

                            </label>

                            <label htmlFor="" className="post-code">Post Code
                                <input {...register("clientAddress.postCode", { required: "This filed is required" })} />
                                <p>{errors.clientAddress?.postCode?.message}</p>

                            </label>

                        </div>

                        <label htmlFor="" className="country">Country
                            <input {...register("clientAddress.country", { required: "This filed is required" })} />
                            <p>{errors.clientAddress?.country?.message}</p>

                        </label>

                    </div>

                    <div className="last-details">

                        <div className="invoice-date-container">

                            <label htmlFor="" className="invoice-date">Invoice Date
                                <input {...register("createdAt", { required: "This filed is required" })} />
                                <p>{errors.createdAt?.message}</p>

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
                            <input {...register("description", { required: "This filed is required" })} />
                            <p>{errors.description?.message}</p>

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
                                <input {...register("items.0.name", { required: "This filed is required" })} className="mobile-single-row" />
                                {/* <p>{errors.items[0]?.name?.message}</p> */}

                            </div>

                            <div className="lower-item-info">

                                <div className="quantity-input-container item-container" >
                                    <p className="mobile-header-input">Qty.</p>
                                    <input {...register("items", { required: "This filed is required" })} className="mobile-single-row" />
                                    {/* <p>{errors.items?.[0]?.quantity.message}</p> */}
                                </div>

                                <div className="Price-input-container item-container">
                                    <p className="mobile-header-input">Price</p>
                                    <input {...register("items", { required: "This filed is required" })} className="mobile-single-row" />
                                    {/* <p>{errors.itemPrice?.message}</p> */}
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