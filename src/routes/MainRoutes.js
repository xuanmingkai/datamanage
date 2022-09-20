import React, { lazy } from 'react'

import MainLayout from '../layout/MainLayout'
import Loadable from '../ui-component/Loadable'

const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')))

const UtilsTypography = Loadable(lazy(() => import('../views/utilities/Typography')))
const UtilsTablerIcons = Loadable(lazy(() => import('../views/utilities/TablerIcons')))

const ImportFile = Loadable(lazy(() => import('../views/pages/interface/ImportFile')))
const UserManagement = Loadable(lazy(() => import('../views/pages/management/UserManagement')))

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
        }
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
      path: "icons",
      children: [
        {
          path: "tabler-icons",
          element: <UtilsTablerIcons />,
        },
      ],
    },
  ],
};

export default MainRoutes;
