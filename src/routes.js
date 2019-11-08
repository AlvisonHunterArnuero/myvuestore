import Page1 from "./Page1";
import Page2 from "./Page2";

const routes = [
  {
    path: "/",
    component: Page1,
    name: "Page1"
  },
  {
    path: "/page2",
    component: Page2,
    name: "Page2"
  }
];

export default routes;