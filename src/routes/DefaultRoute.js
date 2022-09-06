import React, { lazy } from "react";

import Loadable from "../ui-component/Loadable";

const AuthLogin = Loadable(
  lazy(()=> import("../views/pages/authentication/Login"))
)

const DefaultRoute = {
  path: "/",
  element: <AuthLogin />,
};

export default DefaultRoute;
