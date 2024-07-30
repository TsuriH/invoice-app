import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import "./Main.css"
import { useState } from 'react'

export function Main(): JSX.Element {

    const [filterButtonUp, setFilterButtonUp] = useState<Boolean>(true)

    const toggleFilterBtn = () => {
        setFilterButtonUp(!filterButtonUp)
    }

    return (
        <div className="Main">
            <div className="main-header">

                <div className="invoices-quantity">
                    <h2 className="invoices">Invoices</h2>
                    <p className="invoices-total"> There are 4 pending invoices</p>
                </div>

                <button className="filter" onClick={toggleFilterBtn}>
                    <p className="text-btn">Filter</p>
                    {filterButtonUp? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}

                </button>

                <div className="filters-options">

                    <label>
                        <input type="checkbox" value="draft" />
                        <span className="option-name">Draft</span>
                    </label>

                    <label>
                        <input type="checkbox" value="pending" />
                        <span className="option-name">Pending</span>
                    </label>

                    <label>
                        <input type="checkbox" value="paid" />
                        <span className="option-name">Paid</span>
                    </label>

                </div>

                <button className="new-invoice-btn">
                    <div className="icon-plus"></div>
                    <p className="action-description">New Invoice</p>
                </button>

            </div>

            <div className="invoices-container">
                <p>This is where all the invoices will be</p>
            </div>
        </div>
    )
}