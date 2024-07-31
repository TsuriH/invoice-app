import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import "./Main.css"
import { useState } from 'react'
import { Invoice } from '../Header/Invoice/Invoice'

export function Main(): JSX.Element {

    const [filterButtonUp, setFilterButtonUp] = useState<Boolean>(false)

    const toggleFilterBtn = () => {
        setFilterButtonUp(!filterButtonUp)
    }

    return (
        <div className="Main">
            <div className="main-header">

                <div className="invoices-quantity">
                    <h2 className="invoices">Invoices</h2>
                    <p className="invoices-total-short-version"> 4 invoices</p>
                    <p className="invoices-total-long-version"> There are 4 total invoices</p>
                </div>

                <button className="filter" onClick={toggleFilterBtn}>
                    <p className="text-btn">Filter <span>by status</span></p>

                    {filterButtonUp ?
                        <FontAwesomeIcon icon={faChevronUp} className='chevron-arrow' />
                        :
                        <FontAwesomeIcon icon={faChevronDown} className='chevron-arrow' />}
                </button>

                {/* filter container toggle */}
                {filterButtonUp ? <div className="filters-options">

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

                </div> : ""}
                {/* filter container toggle */}


                <button className="new-invoice-btn">
                    <div className="icon-plus">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <p className="action-description">New <span>Invoice</span></p>
                </button>

            </div>

            <div className="invoices-container">
                <Invoice />
                <Invoice />
                <Invoice />
            </div>
        </div>
    )
}