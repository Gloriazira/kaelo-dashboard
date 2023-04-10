import React, { useState } from "react";

import './loan.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

export default function IndividualLoanForm() {
    const [formData, setFormData] = useState({
        lamount: "",
        repayplan: "",
        interest: "",
        income: "",
        employer: "",
        rent: "",
        occupation: "",
        institution: "",
        acct: "",
        address: "",
        phone: ""
    });


    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const { lamount, interest, income, employer, rent, occupation, institution, acct, address, phone } = formData;
    return (
        <div className="loan-page mx-5 py-5">
            <div className="loan-form my-5 py-4">
                <p className="title">Complete the form below to apply for a loan. All  boxes  are compulsory</p>
                <hr />
                <form action="" className="d-flex flex-column  mx-5">
                    <div className="d-flex align-items-center justify-content-center my-2">
                        <div className="mx-4">
                            <div className="form-group">
                                <label>Desired Loan Amount $</label>
                                <input
                                    value={lamount}
                                    onChange={e => updateFormData(e)}
                                    type="number"
                                    name="lamount"
                                    placeholder="0"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Repayment Plan</label>
                                <select name="repayplan" >
                                    <option value="3 months">3 months</option>
                                    <option value="6 months">6 months</option>
                                    <option value="9 months">9 months</option>
                                    <option value="12 months">12 months</option>
                                </select>

                            </div>
                        </div>
                        <div className="mx-4">


                            <div className="form-group">
                                <label>Annual Income $</label>
                                <input
                                    value={income}
                                    onChange={e => updateFormData(e)}
                                    type="number"
                                    name="income"
                                    placeholder="0"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Interest Rate</label>
                                <input
                                    value={interest}
                                    onChange={e => updateFormData(e)}
                                    type="text"
                                    name="interest"
                                    placeholder="15%"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="loan-type mx-4 my-5">
                        <p>Loan will be used for?</p>
                        <div className="d-flex justify-content-between my-2">
                            <div>
                                <div className="d-flex align-items-center form-group check-box">
                                    <input type="checkbox" name="" id="" />
                                    <p>Solar Panels, Batteries and Inverters</p>
                                </div>
                                <div className="d-flex align-items-center form-group check-box">
                                    <input type="checkbox" name="" id="" />
                                    <p>Electric Inverters</p>
                                </div>
                                <div className="d-flex align-items-center form-group check-box">
                                    <input type="checkbox" name="" id="" />
                                    <p>Solar Inverters</p>
                                </div>
                                <div className="d-flex align-items-center form-group check-box">
                                    <input type="checkbox" name="" id="" />
                                    <p>Others</p>
                                </div>

                            </div>
                            <div>
                                <div className="d-flex align-items-center form-group check-box">
                                    <input type="checkbox" name="" id="" />
                                    <p>Solar Appliances</p>
                                </div>
                                <div className="d-flex align-items-center form-group check-box">
                                    <input type="checkbox" name="" id="" />
                                    <p>Power Wall</p>
                                </div>
                                <div className="d-flex align-items-center form-group check-box">
                                    <input type="checkbox" name="" id="" />
                                    <p>Home Wind Power Solutions</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="employment-info ">
                        <div className="d-flex flex-column mx-4">
                            <hr />
                            <p> Employment Information</p>
                            <hr />
                        </div>
                        <div className="d-flex align-items-center justify-content-center my-2">
                            <div className="mx-4">
                                <div className="form-group">
                                    <label>Present Employer</label>
                                    <input
                                        value={employer}
                                        onChange={e => updateFormData(e)}
                                        type="text"
                                        name="employer"
                                        placeholder="Name of company"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Years of Experience</label>
                                    <select name="repayplan" >
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Monthly Rent/Mortgage</label>
                                    <input
                                        value={rent}
                                        onChange={e => updateFormData(e)}
                                        type="number"
                                        name="rent"
                                        placeholder="ex. 0 for no rent/mortgage"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mx-4">
                                <div className="form-group">
                                    <label>Occupation</label>
                                    <input
                                        value={occupation}
                                        onChange={e => updateFormData(e)}
                                        type="text"
                                        name="occupation"
                                        placeholder="Position in Company%"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Gross Monthly Income</label>
                                    <input
                                        value={income}
                                        onChange={e => updateFormData(e)}
                                        type="number"
                                        name="income"
                                        placeholder="ex: 1500"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Gross Monthly Income</label>
                                    <input
                                        value={income}
                                        onChange={e => updateFormData(e)}
                                        type="number"
                                        name="income"
                                        placeholder="ex: 1500"
                                        required
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="form-group mx-4">
                            <label>Monthly Rent/Mortgage</label>
                            <textarea name="" placeholder="ex. 0 for no rent/mortgage"></textarea>
                        </div>

                    </div>

                    <div className="employment-info mt-5 ">
                        <div className="d-flex flex-column mx-4">
                            <hr />
                            <p> Bank References</p>
                            <hr />
                        </div>
                        <div className="d-flex align-items-center justify-content-center my-2">
                            <div className="mx-4">
                                <div className="form-group">
                                    <label>Institution Name</label>
                                    <input
                                        value={institution}
                                        onChange={e => updateFormData(e)}
                                        type="text"
                                        name="institution"
                                        placeholder=""
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Address</label>
                                    <input
                                        value={address}
                                        onChange={e => updateFormData(e)}
                                        type="text"
                                        name="address"
                                        placeholder=""
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mx-4">

                                <div className="form-group">
                                    <label>Saving Account Number</label>
                                    <input
                                        value={acct}
                                        onChange={e => updateFormData(e)}
                                        type="number"
                                        name="acct"
                                        placeholder=""
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        value={phone}
                                        onChange={e => updateFormData(e)}
                                        type="tel"
                                        name="phone"
                                        placeholder="(000)000-000"
                                        required
                                    />
                                </div>
                            </div>

                        </div>

                    </div>
                    <button className="d-flex align-items-center justify-content-around btn add-btn mx-4">
                        <FontAwesomeIcon icon={faAdd} />
                        Add More
                    </button>

                    <div className="consent my-5 ">
                        <div className="d-flex flex-column mx-4">
                            <hr />
                            <p> Consent</p>
                            <hr />
                        </div>
                        <div className="consent-agreement mx-4 my-2">
                            <p>
                                I authorize prospective Credit Grantors/Lending/Leasing Companies
                                to obtain personal and credit information about me from my employer
                                and credit bureau, or credit reporting agency, any person who has
                                or may have any financial dealing with me, or from any references I have provided.
                                This information, as well as that provided by me in the application, will be referred
                                to in connection with this lease and any other relationships we may establish from
                                time to time. Any personal and credit information obtained may be disclosed from time
                                to time to other lenders, credit bureaus or other credit reporting agencies.
                            </p>
                            <div className="d-flex align-items-center form-group check-box">
                                <input type="checkbox" name="" id="" />
                                <p>Yes</p>
                            </div>
                            {<br />}
                            <p>
                            I hereby agree that the information given is true, accurate and complete as of the 
                            date of this application submission.
                            </p>
                            <div className="d-flex align-items-center form-group check-box">
                                <input type="checkbox" name="" id="" />
                                <p>Yes</p>
                            </div>
                        </div>

                        <button className="btn submit-btn mx-4 mt-5"> Submit</button>

                    </div>
                </form>
            </div>

        </div>
    )
}