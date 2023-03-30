import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import MyModal from "./modal/MyModal";

// import AddForm from "./modal/";


export default function Login() {

    


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });


    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const { email, password } = formData;

    const [passwordType, setPasswordType] = useState("false");
    const [icon, setIcon] = useState({ faEyeSlash });

    const togglePasswordVisiblity = () => {
        setPasswordType(passwordType ? false : true);
        // icon === {eyeclose}
        //   ? setIcon({eye})
        //   : setIcon({eyeclose});
        setIcon(!icon);
    };



    // const togglePassword = () => {
    //     if (passwordType === "password") {
    //         setPasswordType("text")
    //         return;
    //     }
    //     setPasswordType("password")
    // }


    return (
        <div className="d-flex flex-column justify-content-center align-items-center px-5 py-5 mx-5 mt-5 login">
            <h1>Sign In</h1>
            <div className="form">

                <form>
                    <div className="form-group">
                        <label style={{ color: "#2C2E33" }}>Email address</label>
                        <input
                            className="input"
                            value={email}
                            onChange={e => updateFormData(e)}
                            placeholder="Email address"
                            type="email"
                            name="email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <div className="d-flex align-items-center justify-content-between">
                            <label style={{ color: "#2C2E33" }}>Password</label>
                            <NavLink to="/forgotpassword" >
                                Forgot password?
                            </NavLink>

                        </div>

                        <div className="d-flex align-items-center">
                            <input
                                value={password}
                                // onClick={togglePassword}
                                onChange={e => updateFormData(e)}
                                placeholder="Password"
                                type={passwordType ? "password" : "text"}
                                name="password"
                                required
                            ></input>
                            <div onClick={togglePasswordVisiblity} className="mx-3 eye">
                                <FontAwesomeIcon icon={icon ? faEyeSlash : faEye} className='' />

                            </div>
                            {/* <i className="mx-2" onClick={togglePasswordVisiblity}>{eyeclose}</i> */}
                        </div>
                    </div>


                    <Link to="/dashboard"><button className="btn " type="submit">Sign In</button></Link>
                </form>
                


            </div>
            
        </div>
    )
}