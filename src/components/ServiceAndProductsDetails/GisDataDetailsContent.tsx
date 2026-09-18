"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const GisDataDetailsContent: React.FC = () => {
  const { t } = useLanguage();
  return (
    <>
      <div className="services-details-area ptb-80">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc">
              <h3>{t("Jual Beli Citra Satelit Resolusi Tinggi")}</h3>

              <p>
                {t("Ruang Bumi menyediakan layanan jual beli citra satelit resolusi tinggi untuk kebutuhan pemetaan, pemantauan lahan, pertanian, kehutanan, hingga perencanaan wilayah. Kami membantu Anda menentukan jenis dan resolusi citra satelit yang paling sesuai dengan kebutuhan proyek Anda.")}
              </p>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("Citra Satelit Resolusi Tinggi")}
                </h4>
                <p>
                  {t("Citra satelit resolusi tinggi berbagai resolusi (resolusi 10m hingga 30 cm)")}
                </p>
              </div>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("Konsultasi Kebutuhan Citra")}
                </h4>
                <p>
                  {t("Kami membantu Anda memilih jenis dan resolusi citra satelit yang tepat sesuai kebutuhan proyek, mulai dari pemetaan lahan pertanian, kehutanan, hingga tata ruang kota.")}
                </p>
              </div>

              <div className="features-text">
                <h4>
                  <i className="flaticon-tick"></i> {t("Pemesanan Mudah & Cepat")}
                </h4>
                <p>
                  {t("Pesan citra satelit secara online melalui Ruang Bumi Explorer dan terima data Anda dalam format TIFF/ECW melalui penyimpanan cloud.")}
                </p>
              </div>

              <Link
                href="https://explorer.ruangbumi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="default-btn"
                style={{ marginTop: "25px" }}
              >
                {t("Pesan Citra Satelit Sekarang")} <span></span>
              </Link>
            </div>

            <div className="services-details-image" style={{ display: "flex", justifyContent: "center" }}>
              <Image
                src="https://s3.ap-southeast-1.amazonaws.com/cdn.ruangbumi.com/assets/gis-uhuy.png"
                alt="citra satelit"
                width={400}
                height={400}
                style={{ width: "100%", maxWidth: "350px", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GisDataDetailsContent;
