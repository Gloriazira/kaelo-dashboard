import {
  Outlet,
} from "react-router-dom";
import DashboardNav from "./components/nav/DashboardNav";
import Sidebar from "./components/sidebar/Sidebar";
// import Account from "./dashboardpages/account/Account";
// import Facility from './dashboardpages/facility/Facility';
// import Expense from './dashboardpages/expense/Expense';
// import Referral from './dashboardpages/referral/Referral';
// import Team from './dashboardpages/team/Team';

function DashboardLayout() {
  const myRow={
    display: "flex",
  }
  return (
    <div style={{background: "#FBFBFB"}}>
      
      <DashboardNav />
      <div style={myRow}>
        <Sidebar />
        <div>
          <Outlet />
        </div>
        {/* <Account /> */}
        {/* <Facility /> */}
        {/* <Expense /> */}
        {/* <Referral /> */}
        {/* <Team /> */}
        

      </div>


    </div>
  )
}

export default DashboardLayout