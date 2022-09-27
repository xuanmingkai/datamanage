import { IconKey, IconDatabaseImport, IconUsers, IconDatabase, IconSettings} from "@tabler/icons";

const icons = { IconKey, IconDatabaseImport, IconUsers, IconDatabase, IconSettings };

const pages = {
  id: "pages",
  title: "Pages",
  type: "group",
  children: [
    {
      id: "datasources",
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
      id: "system-mangement",
      title: "Management",
      type: "collapse",
      icon: icons.IconSettings,
      children: [
        {
          id: "userlist",
          title: "User List",
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
