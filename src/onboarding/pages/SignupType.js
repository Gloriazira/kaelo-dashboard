import {useNavigate  } from "react-router-dom"


export default function SignupType() {
    const navigate = useNavigate();
    return (
        <div className="account-type py-5 mt-5">
            <div className="d-flex align-items-center justify-content-around">
                <div className="individual " style={{background: "#FFFFFF",
                    border: "1px solid #623CE7", color: "#141414"}}>
                    <div className="d-flex flex-column container-fluid">
                        <h2 className="mx-3 my-2">Individual</h2>
                        <hr style={{border: "1px solid #623CE7", color: "#141414"}} />
                        <ul className="mx-4 my-2">
                            <li>8% Interest</li>
                            <li>Cashback Rewards</li>
                        </ul>
                    </div>
                    {/* <Link to="/signup/individualsignup"> */}
                        <button className="btn" style={{background: "#623CE7",
                    color: "#FFFFFF"}} onClick={() => navigate("/individualsignup")}>Continue</button>
                    {/* </Link> */}

                </div>
                <div className="business" style={{
                    background: "#623CE7",
                    border: "1px solid #623CE7", color: "#ffffff"
                }}>
                    <div className="d-flex flex-column container-fluid">
                        <h2 className="mx-3 my-2">Business</h2>
                        <hr style={{border: "1px solid #FFFFFf"}} />
                        <ul className="mx-4 my-2">
                            <li>8% Interest</li>
                            <li>Cashback Rewards</li>
                            <li>Expense Management</li>
                            <li>Network</li>
                        </ul>
                    </div>
                    {/* <Link to= "/signup/businesssignup"> */}
                        <button className="btn" style={{background: "#FFFFFF",
                    color: "#623CE7"}} onClick={() => navigate("/businesssignup")}>Continue</button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )
}