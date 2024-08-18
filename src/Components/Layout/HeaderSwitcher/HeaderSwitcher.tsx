import "./HeaderSwitcher.css"
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FiltersProps {
    filterType: Function;
}

export function HeaderSwitcher(props: FiltersProps): JSX.Element {

    const [filterState, setFilterState] = useState({
        draft: false,
        pending: false,
        paid: false
    });

    const handleCheckboxChange = (event: any) => {
        const { value, checked } = event.target;
        const newFilterState = {
            ...filterState,
            [value]: checked
        };
        setFilterState(newFilterState)
    };

    useEffect(()=> {
      props.filterType(filterState)
    },[filterState])


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
                                        <input type="checkbox" value="draft" onChange={handleCheckboxChange} checked={filterState.draft} />
                                        <span className="option-name">Draft</span>
                                    </label>

                                    <label>
                                        <input type="checkbox" value="pending" onChange={handleCheckboxChange} checked={filterState.pending} />
                                        <span className="option-name">Pending</span>
                                    </label>

                                    <label>
                                        <input type="checkbox" value="paid" onChange={handleCheckboxChange} checked={filterState.paid} />
                                        <span className="option-name">Paid</span>
                                    </label>

                                </div> : ""}

                            {/* filter container toggle */}

                        </div>

                        <NavLink className="new-invoice-btn" to="/add-invoice">
                            <div className="icon-plus">
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <p className="action-description">New <span>Invoice</span></p>
                        </NavLink>

                    </div>
                    : (<button className="back-btn" style={
                        location.pathname === "/invoice-details"
                            ? { background: "" }
                            : { background: "white" }
                    }>

                        <NavLink to="/" className="go-back-btn">
                            <FontAwesomeIcon icon={faChevronLeft} style={{ color: "var(--purple)" }} />Go back</NavLink>
                    </button>)

            }
        </div>


    )
}









