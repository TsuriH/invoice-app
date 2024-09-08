import "./InvoiceDetails.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import InvoiceModel from "../../../model/InvoiceModel"
import dataService from "../../../services/InvoicesService"
import { useNavigate } from 'react-router-dom';

export function InvoiceDetails(): JSX.Element {

    const [invoicesDataArray, setInvoicesDataArray] = useState<InvoiceModel[]>([]);

    const [currentInvoice, setCurrentInvoice] = useState<InvoiceModel>();

    const { invoiceId } = useParams<{ invoiceId?: string }>();

    const navigate = useNavigate();


    useEffect(() => {
        dataService.getAllData()
            .then(data => {
                setInvoicesDataArray(data)
                setCurrentInvoice(data.find(invoice => invoice.id === invoiceId))
                const currentInvoice = data.find(invoice => invoice.id === invoiceId)
                setCurrentInvoice(currentInvoice)

            })
            .catch(err => console.log(err))

    }, [])

    function formatDate(dateString: string) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    }

    const deleteInvoice = async (id: string) => {
        //go to the server and delete this invoice        
        await dataService.deleteInvoice(id)
        // fetch back 
        const updatedInvoices = await dataService.getAllData();
        //update the data of invoiceDataArray
        setInvoicesDataArray(updatedInvoices);
        //back to the main menu
        navigate('/');

    }

    const changeToPaid = async (id: string) => {
        if (currentInvoice?.status === "paid") {
            alert("The invoice is already marked as paid")
            return
        } else {

            //function that use the id to change to paid if it's already paid alert it's already payed

            //bring the updated list

        }


    }

    const formatNumber = (num: number) => {
        const formattedNumber = Number(num).toFixed(2);
        const [integerPart, decimalPart] = formattedNumber.split('.');
        const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return `${integerWithCommas}.${decimalPart}`;
    };

    if (!currentInvoice) {
        return <div>Loading or Invoice not found...</div>;
    }

    const invoiceDesignedDate = formatDate(currentInvoice.createdAt);
    const invoicedesignedPaymentDue = formatDate(currentInvoice.paymentDue);

    return (
        <div className="InvoiceDetails">
            <div className="delete-alert">
                <div className="delete-alert-container">
                    <h2>Confirm Deletion</h2>
                    <p className="delete-alert-text">Are you sure you want to delete invoice #{currentInvoice.id} This action cannot be undone</p>
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
                        <p className="status" style={{ textTransform: "capitalize" }}>{currentInvoice.status}</p>
                    </div>
                </div>
            </div>

            <div className="invoice-information">
                <div className="invoice-details-container">
                    <div className="upper-part">
                        <div className="upper-part-headline">
                            <h2 className="invoice-id"><span>#</span>{currentInvoice.id}</h2>
                            <p className="service-name">{currentInvoice.description}</p>
                        </div>
                        <div className="address">
                            <p className="street">{currentInvoice.senderAddress.street}</p>
                            <p className="city">{currentInvoice.senderAddress.city}</p>
                            <p className="zip-code">{currentInvoice.senderAddress.postCode}</p>
                            <p className="country">{currentInvoice.senderAddress.country}</p>
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
                                    <p className="name">{currentInvoice.clientName}</p>
                                    <p className="street">{currentInvoice.clientAddress.street}</p>
                                    <p className="city">{currentInvoice.clientAddress.city}</p>
                                    <p className="zip-code">{currentInvoice.clientAddress.postCode}</p>
                                    <p className="country">{currentInvoice.clientAddress.country}</p>
                                </div>
                            </div>
                        </div>
                        <div className="email">
                            <p>Sent to</p>
                            <p>{currentInvoice.clientEmail}</p>
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
                    {currentInvoice.items.map(p => (
                        <div key={p.name} className="service">
                            <div className="left-side">
                                <p className="service-name">{p.name}</p>
                                <div className="calculation">
                                    <p className="service-quantity">{p.quantity}</p>
                                    <p className="times">x</p>
                                    <p className="amount"><span>£</span> {formatNumber(p.price)}</p>
                                </div>
                            </div>
                            <p className="service-cost">
                                <span>£</span> {formatNumber(p.price * p.quantity)}
                            </p>
                        </div>
                    ))}
                    <div className="grand-total">
                        <p>Grand Total</p>
                        <p className="amount">£{currentInvoice.items.reduce((s, p) => s + p.price * p.quantity, 0).toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <div className="desktop-invoice-actions">
                <div className="status-box">
                    <div className="status-container">
                        <p className="status-headline">Status</p>
                        <div className="status-wrapper">
                            <FontAwesomeIcon icon={faCircle} style={{ fontSize: "1rem" }} />
                            <p className="status">{currentInvoice.status}</p>
                        </div>
                    </div>
                </div>
                <div className="invoice-actions">
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn" onClick={() => deleteInvoice(currentInvoice.id)}>Delete</button>
                    <button className="change-status-btn">Mark as Paid</button>
                </div>
            </div>
            <div className="mobile-invoice-actions">
                <button className="mobile-edit-btn">Edit</button>
                <button className="mobile-delete-btn" onClick={() => deleteInvoice(currentInvoice.id)}>Delete</button>
                <button className="mobile-change-status-btn" onClick={() => changeToPaid(currentInvoice.id)}>Mark as Paid</button>
            </div>
        </div>
    );
}
