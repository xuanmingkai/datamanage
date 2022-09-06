import { IconKey } from "@tabler/icons";

const icons = { IconKey };

const pages = {
  id: "pages",
  title: "Pages",
  caption: "Pages Caption",
  type: "group",
  children: [
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
