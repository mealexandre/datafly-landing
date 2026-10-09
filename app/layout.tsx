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
    url: "https://datafly-landing-nq79.vercel.app",
    siteName: "DataFly",
    images: [
      {
        url: "https://datafly-landing-nq79.vercel.app/publichero-drone.jpg",
        width: 1200,
        height: 630,
        alt: "DataFly Drone Mapping",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DataFly | Drone Mapping & Agricultural Data in Georgia",
    description:
      "Drone mapping, topographic surveys, crop analysis, and 3D models for land, infrastructure, and farming projects in Georgia. Discuss your project with DataFly.",
    images: ["https://datafly-landing-nq79.vercel.app/publichero-drone.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}