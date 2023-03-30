
import { FilterListRounded } from "@material-ui/icons";
import "./account.css";
import PieChart from "./piechart/PieChart";
import Profile from "./profile/Profile"

export default function Account() {
 
  return (
    <div className="user-account mx-5 py-5">
      <div className="account-content my-5 p-4">
        <div className="top-nav d-flex align-items-center justify-content-between">
          <p>Total Loan: <span style={{ color: "#333333", fontWeight: "600" }}>$234,985</span></p>

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
          <PieChart />
          <Profile />
        </div>

      </div>
    </div>
  )
}