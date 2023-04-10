import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


export default function IndividualSignUp() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/verifyemail");
    }


    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        idNumber: "",
        password: ""
    });


    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const { name, phone, email, idNumber, password } = formData;

    const [passwordType, setPasswordType] = useState("false");
    const [icon, setIcon] = useState({ faEyeSlash });

    const togglePasswordVisiblity = () => {
        setPasswordType(passwordType ? false : true);
        // icon === {eyeclose}
        //   ? setIcon({eye})
        //   : setIcon({eyeclose});
        setIcon(!icon);
    };




    return (
        <div>
            <div className="d-flex flex-column justify-content-center align-items-center p-5 mx-5 my-5">
                <h1>Sign up</h1>
                <div className="form">

                    <form>
                        <div className="form-group">
                            <label style={{ color: "#2C2E33" }}>Name</label>
                            <input
                                value={name}
                                onChange={e => updateFormData(e)}
                                placeholder="Full name"
                                type="text"
                                name="name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label style={{ color: "#2C2E33" }}>Phone Number</label>
                            <input
                                value={phone}
                                onChange={e => updateFormData(e)}
                                placeholder="Phone Number"
                                type="number"
                                name="phone"
                                required
                            />
                        </div>


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
                            <label style={{ color: "#2C2E33" }}>ID Number</label>
                            <input
                                value={idNumber}
                                onChange={e => updateFormData(e)}
                                placeholder="ID Number"
                                // type="number"
                                name="idNumber"
                                required
                            />
                        </div>

                        <div className="form-group">

                            <label style={{ color: "#2C2E33" }}>Password</label>


                            <div className="d-flex align-items-center pass-input">
                                <input
                                    value={password}
                                    // onClick={togglePassword}
                                    onChange={e => updateFormData(e)}
                                    placeholder="Password"
                                    type={passwordType ? "password" : "text"}
                                    name="password"
                                    required
                                ></input>
                                <div onClick={togglePasswordVisiblity} className="eye">
                                    <FontAwesomeIcon icon={icon ? faEyeSlash : faEye} className='' />

                                </div>
                                {/* <i className="mx-2" onClick={togglePasswordVisiblity}>{eyeclose}</i> */}
                            </div>
                        </div>

                        {/* <NavLink to="verifyemail"> */}
                        <button className="btn" onClick={handleClick} type="submit">Sign Up</button>
                        {/* </NavLink> */}
                    </form>
                </div>
            </div>
        </div>
    )
}