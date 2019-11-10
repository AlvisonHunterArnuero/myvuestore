import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

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
  },
  {
    path: "/page3",
    component: Page3,
    name: "Page3"
  },
];

export default routes;