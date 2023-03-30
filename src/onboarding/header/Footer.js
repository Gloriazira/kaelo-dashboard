import {
    NavLink
} from "react-router-dom";

export default function Footer() {
    return(
        <footer className="container-fluid pb-2">
            <hr />                
                {/* <div className="d-flex flex-column justify-content-center "> */}
                
                    <div className="d-flex align-items-center justify-content-between mt-3 px-5 py-2 footer">
                        <p>2021 Kaelo Incoportated</p>
                        <ul className="d-flex footer-links">
                            <li>
                                <NavLink>Terms</NavLink>
                            </li>
                            <li>
                                <NavLink>Privacy</NavLink>
                            </li>
                            <li>
                                <NavLink>Security</NavLink>
                            </li>
                            <li>
                                <NavLink>Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>

                {/* </div> */}
            </footer>
    )
}