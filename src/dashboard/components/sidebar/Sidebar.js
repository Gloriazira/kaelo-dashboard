import {
  NavLink,
  useNavigate 
} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faSuitcase, faArrowRightArrowLeft, faGift, faGear, faRightFromBracket, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css"


export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="my-5 pt-5 px-2 sidebar">
      <div className="sidebar-wrapper">
        <div className=" sidebar-menu">

          <div className="sidebar-top-menu d-flex flex-column align-items-center">
            <button onClick={() => navigate("/dashboard/applyloan")} className="btn">Apply for Loan</button>
            <ul className="sidebar-navlink my-4 d-flex flex-column align-items-center">
              <li>
                <NavLink className={({ isActive }) => (isActive ? "sidebar-link" : "link")} to="/dashboard/account">
                  <FontAwesomeIcon icon={faThLarge} className="sidebar-icon" size={'lg'} />
                  Account
                </NavLink>
              </li>

              <li>
                <NavLink className={({ isActive }) => (isActive ? "sidebar-link" : "link")} to="/dashboard/facility">
                  <FontAwesomeIcon icon={faSuitcase} className="sidebar-icon" size={'lg'} />
                  Facilities
                </NavLink>
              </li>

              <li>
                <NavLink className={({ isActive }) => (isActive ? "sidebar-link" : "link")} to="/dashboard/expense">
                  <FontAwesomeIcon icon={faArrowRightArrowLeft} className="sidebar-icon" size={'lg'} />
                  Expense Management
                </NavLink>
              </li>

              <li>
                <NavLink className={({ isActive }) => (isActive ? "sidebar-link" : "link")} to="/dashboard/referral">
                  <FontAwesomeIcon icon={faGift} className="sidebar-icon" size={'lg'} />
                  Referral
                </NavLink>
              </li>

              <li>
                <NavLink className={({ isActive }) => (isActive ? "sidebar-link" : "link")} to="/dashboard/team">
                  <FontAwesomeIcon icon={faUserPlus} className="sidebar-icon" size={'lg'} />
                  Invite Team Member(s)
                </NavLink>

              </li>
            </ul>
          </div>

          <div className="sidebar-bottom-menu mt-5">
            <hr />
            <ul className="sidebar-navlink mt-2 d-flex flex-column align-items-center">
              <li>
                <NavLink className={({ isActive }) => (isActive ? "sidebar-link" : "link")} to="/dashboard/settings" >
                  <FontAwesomeIcon icon={faGear} className="sidebar-icon" size={'lg'} />
                  Settings
                </NavLink>
              </li>
              <li >
                <NavLink className="link">
                  <FontAwesomeIcon icon={faRightFromBracket} className="sidebar-icon" size={'lg'} />
                  Log Out
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}