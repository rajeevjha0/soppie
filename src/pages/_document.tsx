import { Html, Head, Main, NextScript } from "next/document";

import { Inter } from "next/font/google";
import Headertop from "@/components/Headertop"
import Headermain from "@/components/Headermain"
import Navbar from "@/components/Navbar"
import Link from "next/link";
import Footer from "@/components/Footer"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <Headertop/>
        <Headermain/>
        <Navbar/>
        <Main />
        <Footer/>
        <NextScript />
      </body>
    </Html>
  );
}
