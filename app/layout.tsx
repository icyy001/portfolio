import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rayane El Mselmi — Portfolio",
  description:
    "Second-year Computer Science student at Durham University. Projects in Node.js/Express, Prisma/SQLite, testing, and Python benchmarking/visualisation.",
  metadataBase: new URL("https://rayane-elmselmi.vercel.app/"),
  openGraph: {
    title: "Rayane El Mselmi — Portfolio",
    description:
      "Projects in APIs, UI, and data-driven work (Node.js/Express, Prisma/SQLite, Python).",
    url: "https://rayane-elmselmi.vercel.app/",
    siteName: "Rayane El Mselmi",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Rayane El Mselmi — Portfolio" }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rayane El Mselmi — Portfolio",
    description:
      "Projects in APIs, UI, and data-driven work (Node.js/Express, Prisma/SQLite, Python).",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
