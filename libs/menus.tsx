import {
  House,
  Contact,
  Briefcase,
  FolderOpen,
  FileText,
  ShoppingBag,
} from "lucide-react";
export const menus = [
  {
    label: "Home",
    link: "/",
    icon: (
      <House
        size={15}
        style={{ margin: "5px", verticalAlign: "text-bottom" }}
      />
    ),
  },
  {
    label: "About",
    link: "/about/",
    icon: (
      <Contact
        size={15}
        style={{ margin: "5px", verticalAlign: "text-bottom" }}
      />
    ),
  },
  {
    label: "Services",
    link: "/services-and-products/",
    icon: (
      <Briefcase
        size={15}
        style={{ margin: "5px", verticalAlign: "text-bottom" }}
      />
    ),
  },
  {
    label: "Projects",
    link: "/project/",
    icon: (
      <FolderOpen
        size={15}
        style={{ margin: "5px", verticalAlign: "text-bottom" }}
      />
    ),
  },
  {
    label: "Articles",
    link: "/article/",
    icon: (
      <FileText
        size={15}
        style={{ margin: "5px", verticalAlign: "text-bottom" }}
      />
    ),
  },
  {
    label: "Store",
    link: "/shop/",
    icon: (
      <ShoppingBag
        size={15}
        style={{ margin: "5px", verticalAlign: "text-bottom" }}
      />
    ),
  },
];
