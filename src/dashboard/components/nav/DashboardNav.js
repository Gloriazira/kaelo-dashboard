import React, { useState } from "react";
import {
    NavLink
} from "react-router-dom";
import "./dashboardnav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import avatar from "./avatar.jpg";




export default function DashboardNav() {
    const [formData, setFormData] = useState({
        search: ""
    });


    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const { search } = formData;
    return (
        <div className="dashboard-nav">
            <header className="container-fluid topbar">
                <nav className="d-flex align-items-center justify-content-between" >
                    <NavLink to="/">
                        <h1>Kaelo</h1>
                    </NavLink>

                    <p className="mx-3">Hello John,</p>
                    <div className="d-flex align-items-center justify-content-around">
                        <form action="">
                            <div className="d-flex align-items-center form">
                                <FontAwesomeIcon icon={faSearch} className='search-icon' />
                                <input
                                    value={search}
                                    onChange={e => updateFormData(e)}
                                    placeholder="Search"
                                    type="text"
                                    name="search"
                                    required
                                ></input>


                            </div>
                        </form>

                        <div className=" mx-4 py-2 top-icon">
                            <FontAwesomeIcon icon={faBell} className="fa-bell" />
                            <span className="top-icon-badge">1</span>
                        </div>


                        <img src={avatar} alt="" className="topAvatar" />



                    </div>



                </nav>
            </header>

        </div>
    )
}