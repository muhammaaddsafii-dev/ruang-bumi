"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <Image
                  src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/coming-soon.png"
                  alt="error"
                  width={1250}
                  height={664}
                />

                <h3>{t("Coming Soon")}</h3>
                <p>
                  {t("We're crafting an exceptional experience for you. Our store will launch soon. Stay tuned and be the first to know when we go live!")}
                </p>

                <Link href="/" className="default-btn">
                  {t("Go to Home")} <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
