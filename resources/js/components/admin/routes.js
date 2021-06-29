import DashboardPage from "./views/Dashboard/Dashboard.js";
import UserProfile from "./views/UserProfile/UserProfile.js";
// import TableList from "./views/TableList/TableList.js";
// import Typography from "./views/Typography/Typography.js";
// import Icons from "./views/Icons/Icons.js";
// import Navbars from "./views/Navbars";
import Banner from "./views/Banner";
import HomePage from "./views/HomePage";
import EnhancedTable from "./views/Table";
import Footer from "./views/Footer";
// import NotificationsPage from "./views/Notifications/Notifications.js";

// call api to render node navigation which need
// const fetchRoutes = () => {
//   let routes = [];
//   axios.get('api/nav').then(res => {
//     // we need path, name, icon*, component, default path layout
//   })
// }

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardPage,
    layout: "/admin",
  },  
  {
    path: "/contact",
    name: "Contact List",
    component: EnhancedTable,
    layout: "/admin",
  },
  {
    path: "/donate",
    name: "Donate List",
    component: EnhancedTable,
    layout: "/admin",
  },
  {
    path: "/banner",
    name: "Banner",
    component: Banner,
    layout: "/admin",
  },
  {
    path: "/footer",
    name: "Footer",
    component: Footer,
    layout: "/admin",
  },
  {
    path: "/home-page",
    name: "Home Page",
    component: HomePage,
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
