import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DataFly | Drone Mapping & Agricultural Data in Georgia",
  description:
    "Drone mapping, topographic surveys, crop analysis, and 3D models for land, infrastructure, and farming projects in Georgia. Discuss your project with DataFly.",
  openGraph: {
    title: "DataFly | Drone Mapping & Agricultural Data in Georgia",
    description:
      "Drone mapping, topographic surveys, crop analysis, and 3D models for land, infrastructure, and farming projects in Georgia. Discuss your project with DataFly.",
    images: [
      {
        url: "https://datafly-landing.vercel.app/publichero-drone.jpg", // აქ შემდეგში რეალურ დომენს ჩაწერთ
        width: 1200,
        height: 630,
        alt: "DataFly Drone Mapping",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#121212] text-white antialiased">{children}</body>
    </html>
  );
}