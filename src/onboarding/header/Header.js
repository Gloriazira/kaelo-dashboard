import {
    NavLink,
    useLocation
} from "react-router-dom";

export default function Header() {
    let location = useLocation();
    return (
        <header className="container-fluid">
            <nav className="d-flex align-items-center justify-content-between" >
                <NavLink to="/">
                    <h1>Kaelo</h1>
                </NavLink>
             
                {location.pathname !== '/signup' && <div className="d-flex align-items-center navlink">
                    <p className="mx-3">New to Kaelo?</p>
                    <NavLink to="signup">

                        <button className="btn">create an account</button>
                    </NavLink>
                </div>
                }
                {location.pathname === '/signup' && <div className="d-flex align-items-center navlink">
                    <p className="mx-3">Already have an account?</p>
                    <NavLink to="/">
                    {/* && location.pathname !== 'individualsignup' && location.pathname !== 'businesssignup'  */}
                        <button className="btn">Sign In</button>
                    </NavLink>
                </div>
                }






            </nav>
        </header>
    )
}