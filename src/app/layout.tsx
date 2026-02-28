import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chamindu Madhushan — Software Engineer | AWS Certified | DevOps",
  description:
    "Portfolio of Chamindu Madhushan — BICT (Hons) undergraduate, AWS Certified Cloud Practitioner, MERN stack developer, and DevOps enthusiast specializing in CI/CD, Docker, Kubernetes, and Terraform.",
  keywords: [
    "Software Engineer",
    "AWS Certified Cloud Practitioner",
    "DevOps Engineer",
    "Full Stack Developer",
    "MERN Stack",
    "Docker",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Chamindu Madhushan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.dataset.theme="light"}else{document.documentElement.dataset.theme="dark"}}catch(e){document.documentElement.dataset.theme="dark"}})()`,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
