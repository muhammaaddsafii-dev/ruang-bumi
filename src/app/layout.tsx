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
import { initializeDatabase } from "@/lib/dbInit";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ruang Bumi Persada | A collaborative space within the scope of earth science.",
  description: "We facilitate consultation and discussion space related to GIS, Agriculture, Forestry etc.",
};

if (process.env.NODE_ENV === 'development') {
  initializeDatabase().catch(console.error);
}

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