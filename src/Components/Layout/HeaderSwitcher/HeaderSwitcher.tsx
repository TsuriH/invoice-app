import "./HeaderSwitcher.css"
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function HeaderSwitcher(): JSX.Element {


    const location = useLocation();

    const [filterButtonUp, setFilterButtonUp] = useState<Boolean>(false)
    const toggleFilterBtn = () => {
        setFilterButtonUp(!filterButtonUp)
    }

    return (
        <div className="HeaderSwitcher">
            {
                location.pathname === '/' || location.pathname === '/no-invoices' ?

                    <div className="main-header">

                        <div className="invoices-quantity">
                            <h2 className="invoices">Invoices</h2>
                            <p className="invoices-total-short-version"> 4 invoices</p>
                            <p className="invoices-total-long-version"> There are 4 total invoices</p>
                        </div>

                        <div className="filter-container">

                            <button className="filter" onClick={toggleFilterBtn}>
                                <p className="text-btn">Filter <span>by status</span></p>

                                {filterButtonUp ?
                                    <FontAwesomeIcon icon={faChevronUp} className='chevron-arrow' />
                                    :
                                    <FontAwesomeIcon icon={faChevronDown} className='chevron-arrow' />}
                            </button>

                            {/* filter container toggle */}

                            {filterButtonUp ?

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

                                </div> : ""}

                            {/* filter container toggle */}

                        </div>

                        <button className="new-invoice-btn">
                            <div className="icon-plus">
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <p className="action-description">New <span>Invoice</span></p>
                        </button>

                    </div>
                    : (<button className="back-btn" style={
                        location.pathname === "/invoice-details"
                            ? { background: "" }
                            : { background: "white" }
                    }>
                        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "var(--purple)" }} />
                        <NavLink to="/" className="go-back-btn">Go back</NavLink>
                    </button>)

            }
        </div>


    )
}









