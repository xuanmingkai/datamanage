import React, { lazy } from 'react'

import MainLayout from '../layout/MainLayout'
import Loadable from '../ui-component/Loadable'

const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')))

const UtilsTypography = Loadable(lazy(() => import('../views/utilities/Typography')))
const UtilsTablerIcons = Loadable(lazy(() => import('../views/utilities/TablerIcons')))

const SamplePage = Loadable(lazy(() => import('../views/sample-page')))
const WorkerImport = Loadable(lazy(() => import('../views/worker/Import')))

const MainRoutes = {
  paht: "/",
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
      path: "worker",
      children: [
        {
          path: "worker-import",
          element: <WorkerImport />,
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
    {
      path: "sample-page",
      element: <SamplePage />,
    },
  ],
};

export default MainRoutes;
