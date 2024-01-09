import CreateUser from "../features/user/create.users";
import UserList from "../features/user/user.list";
import Dashboard from "../pages/dashboard/dashboard";

const routeObjects = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/user/create",
    component: CreateUser,
  },
  {
    path: "/user/list",
    component: UserList,
  },
];

export default routeObjects;
