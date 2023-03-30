import {NavLink} from "react-router-dom"


export default function NotFound() {
    return (
        <div className="not-found m-5 p-5">
            <h1>Page Not Found</h1>

            <p>Go to the <NavLink to="/">Sign Up</NavLink>.</p>
        </div>
    )
}