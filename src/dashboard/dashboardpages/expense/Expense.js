

import { FilterListRounded } from "@material-ui/icons";

import "./expense.css";
import ExpenseCategory from './category/ExpenseCategory';
import ExpenseDocuments from './document/ExpenseDocuments'

export default function Expense() {

  return (
    <div className="expense mx-5 py-5">
      <div className="expense-content my-5 p-4">
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
          <ExpenseCategory />
          <ExpenseDocuments />

        </div>

      </div>
    </div>
  )
}