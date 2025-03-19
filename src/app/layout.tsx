import "/styles/bootstrap.min.css";
import "/styles/fontawesome.min.css";
import "/styles/animate.min.css";
import "/styles/flaticon.css";
import "/styles/boxicons.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/bundle";

// Global CSS
import "/styles/style.css";
import "/styles/responsive.css";

import { Overpass } from "next/font/google";
import type { Metadata } from "next";
import GoTop from "@/components/Shared/GoTop";
import AosAnimation from "@/components/Layout/AosAnimation";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ruang Bumi",
  description: "Geoscience Services and Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={overpass.className}>
        {children}

        <AosAnimation />

        <GoTop />
      </body>
    </html>
  );
}
