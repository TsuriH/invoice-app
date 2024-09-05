import "./AddInvoice.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useForm, useFieldArray, Controller } from "react-hook-form"
import InvoiceModel from "../../../model/InvoiceModel"
import { useEffect, useState } from "react"
import dataService from "../../../services/InvoicesService"


export function AddInvoice(): JSX.Element {

    const [invoicesDataArray, setInvoicesDataArray] = useState<InvoiceModel[]>()

    const [totals, setTotals] = useState<number[]>([0]);

    const [valueChanged, setValueChanged] = useState(false)

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        watch
    } = useForm<InvoiceModel>({ defaultValues: { items: [{ name: '', quantity: 1, price: 0 }] } })

    const { fields, append, remove } = useFieldArray({ control, name: "items" });

    const items = watch("items");

    useEffect(() => {

        console.log(items, "items")
        const newTotals = items.map(item => item.quantity * item.price);
        setTotals(newTotals);
    }, [items, valueChanged]);

    useEffect(() => {
        dataService.getAllData()
            .then(data => setInvoicesDataArray(data))
            .catch(err => alert(err.message))
    }, [])

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

        if (invoicesDataArray?.some(invoice => invoice.id === newId)) {
            return validatedInvoiceId();
        }

        return newId;
    }

    const onSubmit = (data: InvoiceModel) => {
        console.log(data)
        console.log(validatedInvoiceId())
        // function that use service to get to the file that located at the backend and update it

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
                                <p>{errors.senderAddress?.city?.message}</p>
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

                        {fields.map((item, index) => (

                            <div key={item.id} className="single-item">

                                <input
                                    id="name"
                                    {...register(`items.${index}.name`, { required: 'Item name is required' })}
                                />
                                <div className="second-part">

                                    <Controller
                                        control={control}
                                        name={`items.${index}.quantity`}
                                        rules={{ required: "This field is required" }}
                                        render={({ field: { onChange, value } }) => (
                                            <input

                                                type="number"
                                                value={value}
                                                onChange={(e) => {
                                                    setValueChanged(!valueChanged)
                                                    onChange(e);
                                                }}
                                            />
                                        )}
                                    />

                                    <Controller
                                        control={control}
                                        name={`items.${index}.price`}
                                        rules={{ required: "This field is required" }}
                                        render={({ field: { onChange, value } }) => (
                                            <input
                                                className="mobile-single-row"
                                                type="number"
                                                value={value}
                                                onChange={(e) => {
                                                    setValueChanged(!valueChanged)
                                                    onChange(e);

                                                }}
                                            />
                                        )}
                                    />

                                    <p className="total"> {totals[index] || 0}</p>

                                    <FontAwesomeIcon icon={faTrash} className="trash-icon" onClick={() => remove(index)} />

                                </div>

                            </div>
                        ))}

                    </div>

                    <button className="add-new-item-btn" onClick={(e) => {
                        e.preventDefault()
                        append({ name: '', quantity: 1, price: 0 })
                    }
                    } >+ Add New Item</button>

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