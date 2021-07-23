import DashboardPage from "./views/Dashboard/Dashboard.js";
import UserProfile from "./views/UserProfile/UserProfile.js";
import HomePage from "./views/HomePage";
import ContactTable from "./views/Contact";
import Donate from "./views/Donate";

const dashboardRoutes = [{
        path: "/dashboard",
        name: "Dashboard",
        component: HomePage,
        layout: "/admin",
    },
    {
        path: "/home-page",
        name: "Home Page",
        component: HomePage,
        layout: "/admin",
    },
    {
        path: "/contact",
        name: "Contact List",
        component: ContactTable,
        layout: "/admin",
    },
    {
        path: "/donate",
        name: "Donate List",
        component: Donate,
        layout: "/admin",
    },
    {
        path: "/user",
        name: "User Profile",
        component: UserProfile,
        layout: "/admin",
    },
];

export default dashboardRoutes;