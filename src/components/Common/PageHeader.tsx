"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface PageHeaderProps {
  pageTitle: string;
  breadcrumbTextOne: string;
  breadcrumbTextTwo: string;
  breadcrumbUrl: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  pageTitle,
  breadcrumbTextOne,
  breadcrumbTextTwo,
  breadcrumbUrl,
}) => {
  const { t } = useLanguage();
  return (
    <>
      <div className="page-title-area page-title-bg2">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                {/* <h2>{t(pageTitle)}</h2> */}
                <ul>
                  <li>
                    <Link href={breadcrumbUrl}>{t(breadcrumbTextOne)}</Link>
                  </li>
                  <li>{t(breadcrumbTextTwo)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Shape Image */}
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={20}
            height={20}
          />
        </div>

        <div className="shape-img4">
          <Image
            src="/images/shape/shape4.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
        <div className="shape-img5">
          <Image
            src="/images/shape/shape5.png"
            alt="image"
            width={18}
            height={18}
          />
        </div>
        <div className="shape-img7">
          <Image
            src="/images/shape/shape16.png"
            alt="image"
            width={150}
            height={140}
          />
        </div>
        <div className="shape-img8">
          <Image
            src="/images/shape/shape8.png"
            alt="image"
            width={74}
            height={64}
          />
        </div>
        <div className="shape-img9">
          <Image
            src="/images/shape/shape9.png"
            alt="image"
            width={43}
            height={46}
          />
        </div>
        <div className="shape-img10">
          <Image
            src="/images/shape/shape10.png"
            alt="image"
            width={12}
            height={11}
          />
        </div>
      </div>
    </>
  );
};

export default PageHeader;
