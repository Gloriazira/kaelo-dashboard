import { NavLink } from "react-router-dom";
import { useState } from "react";
import OtpInput from 'react-otp-input';

export default function VerifyEmail() {

    const [code, setCode] = useState("");

    const handleChange = (code) => setCode(code);


    return (

        <div className="verify-email py-5 my-5">
            <div className="d-flex flex-column align-items-center " >
                <h1>Verify your email account</h1>
                <p>Kindly enter the OTP sent to <span ><a href="mailto: janedoe@gmail.com" style={{ color: "#623CE7" }}> janedoe@gmail.com</a></span></p>


                <OtpInput
                    className="otp-input my-5 py-3"
                    value={code}
                    onChange={handleChange}
                    numInputs={6}
                    separator={<span style={{ width: "8px" }}></span>}
                    isInputNum={true}
                    shouldAutoFocus={true}
                    inputStyle={{
                        border: "1px solid #BBC2D9",
                        borderRadius: "10px",
                        width: "60px",
                        height: "60px",
                        fontSize: "18px",
                        caretColor: "#141414",
                        margin: "0 30px"
                    }}
                    focusStyle={{
                        border: "1px solid #141414",
                        outline: "none"
                    }}
                />

                <NavLink to="/dashboard">
                    <button className="btn my-3" type="submit">Sign In</button>
                </NavLink>

                <p>Didn’t receive email? <span><a href="" style={{ color: "#623CE7" }}> Resend</a></span></p>

            </div>
        </div>
    )
}