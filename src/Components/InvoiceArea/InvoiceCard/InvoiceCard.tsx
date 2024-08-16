import "./InvoiceCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from 'react-router-dom';

interface CardProps {
    id: string;
    date: string;
    price: number;
    client: string;
    status: string;
}
export function InvoiceCard(props: CardProps): JSX.Element {

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

    const price = formatNumber(props.price)

    function formatDate(dateString:string) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    }

    const newDate = formatDate(props.date)


    return (
        <NavLink to={`invoice-details/${props.id}`} className="InvoiceCard">

            <p className="invoice-card-id"><span>#</span>{props.id}</p>
            <p className="date-created"> Due <span>{newDate}</span></p>
            <p className="customer-name">{props.client}</p>
            <p className="invoice-card-price">£ <span>{price}</span></p>

            <div className="status">
                <FontAwesomeIcon icon={faCircle} style={{
                    fontSize: "1rem",
                    color: props.status === "pending"
                        ? "#FF8F00"
                        : props.status === "draft"
                            ? "#373B53"
                            : "",
                }} />

                <p className="paid" style={props.status === "pending" ? { color: "#FF8F00" } : props.status === "draft" ? { color: "#373B53" } : { color: "" }}>{props.status}</p>
            </div>

            <FontAwesomeIcon icon={faChevronRight} className="right-chevron" />

        </NavLink>
    )
}