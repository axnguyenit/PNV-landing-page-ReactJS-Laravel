import DashboardPage from "./views/Dashboard/Dashboard.js";
import UserProfile from "./views/UserProfile/UserProfile.js";
import TableList from "./views/TableList/TableList.js";
// import TableList from "./views/TableList/TableList.js";
// import Typography from "./views/Typography/Typography.js";
// import Icons from "./views/Icons/Icons.js";
import Navbars from "./views/Navbars";
import Banner from "./views/Banner";
import About from "./views/About";
import EnhancedTable from "./views/Table"
import Causes from "./views/Causes";
// import Donate from "./views/Donate";
// import Gallery from "./views/Gallery";
// import Partners from "./views/Partners";
// import Volunteers from "./views/Volunteers";
// import Milestones from "./views/Milestones";
// import Contact from "./views/Contact";
// import Testimonials from "./views/Testimonials";
// import HelpingProcess from "./views/HelpingProcess";
// import JoinAsVolunteer from "./views/JoinAsVolunteer";
import Footer from "./views/Footer";
import Admin from "./layouts/Admin.js";
// import NotificationsPage from "./views/Notifications/Notifications.js";

// call api to render node navigation which need
// const fetchRoutes = () => {
//   let routes = [];
//   axios.get('api/nav').then(res => {
//     // we need path, name, icon*, component, default path layout
//   })
// }

const routes = [
  {
    path: "",
    name: "Dashboard",
    component: DashboardPage,
    layout: "/admin",
    exact: true,
    main: () => <Admin/>
  },  
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardPage,
    layout: "/admin",
    exact: true,
    main: () => <DashboardPage/>
  },  
  {
    path: "/contact",
    name: "Contact List",
    component: EnhancedTable,
    layout: "/admin",
    exact: true,
    main: () => <EnhancedTable/>
  },
  {
    path: "/donate",
    name: "Donate List",
    component: EnhancedTable,
    layout: "/admin",
    exact: true,
    main: () => <EnhancedTable/>
  },
  {
    path: "/banner",
    name: "Banner",
    component: Banner,
    layout: "/admin",
    exact: true,
    main: () => <Banner/>
  },
  {
    path: "/footer",
    name: "Footer",
    component: Footer,
    layout: "/admin",
    exact: true,
    main: () => <Footer/>
  },
  {
    path: "/home-page",
    name: "Home Page",
    component: About,
    layout: "/admin",
    exact: true,
    main: () => <About/>
  },
  {
    path: "/user",
    name: "User Profile",
    component: UserProfile,
    layout: "/admin",
    exact: true,
    main: () => <UserProfile/>
  },
];

export default routes;