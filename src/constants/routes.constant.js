import DashboardPage from "../pages/dashboard.page"

export const PRIVATE_ROUTES = [
    {
        path:"/",
        component:<DashboardPage />
    }
]
export const PUBLIC_ROUTES = [
    {
        path:"/home",
        component:<DashboardPage />
    }
]