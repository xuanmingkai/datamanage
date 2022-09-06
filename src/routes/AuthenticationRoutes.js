import React, { lazy } from "react";

import MinimalLayout from "../layout/MinimalLayout";
import Loadable from "../ui-component/Loadable";

const AuthRegister = Loadable(
  lazy(() => import("../views/pages/authentication/Register"))
);

const AuthLogin = Loadable(
  lazy(()=> import("../views/pages/authentication/Login"))
)

const AuthenticationRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/pages/login",
      element: <AuthLogin />
    },
    {
      path: "/pages/register",
      element: <AuthRegister />,
    },
  ],
};

export default AuthenticationRoutes;
