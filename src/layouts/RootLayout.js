import {
    Outlet,
    useLocation
} from "react-router-dom";
import '../index.css';
import Header from '../onboarding/header/Header';
import Footer from '../onboarding/header/Footer';


export default function RootLayout() {
    let location = useLocation();
    return (
        <div className="root-layout">
            {location.pathname !== '/dashboard' && <Header />}



            <main>
                <Outlet />
            </main>

            {location.pathname !== '/dashboard' && location.pathname !== '/dashboard/account' && location.pathname !== '/dashboard/facility' && location.pathname !== '/dashboard/expense' && location.pathname !== '/dashboard/referral' && location.pathname !== '/dashboard/team' && location.pathname !== '/dashboard' && location.pathname !== '/dashboard/account' && location.pathname !== '/dashboard/facility' && location.pathname !== '/dashboard/expense' && location.pathname !== '/dashboard/referral' && location.pathname !== '/dashboard/settings' && location.pathname !== '/dashboard/applyloan' && <Footer />}
        </div>
    )
}