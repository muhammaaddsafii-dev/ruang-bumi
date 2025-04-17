import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  IconFile,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/admin/dashboard",
  },
  {
    navlabel: true,
    subheader: "Utilities",
  },
  {
    id: uniqueId(),
    title: "Projects",
    icon: IconCopy,
    href: "/admin/dashboard/utilities/projects",
  },
  {
    id: uniqueId(),
    title: "Articles",
    icon: IconFile,
    href: "/admin/dashboard/utilities/articles",
  },
  {
    navlabel: true,
    subheader: "Users",
  },
  // {
  //   id: uniqueId(),
  //   title: "Login",
  //   icon: IconLogin,
  //   href: "/admin/authentication/login",
  // },
  {
    id: uniqueId(),
    title: "Users",
    icon: IconUserPlus,
    href: "/admin/dashboard",
  },
];

export default Menuitems;
