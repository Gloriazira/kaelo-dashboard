
import { FilterListRounded } from "@material-ui/icons";
import "./facility.css";
import BarChart from "./barchart/BarChart";
import AssetSummary from "./assetsummary/AssetSummary"


export default function Facility() {
 
  return (
    <div className="user-facility mx-5 py-5">
      <div className="facility-content my-5 p-4">
        <div className="top-nav d-flex align-items-center justify-content-between">
          <p>Monthly Details: <span style={{ color: "#333333", fontWeight: "600" }}>All</span></p>
           
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
          <BarChart />
          <AssetSummary />
        </div>

      </div>
    </div>
  )
}