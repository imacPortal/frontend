import DashboardPage from "../pages/dashboard.page"
import LoginPage from "../pages/login.page"
import DetailPage from "../pages/details.page"
import BookingPage from "../pages/booking.page"
import Step1Page from "../pages/step1.page"
import SettingsPage from "../pages/settings.page"
import AccountsPage from "../pages/accounts.page"
import ForgotPasswordPage from "../pages/forgotPassword.page"
import ChangePasswordPage from "../pages/changePassword.page"

export const PRIVATE_ROUTES = [
    {
        path:"/",
        component:<DashboardPage />
    },
    {
        path:"/booking",
        component:<BookingPage />
    },
    {
        path:"/settings",
        component:<SettingsPage />
    },
    {
        path:"/accounts",
        component:<AccountsPage />
    },
    {
        path:"/step1",
        component:<Step1Page/>
    }
]
export const PUBLIC_ROUTES = [
    {
        path:"/login",
        component:<LoginPage />
    },
    {
        path:"/forgotpassword",
        component:<ForgotPasswordPage />
    },
    {
        path:"/changepassword",
        component:<ChangePasswordPage />
    }
]