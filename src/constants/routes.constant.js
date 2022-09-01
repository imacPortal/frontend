import DashboardPage from "../pages/dashboard.page"
import LoginPage from "../pages/login.page"
import DetailPage from "../pages/details.page"

export const PRIVATE_ROUTES = [
    {
        path:"/",
        component:<DashboardPage />
    },
    {
        path:"/setup",
        component:<DetailPage />
    },
]
export const PUBLIC_ROUTES = [
    {
        path:"/login",
        component:<LoginPage />
    }
]