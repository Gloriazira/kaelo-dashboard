import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import profile from "../profile.png";
import "./editprofile.css"

export default function EditProfile() {
    const [formData, setFormData] = useState({
        email: "",
        fullname: "",
        country: "",
        phone: "",
        idnum: "",
        city: ""
    });


    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const { fullname, email, country, phone, idnum, city } = formData;
    return (
        <div className="d-flex flex-column align-items-center my-2  edit-profile">
            <h1 className="my-5">Email Sent</h1>
            <div className="image d-flex">
                <img src={profile} alt="" srcset="" />
                <div className="icon">
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        id="contained-button-file"
                    />
                    <label htmlFor="contained-button-file" className='d-flex align-items-center'>
                        <FontAwesomeIcon icon={faEdit} className='edit-icon' />
                    </label>

                </div>
            </div>
            <form className="">
                <div className="d-flex align-items-center my-5">
                    <div className="mx-3">
                        <div className="form-group">
                            <label style={{ color: "#2C2E33" }}>Full Name</label>
                            <input
                                value={fullname}
                                onChange={e => updateFormData(e)}
                                type="text"
                                name="name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label style={{ color: "#2C2E33" }}>Email address</label>
                            <input
                                className="input"
                                value={email}
                                onChange={e => updateFormData(e)}
                                // placeholder="Email address"
                                type="email"
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label style={{ color: "#2C2E33" }}>Country</label>
                            <select name="country" value={country}>
                                <option value=""></option>
                                <option value="sa">South Africa</option>
                                <option value="ng">Nigeria</option>
                                <option value="gh">Ghana</option>
                            </select>

                        </div>
                    </div>
                    <div className="mx-3">

                        <div className="form-group">
                            <label style={{ color: "#2C2E33" }}>Phone Number</label>
                            <input
                                value={phone}
                                onChange={e => updateFormData(e)}
                                type="tel"
                                name="phone"

                            />
                        </div>
                        <div className="form-group">
                            <label style={{ color: "#2C2E33" }}>ID Number</label>

                            <input
                                value={idnum}
                                onChange={e => updateFormData(e)}
                                type="number"
                                name="idnum"

                            />
                        </div>
                        <div className="form-group">
                            <label style={{ color: "#2C2E33" }}>City</label>
                            <input
                                className="input"
                                value={city}
                                onChange={e => updateFormData(e)}
                                type="text"
                                name="city"
                                required
                            />
                        </div>
                    </div>
                </div>



            </form>
            <button className="btn edit-btn">Save</button>
        </div>
    )
}