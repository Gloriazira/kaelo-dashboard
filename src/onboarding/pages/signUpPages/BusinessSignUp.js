import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


export default function BusinessSignUp() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/verifyemail");
    }

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        idNumber: "",
        city: "",
        country: "",
        businessnumber: "",
        password: ""
    });


    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const { name, phone, email, idnumber, country, businessnumber, password } = formData;

    const [passwordType, setPasswordType] = useState("false");
    const [icon, setIcon] = useState({ faEyeSlash });

    const togglePasswordVisiblity = () => {
        setPasswordType(passwordType ? false : true);
        setIcon(!icon);
    };



    return (
        <div className="d-flex flex-column business-signup my-4 p-5 align-items-center">
            <div>
                <h1>Sign up</h1>

                <form action="submit" className="d-flex flex-column align-items-center">
                    <div className="d-flex align-item-center justify-content-center">
                        <div className="mx-3">
                            <div className="form-group">
                                <label style={{ color: "#2C2E33" }}>Name of Applicant</label>
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
                                <label style={{ color: "#2C2E33" }}>Email Address</label>
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
                                <label style={{ color: "#2C2E33" }}>Business Registration Number</label>
                                <input
                                    value={businessnumber}
                                    onChange={e => updateFormData(e)}
                                    placeholder="Business number"
                                    type="number"
                                    name="businessnumber"
                                    required
                                />
                            </div>
                            <div className="form-group ">
                                <label style={{ color: "#2C2E33" }}>City</label>
                                <select name="" id="">
                                    <option value="">select country...</option>
                                    <option value="sa">South Africa</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="nigeria">Nigeria</option>
                                    <option value="ghana">Ghana</option>
                                </select>
                                {/* <input
                                    value={city}
                                    onChange={e => updateFormData(e)}
                                    placeholder="city"
                                    type="text"
                                    name="city"
                                    required
                                /> */}
                            </div>
                        </div>

                        <div className="mx-3">
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
                                <label style={{ color: "#2C2E33" }}>ID Number</label>
                                <input
                                    value={idnumber}
                                    onChange={e => updateFormData(e)}
                                    placeholder="ID Number"
                                    type="number"
                                    // name="idnumber"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label style={{ color: "#2C2E33" }}>Country</label>
                                <input
                                    value={country}
                                    onChange={e => updateFormData(e)}
                                    placeholder="Country"
                                    type="text"
                                    name="country"
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
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center my-3">
                        <input type="checkbox" name="agree" id="" />
                        <p>I am a legal representative of this business.</p>

                    </div>

                    {/* <NavLink to="/verifyemail"> */}
                    <button className="btn my-3" onClick={handleClick} type="submit">Sign Up</button>
                    {/* </NavLink> */}
                </form>
            </div>
        </div>
    )
}