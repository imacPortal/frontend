import DashboardPage from "../pages/dashboard.page"
import LoginPage from "../pages/login.page"

export const PRIVATE_ROUTES = [
    {
        path:"/",
        component:<DashboardPage />
    }
]
export const PUBLIC_ROUTES = [
    {
        path:"/login",
        component:<LoginPage />
    }
]