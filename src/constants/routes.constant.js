import DashboardPage from "../pages/dashboard.page"
import LoginPage from "../pages/login.page"
import DetailPage from "../pages/details.page"
import BookingPage from "../pages/booking.page"
import Step1Page from "../pages/step1.page"

export const PRIVATE_ROUTES = [
    {
        path:"/",
        component:<DashboardPage />
    },
    {
        path:"/setup",
        component:<DetailPage />
    },
    {
        path:"/booking",
        component:<BookingPage />
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
    }
]