import React, { useState } from "react";
import './loan.css';
import { Icon } from '@iconify/react';
import pdf from './pdf-img.png'


export default function BusinessLoanForm() {
    const [formData, setFormData] = useState({
        lamount: "",
        interest: "",
        gross: "",
    });


    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const { lamount, interest, gross } = formData;
    return (
        <div className="loan-page mx-5 py-5">
            <div className="loan-form my-5 py-4">
                <p className="title">Complete the form below to apply for a loan. All  boxes  are compulsory</p>
                <hr />
                <form action="" className="d-flex flex-column  mx-5">
                    <div className='my-5 mx-4'>
                        <p className="fw-bold"> Applying as?</p>
                        <div className="d-flex justify-content-between my-2">
                            <div className="d-flex align-items-center form-group check-box">
                                <input type="checkbox" name="" id="" />
                                <p>Sole Proprietor</p>
                            </div>
                            <div className="d-flex align-items-center form-group check-box">
                                <input type="checkbox" name="" id="" />
                                <p>Partnership</p>
                            </div>
                            <div className="d-flex align-items-center form-group check-box">
                                <input type="checkbox" name="" id="" />
                                <p>Corporate</p>
                            </div>
                        </div>
                    </div>



                    <div className="business-reg ">
                        <div className="d-flex flex-column mx-4">
                            <hr />
                            <p> Business Registration Certificate</p>
                            <hr />
                            <div >
                                <div className=" my-3 mx-5">
                                    <img src={pdf} alt="" className='' />
                                    <div className='d-flex flex-column'>
                                        <p>File Name</p>
                                        <button className='btn close-btn'><Icon icon="prime:times" className='close' /></button>

                                    </div>

                                </div>

                                <div className='upload-btn  d-flex align-items-center my-5'>
                                    <input
                                        type="file"
                                        // accept="image/*"
                                        style={{ display: 'none' }}
                                        id="contained-button-file"
                                    />
                                    <label htmlFor="contained-button-file" className='d-flex align-items-center'>
                                        {/* <button '> */}
                                        <Icon icon="material-symbols:upload-rounded" className='upload-icon' />
                                        <p>Upload File</p>
                                        {/* </button> */}
                                    </label>

                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="acct-statement mt-5 ">
                        <div className="d-flex flex-column mx-4">
                            <hr />
                            <p>6 Months Bank Statement</p>
                            <hr />
                            <div className='upload-btn  d-flex align-items-center my-5'>
                                <input
                                    type="file"
                                    // accept="image/*"
                                    style={{ display: 'none' }}
                                    id="contained-button-file"
                                />
                                <label htmlFor="contained-button-file" className='d-flex align-items-center'>
                                    {/* <button '> */}
                                    <Icon icon="material-symbols:upload-rounded" className='upload-icon' />
                                    <p>Upload File</p>
                                    {/* </button> */}
                                </label>

                            </div>
                        </div>

                    </div>

                    <div className="loan-detail my-5 ">
                        <div className="d-flex flex-column mx-4">
                            <hr />
                            <p> Loan Details</p>
                            <hr />
                        </div>
                        <div className="d-flex justify-content-between my-2 mx-4">
                            <div>
                                <div className="d-flex align-items-center form-group check-box">
                                    <input type="checkbox" name="" id="" />
                                    <p>Renewable Energy</p>
                                </div>
                                <div className="d-flex align-items-center form-group check-box">
                                    <input type="checkbox" name="" id="" />
                                    <p>Invoice Discount</p>
                                </div>

                            </div>
                            <div>
                                <div className="d-flex align-items-center form-group check-box">
                                    <input type="checkbox" name="" id="" />
                                    <p>Purchase Order</p>
                                </div>
                                <div className="d-flex align-items-center form-group check-box">
                                    <input type="checkbox" name="" id="" />
                                    <p>Open Credit</p>
                                </div>

                            </div>
                            <div>
                                <div className="d-flex align-items-center form-group check-box">
                                    <input type="checkbox" name="" id="" />
                                    <p>Inventry Finance</p>
                                </div>
                                <div className="d-flex align-items-center form-group check-box">
                                    <input type="checkbox" name="" id="" />
                                    <p>Other...</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center my-2">
                            <div className="mx-4">
                                <div className="form-group">
                                    <label>Project Gross Value</label>
                                    <input
                                        value={gross}
                                        onChange={e => updateFormData(e)}
                                        type="number"
                                        name="gross"
                                        placeholder="$"
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
                                    <label>Loan Amount</label>
                                    <input
                                        value={lamount}
                                        onChange={e => updateFormData(e)}
                                        type="number"
                                        name="lamount"
                                        placeholder="$"
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
                    </div>
                    <div className="finance-info my-5 ">
                        <div className="d-flex flex-column mx-4">
                            <hr />
                            <p> Financial Information</p>
                            <hr />
                        </div>
                        <div className="finance-info-check mx-4 my-2">
                            <p>
                                Do you have an up to date assets and liabilities statement?
                            </p>
                            <diiv className="d-flex">
                                <div className="d-flex align-items-center form-group check-box">
                                    <input type="checkbox" name="" id="" />
                                    <p>Yes</p>
                                </div>
                                <div className="d-flex align-items-center form-group check-box mx-5">
                                    <input type="checkbox" name="" id="" />
                                    <p>No</p>
                                </div>
                            </diiv>
                            {<br />}
                            <p>
                                Have you previously been financed?
                            </p>
                            <diiv className="d-flex ">
                                <div className="d-flex align-items-center form-group check-box ">
                                    <input type="checkbox" name="" id="" />
                                    <p>Yes</p>
                                </div>
                                <div className="d-flex align-items-center form-group check-box mx-5">
                                    <input type="checkbox" name="" id="" />
                                    <p>No</p>
                                </div>
                            </diiv>
                            <div>
                                <p className="last my-5">This information provided in this application shall not be shared to anyone else and is kept confidential.</p>
                                <p className="agree-text">I agree that the information herein are true and correct.</p>
                                <div className="d-flex align-items-center form-group check-box ">
                                    <input type="checkbox" name="" id="" />
                                    <p>Yes</p>
                                </div>
                            </div>


                        </div>
                    </div>
                    <button className="btn submit-btn mx-4"> Submit</button>
                </form>
            </div>

        </div>
    )
}