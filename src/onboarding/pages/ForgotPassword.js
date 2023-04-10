import React, { useState } from "react";
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function ForgotPassword() {

    // let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [formData, setFormData] = useState({
        email: "",
    });


    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const { email } = formData;


    return (
        <div className="d-flex flex-column justify-content-center align-items-center px-5 py-5 mx-5 my-5 reset-password">
             <h1>Forgot Password</h1>
             <p>(Enter the email address you registered with)</p>
            <div className="form mt-4">

                <form className="">
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
                    {/* <NavLink  to="/resetpassword" >
                    <button className="btn" type="submit">Submit</button>
                    </NavLink>
                     */}
                </form>
                <button className="btn " type="submit" onClick={openModal}>Submit</button>
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

                <h1>Email Sent</h1>
                <div className="modal-text d-flex flex-column align-items-center">
                <p>A password reset link have been sent to your </p>
                <p style={{fontWeight: "700"}}>janedeo@gmail.com</p>
                </div>
            </Modal>       
        </div>
    )
}