import { Outlet, Link } from "react-router-dom"
import CrwnLogo from "../assets/crown.svg?react"
const NavBar = () => {
    return (
        <>
            <div className="flex justify-between p-4 mb-2 mt-2">
                <Link className="logo-container" to="/">
                    <div>
                        <CrwnLogo className="logo" />
                    </div>
                </Link>
                <div className="flex gap-10 mr-10 items-center justify-center">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default NavBar;