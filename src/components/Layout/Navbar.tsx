"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { menus } from "../../../libs/menus";
import SidebarModal from "../SidebarModal/SidebarModal";
import { useLanguage } from "@/context/LanguageContext";

const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  // Sidebar Modal
  const [sidebarModal, setSidebarModal] = useState<boolean>(false);
  const toggleModal = (): void => {
    setSidebarModal(!sidebarModal);
  };

  // Navbar
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const toggleNavbar = (): void => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elementId = document.getElementById("navbar");
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classOne: string = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo: string = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      {/* NAVBAR RESPONSIVE */}
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-xl navbar-light">
              {/* Logo di kiri */}
              <Link href="/" className="navbar-brand">
                <Image
                  src="/images/logo-white.png"
                  alt="logo"
                  width={124}
                  height={38}
                  className="d-none d-md-block"
                />
                <Image
                  src="/images/logo-white.png"
                  alt="logo"
                  width={100}
                  height={30}
                  className="d-block d-md-none"
                />
              </Link>

              {/* Login button dan toggle - Mobile & Tablet */}
              <div className="d-flex d-xl-none align-items-center ms-auto">
                {/* Language Toggle for Mobile */}
                <button
                  onClick={toggleLanguage}
                  className="me-3"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "4px",
                    padding: "4px 8px",
                    fontSize: "12px",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "0.3s"
                  }}
                >
                  <i className="fas fa-globe me-1" style={{ color: "#70e000", marginTop: "-1px" }}></i>
                  <span style={{ lineHeight: "1" }}>{language === "id" ? "EN" : "ID"}</span>
                </button>

                <button
                  onClick={toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>
              </div>

              {/* Menu tengah - Desktop & Mobile/Tablet Collapse */}
              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                  {menus.map((menuItem) => (
                    <MenuItem key={menuItem.label} {...menuItem} />
                  ))}
                </ul>

                {/* Login button di menu mobile/tablet */}
                <div className="d-block d-xl-none mt-3 mb-2">
                  <Link
                    href="https://explorer.ruangbumi.com/"
                    className="default-btn w-100 text-center"
                  >
                    <i
                      className="fas fa-shopping-cart"
                      style={{
                        marginRight: "8px",
                        fontSize: "1rem",
                        animation: "pulse 2s infinite",
                      }}
                    ></i>
                    {t("|| ORDER & CHECK IMAGERY")} <span></span>
                  </Link>
                </div>
              </div>

              {/* Login button - Desktop only (Large screens) */}
              <div className="others-options d-none d-xl-flex align-items-center">

                {/* Removed Language Toggle from here */}

                <div className="login-option d-flex align-items-center">
                  <Link
                    href="https://explorer.ruangbumi.com/"
                    className="default-btn btn-sm"
                  >
                    <i
                      className="fas fa-shopping-cart"
                      style={{
                        marginRight: "8px",
                        fontSize: "1rem",
                        animation: "pulse 2s infinite",
                      }}
                    ></i>
                    {t("|| ORDER & CHECK IMAGERY")} <span></span>
                  </Link>

                  {/* Language Toggle for Desktop */}
                  <button
                    onClick={toggleLanguage}
                    className="ms-4"
                    style={{
                      backgroundColor: "transparent",
                      color: "#fff",
                      border: "none",
                      padding: "0",
                      fontSize: "15px",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "0.3s"
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "#70e000")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
                  >
                    <i className="fas fa-globe me-2" style={{ color: "#70e000", fontSize: "16px", marginTop: "-2px" }}></i>
                    <span style={{ lineHeight: "1" }}>{language === "id" ? "EN" : "ID"}</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Right Sidebar Modal */}
      <SidebarModal
        onClick={toggleModal}
        active={sidebarModal ? "active" : ""}
      />
    </>
  );
};

export default Navbar;
