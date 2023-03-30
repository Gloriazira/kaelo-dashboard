import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";


//pages
import Login from './onboarding/pages/Login'
import IndividualSignUp from './onboarding/pages/signUpPages/IndividualSignUp'
import BusinessSignUp from './onboarding/pages/signUpPages/BusinessSignUp'
import SignupType from './onboarding/pages/SignupType'
import ForgotPassword from "./onboarding/pages/ForgotPassword";
import ResetPassword from "./onboarding/pages/ResetPassword";
import VerifyEmail from "./onboarding/pages/VerifyEmail";
import NotFound from './onboarding/pages/NotFound'
//layouts
import RootLayout from './layouts/RootLayout'

//Dashboard
import DashboardLayout from './dashboard/DashboardLayout';
import Account from './dashboard/dashboardpages/account/Account';
import Facility from './dashboard/dashboardpages/facility/Facility';
import Expense from './dashboard/dashboardpages/expense/Expense';
import Referral from './dashboard/dashboardpages/referral/Referral';
import Team from './dashboard/dashboardpages/team/Team';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Login />} />
      <Route path="signup" element={<SignupType />} />
      <Route path="/individualsignup" element={<IndividualSignUp />} />
      <Route path="/businesssignup" element={<BusinessSignUp />} />
      <Route path="resetpassword" element={<ResetPassword />} />
      <Route path="forgotpassword" element={<ForgotPassword />} />
      <Route path="verifyemail" element={<VerifyEmail />} />


      <Route path="dashboard" element={<DashboardLayout />} >
      <Route path="/dashboard" element={<Account />} />
        <Route path="/dashboard/account" element={<Account />} />
        <Route path="/dashboard/facility" element={<Facility />} />
        <Route path="/dashboard/expense" element={<Expense />} />
        <Route path="/dashboard/referral" element={<Referral />} />
        <Route path="/dashboard/team" element={<Team />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


