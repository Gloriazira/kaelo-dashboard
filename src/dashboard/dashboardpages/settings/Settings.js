import React from "react";
import Modal from 'react-modal';
import profile from "./profile.png";
import EditProfile from './profilemodal/EditProfile'
import './setting.css';



export default function Settings() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

  

    return (
        <div className="settings mx-5 pt-5">
            <div className='profile-info px-5 pt-3 mt-5'>
                <div className="d-flex align-items-end justify-content-between">
                    <img src={profile} alt="" />
                    <button onClick={openModal} className="btn">Edit</button>
                </div>
                <hr />
                <ul className="my-4 ml-3">
                    <li>Full Name: <span> John Deo</span></li>
                    <li>Phone Number: <span>+27 000000000</span></li>
                    <li>Email: <span>johndeo@gmail.com</span></li>
                    <li>ID:  <span>0000000000</span></li>
                    <li>Country:  <span>South Africa</span></li>
                    <li>City:  <span>Pretoria</span></li>
                    <li>Address:  <span>87, Pretori Road</span></li>
                </ul>
            </div>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className={{
                    base: 'modal',
                    afterOpen: 'modal_after-open',
                    beforeClose: 'modal_before-close'
                }}
                overlayClassName={{
                    base: 'overlay-base',
                    afterOpen: 'overlay_after-open',
                    beforeClose: 'overlay_before-close'
                }}
                shouldCloseOnOverlayClick={true}
                closeTimeoutMS={2000}
            >
               <EditProfile /> 
            </Modal>
        </div>
    )
}