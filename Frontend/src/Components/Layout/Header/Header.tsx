import "./Header.css"
import logo from "../../../assets/logo.svg"
import moon from "../../../assets/icon-moon.svg"
import avatar from "../../../Assets/image-avatar.jpg"

export function Header(): JSX.Element {

    return (
        <div className="Header">
            <div className="logo-area">
                <div className="logo-container">
                    <img src={logo} alt="" />
                </div>
            </div>

            <div className="color-mode">
                <img src={moon} alt="" />
            </div>
            <div className="profile-picture-container">
                <img src={avatar} alt="" />
            </div>
        </div>
    )

}