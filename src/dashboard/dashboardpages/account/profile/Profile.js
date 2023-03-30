import "./profile.css";

import image from "./profile.png"

export default function Profile() {
    return(
        <div className="profile mx-2 my-4">
                <img src={image} alt="" />
            <ul className="profile-info my-4 ml-3">
                <li>Name: <span>John Doe</span></li>
                <li>ID Number:<span> 12345NFB6Y534</span></li>
                <li>Contact: <span>32 Drive, Charlton Estate, {<br />}Pretoria,  South Africa</span></li>
            </ul>
        </div>
    )
}