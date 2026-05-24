import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
  },
]);

export default routes;
