import { Icon } from '@iconify/react';
import gift from './gift.png';
import './refcode.css';



export default function ReferralCode() {

    return (
        <div className="ref-code px-2 py-2">
            <div className="d-flex flex-column align-items-center justify-content-center my-5 px-auto">
                <img src={gift} alt="" />
                <p className="text-center my-5">Earn  extra rewards by referring people and businesses to Kaelo!</p>
                <div className="d-flex align-items-center justify-content-around ">
                    <p>Referral Code: {<br />} <span style={{fontWeight: "600"}}>1938464GHR</span> </p>
                 
                    <Icon icon="ph:share-network-bold" className='icon'/>
                    <Icon icon="lucide:copy" className='icon'/>
                </div>
                <hr />
            </div>
        </div>
    )

}