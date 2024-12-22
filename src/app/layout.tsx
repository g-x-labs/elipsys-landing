import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";
import GradientBackground from "@/app/components/GradientBackground";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Elipsys Landing",
  description:
    "Elipsys: Transforming your digital experience with cutting-edge technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} ${robotoMono.className} antialiased`}
      >
        <GradientBackground>{children}</GradientBackground>
      </body>
    </html>
  );
}
