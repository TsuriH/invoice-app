import { Header } from "../Header/Header"
import "./Layout.css"

export function Layout(): JSX.Element {


    return (
        <div className="Layout">
            <header>
                <Header />
            </header>
            <main>This is the main</main>
            <div className="spacer">
                <Header />
            </div>
        </div>
    )
}