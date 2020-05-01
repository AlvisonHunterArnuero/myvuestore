import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import LoginScreen from "./LoginScreen";

const routes = [
  {
    path: "/",
    redirect: {
      name: "login",
    },
  },

  {
    path: "/login",
    component: LoginScreen,
    name: "login",
  },

  {
    path: "/page1",
    component: Page1,
    name: "page1",
  },

  {
    path: "/page2",
    component: Page2,
    name: "Page2",
  },
  {
    path: "/page3",
    component: Page3,
    name: "Page3",
  },
  {
    path: "/checkout",
    component: Page4,
    name: "Page4",
  },
];

export default routes;
