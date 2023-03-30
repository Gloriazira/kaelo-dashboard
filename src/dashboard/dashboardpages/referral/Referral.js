import ReferralCode from './referralcode/ReferralCode';
import ReferralList from './referrallist/ReferralLists';
import './referral.css';
import { FilterListRounded } from "@material-ui/icons";

export default function Referral() {
    return(
        <div className="referral mx-5 py-5">
        <div className="referral-content my-5 p-4">
          <div className="top-nav d-flex align-items-center justify-content-between">
            <p>Balance Sheet:  <span style={{ color: "#333333", fontWeight: "600" }}>$201,355</span></p>
  
            <div className="filter-box">
              <FilterListRounded />
              {/* <FontAwesomeIcon icon={faFilter} className='search-icon' /> */}
              <form action="">
                <select name="" id="">
                  <option value="">Filter By</option>
                  <option value="rate">Rate</option>
                  <option value="amount">Amount</option>
                </select>
              </form>
            </div>
  
          </div>
          <hr />
          <div className="d-flex flex-row">
            <ReferralList />
            <ReferralCode />
  
          </div>
  
        </div>
      </div>
    )
}