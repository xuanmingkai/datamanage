import { IconKey, IconDatabaseImport } from "@tabler/icons";

const icons = { IconKey, IconDatabaseImport };

const pages = {
  id: "pages",
  title: "Pages",
  type: "group",
  children: [
    {
      id: "importfile",
      title: "Import File",
      type: "item",
      url: "/pages/import-file",
      icon: icons.IconDatabaseImport,
      breadcrumbs: false,
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
