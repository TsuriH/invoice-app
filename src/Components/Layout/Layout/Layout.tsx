import { Header } from "../Header/Header"
import { HeaderSwitcher } from "./HeaderSwitcher/HeaderSwitcher"
import "./Layout.css"
import { Routing } from "./Routing/Routing"



export function Layout(): JSX.Element {

    return (
        <div className="Layout">
            <header>
                <Header />
            </header>

            <main>
                <HeaderSwitcher />
                <Routing />
            </main>

            <div className="spacer">
                <Header />
            </div>

        </div>
    )
}