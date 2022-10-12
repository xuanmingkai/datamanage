import React, { lazy } from "react";

import MainLayout from "../layout/MainLayout";
import Loadable from "../ui-component/Loadable";

const DashboardDefault = Loadable(
  lazy(() => import("../views/dashboard/Default"))
);

const UtilsTypography = Loadable(
  lazy(() => import("../views/utilities/Typography"))
);
const UtilsColor = Loadable(lazy(() => import("../views/utilities/Color")));
const UtilsShadow = Loadable(lazy(() => import("../views/utilities/Shadow")));
const UtilsTablerIcons = Loadable(
  lazy(() => import("../views/utilities/TablerIcons"))
);
const UtilsMaterialIcons = Loadable(
  lazy(() => import("../views/utilities/MaterialIcons"))
);

const ImportFile = Loadable(
  lazy(() => import("../views/pages/interface/ImportFile"))
);
const UserManagement = Loadable(
  lazy(() => import("../views/pages/management/UserManagement"))
);
const UserProfile1 = Loadable(
  lazy(() => import("../views/pages/user/UserProfile1"))
);
const TaskDashboard = Loadable(
  lazy(() => import("../views/pages/tasks/TaskDashboard"))
);

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <DashboardDefault />,
        },
      ],
    },
    {
      path: "pages",
      children: [
        {
          path: "import-file",
          element: <ImportFile />,
        },
        {
          path: "user-management",
          element: <UserManagement />,
        },
      ],
    },
    {
      path: "tasks",
      children: [
        {
          path: "dashboard",
          element: <TaskDashboard />,
        },
      ],
    },
    {
      path: "utils",
      children: [
        {
          path: "util-typography",
          element: <UtilsTypography />,
        },
      ],
    },
    {
      path: "utils",
      children: [
        {
          path: "util-shadow",
          element: <UtilsShadow />,
        },
      ],
    },
    {
      path: "user",
      children: [
        {
          path: "account-profile",
          children: [
            {
              path: "profile1",
              element: <UserProfile1 />,
            },
          ],
        },
      ],
    },
    {
      path: "utils",
      children: [
        {
          path: "util-color",
          element: <UtilsColor />,
        },
      ],
    },
    {
      path: "icons",
      children: [
        {
          path: "tabler-icons",
          element: <UtilsTablerIcons />,
        },
      ],
    },
    {
      path: "icons",
      children: [
        {
          path: "material-icons",
          element: <UtilsMaterialIcons />,
        },
      ],
    },
  ],
};

export default MainRoutes;
