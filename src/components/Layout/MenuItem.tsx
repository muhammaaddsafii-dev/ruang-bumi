"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  label: string;
  link: string;
  icon?: React.ReactNode;
  submenu?: { label: string; link: string }[];
}

const MenuItem: React.FC<MenuItemProps> = ({ label, link, icon, submenu }) => {
  const pathname = usePathname();
  const isActive = pathname === link;

  if (submenu) {
    return (
      <li className="nav-item" key={label}>
        <Link
          href={link}
          className="nav-link"
          onClick={(e) => e.preventDefault()}
        >
          {icon && <span className="text-gray-500 mr-1">{icon}</span>}
          {label} <i className="fas fa-chevron-down ml-1"></i>
        </Link>

        <ul className="dropdown-menu">
          {submenu.map((subItem) => {
            const isActive = pathname === subItem.link;
            return (
              <li className="nav-item" key={subItem.label}>
                <Link
                  href={subItem.link}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {subItem.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }

  return (
    <li className="nav-item" key={label}>
      <Link
        href={link}
        className={`nav-link ${
          isActive ? "active" : ""
        } flex items-center gap-2`}
      >
        {icon && <span className="text-gray-500">{icon}</span>}
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
