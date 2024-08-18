import { Header } from "../Header/Header"
import { HeaderSwitcher } from "../HeaderSwitcher/HeaderSwitcher"
import "./Layout.css"
import { Routing } from "../Routing/Routing"
import { useState } from "react"


export function Layout(): JSX.Element {

    const [filters, setFilters] = useState({
        draft: false,
        pending: false,
        paid: false
    });

    const filterType = (newFilters: typeof filters) => {
        setFilters(newFilters);
    }

    return (
        <div className="Layout">

            <header>
                <Header />
            </header>

            <main>
                <HeaderSwitcher filterType={filterType} />
                <Routing  filters={filters}/>
            </main>

            <div className="spacer">
                <Header />
            </div>

        </div>
    )
}