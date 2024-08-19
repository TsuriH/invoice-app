import { Header } from "../Header/Header"
import { HeaderSwitcher } from "../HeaderSwitcher/HeaderSwitcher"
import "./Layout.css"
import { Routing } from "../Routing/Routing"
import { useState } from "react"


export function Layout(): JSX.Element {

    // Start code for passing the updated filters from HeadSwitcher to Main
    const [filters, setFilters] = useState({
        draft: false,
        pending: false,
        paid: false
    });

    const filterType = (newFilters: typeof filters) => {
        setFilters(newFilters);
    }
    // End code for passing the updated filters from HeadSwitcher to Main


    const [invoicesCount, setInvoicesCount] = useState(0);

    // Check the number of invoices in the main
    const updateInvoicesCount = (count: number) => {
        setInvoicesCount(count);
    };

    return (
        <div className="Layout">

            <header>
                <Header />
            </header>

            <main>
                <HeaderSwitcher filterType={filterType} invoicesCount={invoicesCount}/>
                <Routing filters={filters} updateInvoicesCount={updateInvoicesCount} />
            </main>

            <div className="spacer">
                <Header />
            </div>

        </div>
    )
}