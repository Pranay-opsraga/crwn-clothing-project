import { useContext } from "react";
import { Outlet, Link } from "react-router-dom"
import CrwnLogo from "../assets/crown.svg?react"
import { UserContext } from "../contexts/user.contexts"
import { signOutUser } from "../utils/firebase/firebase.utils";

const NavBar = () => {
    const { currentUser } = useContext(UserContext);
    const signOutHandler = async () => {
        await signOutUser();

    }

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
                    {currentUser ? (
                        <Link className="nav-link" to="/auth" onClick={signOutHandler}>
                            SIGN OUT
                        </Link>
                    ) : (
                        <Link className="nav-link" to="/auth">
                            SIGN IN
                        </Link>
                    )}
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default NavBar;