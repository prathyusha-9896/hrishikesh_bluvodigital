import { Geist, Geist_Mono } from "next/font/google";
import { Comme } from "next/font/google";

export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const comme = Comme({
  subsets: ["latin"],
  variable: "--font-comme",
  display: "swap",
});
