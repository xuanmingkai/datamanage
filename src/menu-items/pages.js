import {
  IconKey,
  IconDatabaseImport,
  IconUsers,
  IconDatabase,
  IconSettings,
  IconSubtask,
  IconArrowDownRightCircle,
  IconChevronDown,
} from "@tabler/icons";

const icons = {
  IconKey,
  IconDatabaseImport,
  IconUsers,
  IconDatabase,
  IconSettings,
  IconSubtask,
  IconArrowDownRightCircle,
  IconChevronDown,
};

const pages = {
  id: "pages",
  title: "Pages",
  type: "group",
  children: [
    {
      id: "database",
      title: "DataBase",
      type: "collapse",
      icon: icons.IconDatabase,
      children: [
        {
          id: "importfile",
          title: "Import File",
          type: "item",
          url: "/pages/import-file",
          icon: icons.IconDatabaseImport,
          breadcrumbs: false,
        },
      ],
    },
    {
      id: "task-control",
      title: "TaskControl",
      type: "collapse",
      icon: icons.IconSubtask,
      children: [
        {
          id: "task-dashboard",
          title: "Dashboard",
          type: "item",
          url: "/tasks/dashboard",
          breadcrumbs: false,
        },
        {
          id: "task-deployment",
          title: "Deployment",
          type: "item",
          url: "/tasks/deployment",
          breadcrumbs: false,
        },
        {
          id: "task-management",
          title: "Management",
          type: "item",
          url: "/tasks/mangement",
          breadcrumbs: false,
        },
      ],
    },
    {
      id: "data-source",
      title: "DataSource",
      type: "collapse",
      icon: icons.IconArrowDownRightCircle,
      children: [
        {
          id: "fofa-data-source",
          title: "Soruce-Fofa",
          type: "item",
          url: "/pages/source-fofa",
          icon: icons.IconChevronDown,
          breadcrumbs: false,
        },
      ],
    },
    {
      id: "system-mangement",
      title: "Management",
      type: "collapse",
      icon: icons.IconSettings,
      children: [
        {
          id: "userlist",
          title: "Manage User",
          type: "item",
          url: "/pages/user-management",
          icon: icons.IconUsers,
          breadcrumbs: false,
        },
      ],
    },
    {
      id: "authentication",
      title: "Authentication",
      type: "collapse",
      icon: icons.IconKey,

      children: [
        {
          id: "login",
          title: "Login",
          type: "item",
          url: "/pages/login",
          target: true,
        },
        {
          id: "register",
          title: "Register",
          type: "item",
          url: "/pages/register",
          target: true,
        },
      ],
    },
  ],
};

export default pages;
