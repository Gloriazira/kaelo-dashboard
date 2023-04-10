import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faCircleCheck } from "@fortawesome/free-solid-svg-icons";


export default function ResetPassword() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }

    function closeModal() {
        setIsOpen(false);
    }
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });


    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const { password, confirmPassword } = formData;

    const [passwordType, setPasswordType] = useState(" ");
    const [confirmPasswordType, setConfirmPasswordType] = useState(" ");
    const [icon, setIcon] = useState({ faEyeSlash });
    const [icon1, setIcon1] = useState({ faEyeSlash });

    const togglePasswordVisiblity = () => {
        setPasswordType(passwordType ? false : true);
        setIcon(!icon);
    };
    const togglePasswordVisiblityOne = () => {
        setConfirmPasswordType(confirmPasswordType ? false : true);
        setIcon1(!icon1);
    };


    return (
        <div className="d-flex flex-column justify-content-center align-items-center px-5 py-5 mx-5 my-1 reset-password">
            <h1>Reset Password</h1>
            <p>(Enter a new password)</p>
            <div className="form mt-2">

                <form className="">
                    <div className="form-group">

                        <label style={{ color: "#2C2E33" }}> New Password</label>

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
                            <div onClick={togglePasswordVisiblity} className="mx-3 eye">
                                <FontAwesomeIcon icon={icon ? faEyeSlash : faEye} className='' />

                            </div>
                            {/* <i className="mx-2" onClick={togglePasswordVisiblity}>{eyeclose}</i> */}
                        </div>
                    </div>

                    <div className="form-group">

                        <label style={{ color: "#2C2E33" }}>Confirm New Password</label>

                        <div className="d-flex align-items-center pass-input">
                            <input
                                value={confirmPassword}
                                // onClick={togglePassword}
                                onChange={e => updateFormData(e)}
                                placeholder="password"
                                type={confirmPasswordType ? "password" : "text"}
                                name="confirmPassword"
                                required
                            ></input>
                            <div onClick={togglePasswordVisiblityOne} className="mx-3 eye">
                                <FontAwesomeIcon icon={icon1 ? faEyeSlash : faEye} className='' />
                            </div>
                        </div>
                        <p style={{color:"red",fontSize: "14px" }}>{password === confirmPassword ? "" : "Passwords don't match"}</p>
                    </div>
                    
                </form>
                <button className="btn" type="submit" disabled={password === confirmPassword ? false : true} onClick={openModal}>Submit</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className={{
                    base: 'modal-base',
                    afterOpen: 'modal-base_after-open',
                    beforeClose: 'modal-base_before-close'
                }}
                overlayClassName={{
                    base: 'overlay-base',
                    afterOpen: 'overlay-base_after-open',
                    beforeClose: 'overlay-base_before-close'
                }}
                shouldCloseOnOverlayClick={true}
                closeTimeoutMS={2000}
            >
                    <div className="icon">
                    <FontAwesomeIcon icon={faCircleCheck} className='check-icon' />
                </div>

                <h1>Successful!</h1>
                <p>You have successfully changed your password.</p>
                <NavLink  to="/dashboard">
                <button className="btn"> Sign In</button>
                </NavLink>
                

            </Modal>
        </div>
    )
}